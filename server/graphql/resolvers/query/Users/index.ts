import User, { IUser } from '../../../../db/models/User';

const users: (root: any, args: any, ctx: any) => Promise<IUser[] | []> = async (
  root,
  args,
  ctx
) => {
  try {
    const result: IUser[] = (await User.find()) || [];

    return result;
  } catch (err) {
    throw new Error(err);
  }
};

export default users;
