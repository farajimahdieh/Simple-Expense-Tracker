import express from "express";
import {expenseRouter } from "./modules/expense/route";
import { userRouter } from "./modules/user/route";

const app = express();
app.use(express.json())  


app.use("/expense", expenseRouter)
app.use("/user", userRouter)

export default app

