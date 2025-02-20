import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { adminValidation } from './admin.validation';
import { adminController } from './admin.controller';

const router = express.Router();

// Create a new admin
router.post(
  '/create-admin',
  validateRequest(adminValidation.adminValidationSchema),
  adminController.createAdmin,
);

// Get all admins
router.get('/', adminController.getAllAdmins);

// Get a single admin by ID
router.get('/:id', adminController.getAllAdmins);

// Update an admin by ID
router.put(
  '/:id',
  validateRequest(adminValidation.updateAdminValidationSchema),
  adminController.updateAdmin,
);

// Delete an admin by ID
router.delete('/:id', adminController.deleteAdmin);

export const AdminRoutes = router;
