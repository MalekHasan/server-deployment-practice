'use strict'
const server=require("../src/server")
const supertest =require("supertest")
const request=supertest(server.app)

describe("API Server",()=>{
    test("Home Page API",async()=>{
        const response=await request.get("/")
        expect(response.status).toEqual(200)
        expect(response.text).toEqual("Server is running")
    })
    test("Data Page API",async()=>{
        const response=await request.get("/endpoint")
        expect(response.status).toEqual(200)
        expect(typeof response.body).toEqual("object")
    })
    test("Error Page API",async()=>{
        const response=await request.get("/ad")
        expect(response.status).toEqual(404)

    })
})