import request from "supertest";
import app from "../src";


describe("expense", ()=>{

    describe("/add", ()=>{

        it("should pass?", async() =>{ // how?

            await request(app).post("/expense/add").send({
    userid: 1,
    amount : 1000,
    event : "shomal",
    groupid : 1
},).expect(200)

        })
    })
})