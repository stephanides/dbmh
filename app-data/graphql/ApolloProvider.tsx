import {
  ApolloClient,
  ApolloLink,
  ApolloProvider as ApolloProviderBase,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import Cookie from 'js-cookie';
import { BatchHttpLink } from '@apollo/client/link/batch-http';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { setContext } from '@apollo/client/link/context';
import { ReactNode } from 'react';

const domain: string =
  process.env.NODE_ENV === 'production'
    ? 'v1.daybymemediahouse.com'
    : 'localhost'; // change this to domain
const protocol: string =
  process.env.NODE_ENV === 'production' ? 'https' : 'http'; // change this to https
const port = Number(process.env.PORT) || 3336;
export const API_URL: string =
  process.env.NODE_ENV === 'production'
    ? `${protocol}://${domain}/api`
    : `${protocol}://${domain}:${port}/api`;

type Props = {
  children: ReactNode;
};

function prepareApollo(): ApolloClient<NormalizedCacheObject> {
  // Apollo Error handler
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map((err) => {
        const { message, locations, path } = err;

        console.warn(
          `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
            locations
          )}, Path: ${path}`
        );
      });
    }

    if (networkError) {
      console.warn(`[Network error]: ${networkError}`);
    }
  });

  // Apollo authorization Bearer
  const authLink = setContext(async (_, { headers }) => {
    const token = Cookie.get('token');

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  // Retry Link
  const retryLink = new RetryLink({
    delay: {
      initial: 300,
      max: Infinity,
      jitter: true,
    },
    attempts: {
      max: 5,
      retryIf: (error, _operation) => !!error,
    },
  });

  // Http Link
  const httpLink = new BatchHttpLink({ uri: API_URL });

  // Apollo Link
  const link = ApolloLink.from([errorLink, authLink, retryLink, httpLink]);

  // Apollo cache
  const cache = new InMemoryCache();

  // Apollo client
  const client = new ApolloClient({
    cache,
    link,
  });

  return client;
}

export default function ApolloProvider(props: Props) {
  const { children } = props;
  const client = prepareApollo();

  return <ApolloProviderBase client={client}>{children}</ApolloProviderBase>;
}
