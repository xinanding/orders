import request from "supertest";
import express from "express";
import bodyParser from "body-parser";
import orderRoutes from "../routes/orderRoutes";

const app = express();
app.use(bodyParser.json());
app.use(orderRoutes);

describe("Order API", () => {
  it("should create an order", async () => {
    const response = await request(app)
      .post("/orders")
      .auth("admin", "password")
      .send({
        orderId: "1",
        customerId: "123",
        placementDate: "2024-07-14",
        status: "pending",
      });
    expect(response.status).toBe(201);
    expect(response.text).toBe("Order created.");
  });

  it("should update an order", async () => {
    await request(app).post("/orders").auth("admin", "password").send({
      orderId: "1",
      customerId: "123",
      placementDate: "2024-07-14",
      status: "pending",
    });

    const response = await request(app)
      .put("/orders/1")
      .auth("admin", "password")
      .send({
        customerId: "456",
        placementDate: "2024-07-15",
        status: "shipped",
      });
    expect(response.status).toBe(200);
    expect(response.text).toBe("Order updated.");
  });

  it("should search orders", async () => {
    await request(app).post("/orders").auth("admin", "password").send({
      orderId: "1",
      customerId: "123",
      placementDate: "2024-07-14",
      status: "pending",
    });

    const response = await request(app)
      .get("/orders")
      .auth("admin", "password")
      .query({ customerId: "123" });
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
    expect(response.body[0]).toMatchObject({
      orderId: "1",
      customerId: "123",
      placementDate: "2024-07-14",
      status: "pending",
    });
  });
});
