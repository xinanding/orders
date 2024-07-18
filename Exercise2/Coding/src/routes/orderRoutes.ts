import { Router } from "express";
import {
  createOrder,
  updateOrder,
  searchOrders,
} from "../controllers/orderController";
import { authenticate } from "../middleware/auth";

const router = Router();

router.post("/orders", authenticate, createOrder);
router.put("/orders/:orderId", authenticate, updateOrder);
router.get("/orders", authenticate, searchOrders);

export default router;
