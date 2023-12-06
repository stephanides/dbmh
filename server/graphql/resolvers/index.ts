// queries
import users from './query/Users';

// mutations

import loginUser from './mutation/LoginUser';
import registerUser from './mutation/RegisterUser';
import updateUser from './mutation/UpdateUser';

import validateUser from './mutation/ValidateUser';
import createContact from './mutation/CreateContact';

const resolvers = {
  Query: {
    users: async (root: any, args: any, ctx: any) => users(root, args, ctx),
  },
  Mutation: {
    loginUser: async (root: any, args: any, ctx: any) =>
      loginUser(root, args, ctx),
    registerUser: async (root: any, args: any, ctx: any) =>
      registerUser(root, args, ctx),
    updateUser: async (root: any, args: any, ctx: any) =>
      updateUser(root, args, ctx),
    validateUser: async (root: any, args: any, ctx: any) =>
      validateUser(root, args, ctx),

    createContact: async (root: any, args: any, ctx: any) =>
      createContact(root, args, ctx),
  },
};

export default resolvers;
