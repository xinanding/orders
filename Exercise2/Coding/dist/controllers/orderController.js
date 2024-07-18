"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchOrders = exports.updateOrder = exports.createOrder = void 0;
const orders = [];
const createOrder = (req, res) => {
    const { orderId, customerId, placementDate, status } = req.body;
    if (!orderId || !customerId || !placementDate || !status) {
        res.status(400).send("Invalid input data.");
        return;
    }
    orders.push({ orderId, customerId, placementDate, status });
    res.status(201).send("Order created.");
};
exports.createOrder = createOrder;
const updateOrder = (req, res) => {
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
exports.updateOrder = updateOrder;
const searchOrders = (req, res) => {
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
exports.searchOrders = searchOrders;
