import express from "express";
import bodyParser from "body-parser";
import orderRoutes from "./routes/orderRoutes";

const app = express();
app.use(bodyParser.json());
app.use(orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Mock API server running on port ${PORT}`);
});
