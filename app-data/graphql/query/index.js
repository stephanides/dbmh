import gql from 'graphql-tag';

export const USERS_QUERY = gql`
  query users {
    users {
      _id
      confirmed
      email
      firstName
      lastName
    }
  }
`;
