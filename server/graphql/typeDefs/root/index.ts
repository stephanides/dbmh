import { gql } from 'apollo-server-express';

const rootTypeDefs = gql`
  type Query {
    users: [User]
  }

  type Mutation {
    loginUser(userLoginInput: UserLoginInput!): UserLogged
    registerUser(userRegInput: UserRegInput!): User
    updateUser(id: String, confirmed: Boolean): User
    validateUser(token: String!): Boolean

    createContact(createContactInput: CreateContactInput!): Contact
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

export default rootTypeDefs;
