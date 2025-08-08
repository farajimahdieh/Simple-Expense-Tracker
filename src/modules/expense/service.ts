import { expenses } from "./types"
import { CalculateSpentMoney } from "../user/service"
import { groups } from "../group/types"




export const calculate = () => {

    const ExpenseList: { userid: number, amount: number }[] = []

    const PortionList: { userid: number, portion: number, checked: boolean }[] = []

    for (const exp of expenses) {
        const data = CalculateSpentMoney(exp.userid)
        ExpenseList.push({ userid: exp.userid, amount: data })

        const grp = groups.find(g => g.id === exp.groupid)

        if (grp === undefined) {
            continue
        } // what if someone is a group member but not shared here!
        //should we check the event 
        PortionList.push({ userid: exp.userid, portion: (exp.amount) / grp.countmembers, checked: false })
    }

    const payments: string[] = []

    for (const user1 of PortionList) {
        if (user1.checked) {
            continue
        }

        for (const user2 of PortionList) {

            if ((user1.userid !== user2.userid) && (!user2.checked)) {

                if (user1.portion >= user2.portion) {

                    const tobepaid = user1.portion - user2.portion
                    const string = `user ${user2.userid} has to pay ${tobepaid} to user ${user1.userid}`
                    payments.push(string)

                } else {
                    const tobepaid = user2.portion - user1.portion
                    const string = `user ${user1.userid} has to pay ${tobepaid} to user ${user2.userid}`
                    payments.push(string)
                }


            }

            user1.checked = true
        }
    }


    return payments
}