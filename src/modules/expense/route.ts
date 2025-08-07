import { Router } from "express";
import { expenses } from "./types";
import { expense } from "./expense.dto";
import { ZodError } from "zod";
import { calculate } from "./service";


export const expenseRouter = Router()


expenseRouter.post("/add", (req, res) => {

    try {
        const data = expense.parse(req.body)
        const { userid, amount, event, groupid } = data

        const expenseData = { userid, amount, event, groupid }
        expenses.push(expenseData)
        res.status(200).send(expenses)
    }
    catch (e) {

        if (e instanceof ZodError) {

            res.status(400).send(e.message)
            return
        }
    }
})


expenseRouter.get("/calculate", (req, res) => {  // i dont think that this method will give min number of transactions

    try{

        const payments = calculate()

        res.status(200).send(payments)
    
    } catch(e){
        res.status(400).send("can not calculate")

    }

})


