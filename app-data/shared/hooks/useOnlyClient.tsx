import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

const OnlyClientContext = createContext<{ onlyClient: boolean }>({
  onlyClient: false,
});

type Props = {
  children: ReactNode;
};

export function OnlyClientProvider(props: Props) {
  const { children } = props;
  const [onlyClient, setOnlyClient] = useState<boolean>();

  useEffect(() => {
    if (onlyClient) {
      return;
    }

    setOnlyClient(true);
  }, [onlyClient]);

  if (!onlyClient) {
    return null;
  }

  return (
    <OnlyClientContext.Provider value={{ onlyClient }}>
      {children}
    </OnlyClientContext.Provider>
  );
}

export default function useOnlyClient(): boolean {
  const { onlyClient } = useContext(OnlyClientContext);

  return onlyClient;
}
