import request from "supertest";

import { app } from "../../../app";
import { response } from "express";


describe("GET /api/v1/files", ()=>{
    it("returns status code 201 if the req.rol is admin", async ()=>{
        const res = await request(app)
        .get("/api/v1/files")
        .set("Accept", 'application/json')
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2wiOiJhZG1pbiIsIm5hbWUiOiJwYXBpIiwiaWF0IjoxNzA4MjI1MTcyLCJleHAiOjE3MDgyNjgzNzJ9.KiHaMksOVVTpWqx2e8ng_3v2m-0LVpvbmvGqux1WTCA')


        expect(res.statusCode).toBe(200)
        expect(res.text).toBe("te mando to")
    })
})