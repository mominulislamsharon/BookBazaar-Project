import { Router } from "express";
import { userRoutes } from "../User/usre.route";
import { ProductRoutes } from "../BookProduct/product.route";
import { OrdersRoutes } from "../BookOrder/order.route";
import { AdminRoutes } from "../Admin/admin.route";
import { authRouters } from "../Auth-User/auth.route";


const  router = Router();

const routeRoutes = [
  {
    path: '/users',
    route: userRoutes
  },
  {
    path: '/admins',
    route: AdminRoutes
  },
  {
    path: '/products',
    route: ProductRoutes
  },
  {
    path: '/orders',
    route: OrdersRoutes
  },
  {
    path: "/auth", 
    route: authRouters
  }
]

routeRoutes.forEach((route) => router.use(route.path, route.route));

export default router;