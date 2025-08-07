
export type Expense = {
    userid: number,
    amount : number,
    event : string,
    groupid : number
} 


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


export default Expense