import { gql } from 'apollo-server-express';

const Contact = gql`
  input CreateContactInput {
    name: String!
    email: String!
    message: String!
    recaptchaToken: String
  }
  type Contact {
    _id: String!
    name: String!
    email: String!
    message: String!
  }
`;

export default Contact;
