import { describe } from "node:test";
import { Calculatedebts, CalculateSpentMoney } from "./service";


describe("CalculateSpentMoney", ()=>{

    it ("it should calculate the money that each user has spent", async()=>{
        await expect(CalculateSpentMoney(2)).toBe(2000)
    })

    it ("it should each user's debt", async()=> {
        await expect(Calculatedebts({id: 1, name: "Ali", groups: [1, 2]})).toBe(5000)

    })

})

