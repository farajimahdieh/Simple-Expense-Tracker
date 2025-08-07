
import request from "supertest";
import app from "../src";

describe("user", () => {

    describe("/view/:userid",() => {
        
        it ("every valid user should be able to see the total money that has spent", async() =>{
            
            
            await request(app).get("/user/view/1").expect(200)
        })

        it ("should not return the spent money if the user id invalid", async() =>{


            await request(app).get("/user/view/5").expect(404)
        })
        
    })

    describe("/debt/:userid", ()=>{

        it("every valid user should be able to see that how much money ithers have spent", async()=>{

            await request(app).get("/user/debt/1").expect(200)
        })


        it("it should fail if user is not valid", async()=>{

            await request(app).get("/user/debt/10").expect(404)
        })

    })
})
