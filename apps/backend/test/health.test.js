import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../index.js";

describe("GET /api/health", () => {
  it("debería responder correctamente", async () => {
    const response = await request(app).get("/api/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("OK");
    expect(response.body.message).toBe("Backend funcionando correctamente");
  });
});
