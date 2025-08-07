
import { expenses } from "../expense/types"
import User from "./types"

export const CalculateSpentMoney = (validid : number) =>{
    
    let total_expense = 0

    for(const expense of expenses){   /// i used for loop, is it ok? :)))
        if(expense.userid === validid){
            total_expense += expense.amount
        }
    }
    return total_expense
     
}



export const Calculatedebts = (validuser : User) => {

    const validid = validuser.id
    const shared_expense = expenses.filter(x => validuser.groups.includes(x.groupid)); 
    const others_total = shared_expense.filter(shared_expense => shared_expense.userid !== validid).reduce((sum, exp) => (sum+exp.amount), 0)

    return others_total
}
