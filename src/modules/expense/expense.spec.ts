import { calculate } from "./service";

describe("expense", ()=>{

    it ("it should give the exact amount of money that each user has to pay to others", ()=>{

        expect(calculate()).toEqual(["user 1 has to pay 333.3333333333333 to user 2", "user 1 has to pay 666.6666666666667 to user 3", "user 2 has to pay 333.33333333333337 to user 3"])
    })
})