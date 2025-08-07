import { Router } from "express";
import { users } from "../user/types";
import { Calculatedebts, CalculateSpentMoney } from "./service";


export const userRouter = Router()



userRouter.get("/view/:userid", (req, res) => {

    const userid = parseInt(req.params.userid)
    const validuser = users.find(x => x.id === userid);
    
    if (!validuser) {
       res.status(404).send("User not found");
        return
    }
    const validid = validuser.id
    const total_expense = CalculateSpentMoney(validid)
    res.status(200).send(total_expense);
    
});



userRouter.get("/debt/:userid", (req, res) => {


    const userid = parseInt(req.params.userid)
    const validuser = users.find(x => x.id === userid);
    
    if (!validuser) {
       res.status(404).send("User not found");
        return
    }

    const others_total = Calculatedebts(validuser)
    res.status(200).send(`others total: ${others_total}`); 
})
