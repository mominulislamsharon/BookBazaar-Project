/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../User/user.model';
import { IUser } from '../User/user.interface';
import config from '../../config';

const register = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};

const login = async (payload: { email: string; password: string }) => {
  const user = await User.findOne({ email: payload?.email }).select(
    '+password',
  );
  if (!user) {
    throw 'Invalid credentials';
  }

  const isPasswordValid = await bcrypt.compare(
    payload?.password,
    user?.password,
  );

  if (!isPasswordValid) throw new Error('Invalid credentials');

  // Generate Token

  const token = jwt.sign(
    { email: user?.email, role: user?.role },
    config.jwt_secret!,
    {
      expiresIn: config.jwt_expires_in,
    },
  );

  const { password, ...remainData } = user;

  return { token, remainData };
};

export const AuthService = {
  register,
  login,
};
