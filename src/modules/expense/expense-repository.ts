import Expense from "./types";



export const expenses : Expense[] = [{
    userid: 1,
    amount : 1000,
    event : "shomal",
    groupid : 1
},
{    userid: 2,
    amount : 2000,
    event : "shomal",
    groupid : 1},
{    userid: 3,
    amount : 3000,
    event : "shomal",
    groupid : 1}]



const findExpensrByUserId = (id : number)=> {

    return expenses.find(x => x.userid === id)

}