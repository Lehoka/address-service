import request from 'supertest';
import server from '../../api/express-api';
import { Server } from "http";

let appServer: Server;

beforeAll(async () => {
    appServer = server.listen(8001, () => {
        console.log('Test server is running on port 4001')
    });
});

afterAll(async () => {
    appServer.close();
});

describe("Address Service Integration Tests", () => {
    it("GET /api/address - gets an address object", async () => {
        const res = await request(appServer).get("/api/address");
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("id");
        expect(res.body).toHaveProperty("address");
        expect(typeof res.body.id).toBe("string");
        expect(typeof res.body.address).toBe("string");
    });
});