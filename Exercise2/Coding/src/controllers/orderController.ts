import { Request, Response } from "express";
import { Order } from "../models/order";

const orders: Order[] = [];

export const createOrder = (req: Request, res: Response): void => {
  const { orderId, customerId, placementDate, status } = req.body;
  if (!orderId || !customerId || !placementDate || !status) {
    res.status(400).send("Invalid input data.");
    return;
  }
  orders.push({ orderId, customerId, placementDate, status });
  res.status(201).send("Order created.");
};

export const updateOrder = (req: Request, res: Response): void => {
  const { orderId } = req.params;
  const { customerId, placementDate, status } = req.body;
  const order = orders.find((o) => o.orderId === orderId);
  if (!order) {
    res.status(404).send("Order not found.");
    return;
  }
  if (!customerId || !placementDate || !status) {
    res.status(400).send("Invalid input data.");
    return;
  }
  order.customerId = customerId;
  order.placementDate = placementDate;
  order.status = status;
  res.status(200).send("Order updated.");
};

export const searchOrders = (req: Request, res: Response): void => {
  const { customerId, status } = req.query;
  let filteredOrders = orders;
  if (customerId) {
    filteredOrders = filteredOrders.filter((o) => o.customerId === customerId);
  }
  if (status) {
    filteredOrders = filteredOrders.filter((o) => o.status === status);
  }
  res.status(200).json(filteredOrders);
};
