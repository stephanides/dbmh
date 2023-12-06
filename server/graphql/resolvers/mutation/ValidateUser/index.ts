import { config } from '../../../../config';
const jwt = require('jsonwebtoken');

const validateUser: (
  root: any,
  args: any,
  ctx: any
) => Promise<Boolean> = async (root, token, ctx) => {
  try {
    const { jwtSecret } = config;
    const isAutentificated = jwt.verify(token.token, jwtSecret);
    if (isAutentificated) {
      return true;
    }
  } catch (err) {
    return false;
  }
};

export default validateUser;
