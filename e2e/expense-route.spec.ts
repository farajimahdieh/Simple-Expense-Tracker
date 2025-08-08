import request from "supertest";
import app from "../src";


describe("expense", ()=>{

    describe("/add", ()=>{

        it("should add an expense and return the created object", async () => {
        const expenseData = {
            userid: 1,
            amount: 1000,
            event: "shomal",
            groupid: 1
        };

        await request(app)
            .post("/expense/add")
            .send(expenseData)
            .expect(200);
        });

        it("should fail if required fields are missing", async () => {
        const res = await request(app)
            .post("/expense/add")
            .send({ amount: 1000 }) 
            .expect(400);
    });


    })
})