import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import Cookies from 'js-cookie';
import { useMutation } from '@apollo/client';

import { LOGIN_USER_MUTATION } from '../../graphql/mutation';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';

const AuthContext = createContext<{
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<boolean>;
  user: {
    firstName: string;
    lastName: string;
  };
  setUser: Dispatch<React.SetStateAction<{
    firstName: string;
    lastName: string;
}>>
}>({
  isAuthenticated: false,
  setIsAuthenticated: () => null,
  user: {
    firstName: '',
    lastName: '',
  },
  setUser: () => null
});

type Props = {
  children: ReactNode;
};

export default function AuthProvider(props: Props): JSX.Element {
  const { children } = props;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
  });

  useEffect(() => {
    const token = Cookies.get('token');
    const firstName = Cookies.get('firstName');
    const lastName = Cookies.get('lastName');

    if (!token) {
      return;
    }
    
    setIsAuthenticated(true);
    setUser({
      firstName,
      lastName
    })
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

type UserSignInput = {
  email: string;
  password: string;
};

export function useAuth(): {
  authenticated: boolean;
  signIn: (input: UserSignInput) => Promise<void>;
  signOut: () => void;
  user: {
    firstName: string;
    lastName: string;
  };
} {
  const { isAuthenticated, setIsAuthenticated, user, setUser } =
    useContext(AuthContext);
  const router = useRouter();
  const toast = useToast();
  const [loginUserMutate] = useMutation(LOGIN_USER_MUTATION);

  async function handleSignIn(input: UserSignInput): Promise<void> {
    try {
      const response = (await loginUserMutate({
        variables: { userLoginInput: input },
      })) as any;
      const { token, confirmed, _id, firstName, lastName, email } =
        response.data.loginUser;
      if (!confirmed) {
        toast({
          title:
            'Nemáte práva na prístup do administrácie. Kontaktujte administrátora.',
          status: 'error',
          isClosable: true,
        });
        return;
      }

      Cookies.set('token', token);
      Cookies.set('userId', _id);
      Cookies.set('firstName', firstName)
      Cookies.set('lastName', lastName)

      setIsAuthenticated(true);
      router.push('/admin');
    } catch (error) {
      toast({
        title: 'Nesprávne prihlasovacie údaje',
        status: 'error',
        isClosable: true,
      });
    }
  }

  function handleSignOut(): void {
    Cookies.remove('token');
    Cookies.remove('userId');
    Cookies.remove('firstName');
    Cookies.remove('lastName');
    setIsAuthenticated(false);
  }

  return {
    authenticated: isAuthenticated,
    user,
    signIn: handleSignIn,
    signOut: handleSignOut,
  };
}
