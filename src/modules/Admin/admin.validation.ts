import { z } from 'zod';

const adminValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  role: z.enum(['admin']).optional(),
});

const updateAdminValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  role: z.enum(['admin']).optional(),
})

export const adminValidation = {
  adminValidationSchema,
  updateAdminValidationSchema,
};