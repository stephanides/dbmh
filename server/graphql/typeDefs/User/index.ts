import { gql } from 'apollo-server-express';

const User = gql`
  input UserLoginInput {
    email: String!
    password: String!
    recaptchaToken: String
  }

  input UserRegInput {
    email: String!
    firstName: String!
    lastName: String!
    password: String!
    role: Int
  }

  type User {
    _id: String!
    confirmed: Boolean!
    email: String
    firstName: String
    lastName: String
    role: Int!
  }

  type UserLogged {
    _id: String!
    confirmed: Boolean!
    email: String
    firstName: String
    lastName: String
    role: Int!
    token: String!
    tokenExpiresIn: Float
  }
`;

export default User;
