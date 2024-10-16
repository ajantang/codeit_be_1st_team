import cors from "cors";
import express from "express";
import dotenv from "dotenv";

import adminRouter from "./src/controllers/admin-controller.js";
import authRouter from "./src/controllers/auth-controller.js";
import cardRouter from "./src/controllers/cards-controller.js";
import notificationRouter from "./src/controllers/notification-controller.js";
import pointRouter from "./src/controllers/points-controller.js";
import shopRouter from "./src/routes/shop-router.js"
import userRouter from "./src/controllers/users-controller.js";
import {
  logErrors,
  clientErrorHandler,
  serverErrorHandler,
} from "./src/middlewares/error.js";

import { EXPIRE_TIME } from "./src/constants/session";

dotenv.config();
export const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      // secure: true,
      sameSite: "none",
      maxAge: EXPIRE_TIME,
    },
  })
);
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/auth", authRouter);
app.use("/cards", cardRouter);
app.use("/notifications", notificationRouter);
app.use("/points", pointRouter);
app.use("/shop", shopRouter);
app.use("/users", userRouter);

app.use(logErrors);
app.use(clientErrorHandler);
app.use(serverErrorHandler);

app.listen(3000, () => console.log("Server is listening"));
