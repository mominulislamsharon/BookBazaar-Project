import { z } from 'zod';

const loginValidationSchema = z.object({
  name: z.string({required_error: "Name not provided"}),
  email: z.string({ required_error: 'Email is required' }).email(),
  password: z
    .string({ required_error: 'Password is required' })
    .min(8, 'Password must be at least 8 characters long'),
});

export const authValidation = {
  loginValidationSchema,
};
