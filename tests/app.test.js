const request = require("supertest");
const app = require("../src/app");

// Test the health check endpoint
describe("GET /health", () => {
  it("should return 200 and healthy status", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("healthy");
    expect(res.body.timestamp).toBeDefined();
  });
});

// Test the status endpoint
describe("GET /api/status", () => {
  it("should return 200 and service info", async () => {
    const res = await request(app).get("/api/status");
    expect(res.status).toBe(200);
    expect(res.body.service).toBe("wrong-name");
    expect(res.body.version).toBe("1.0.0");
    expect(res.body.uptime).toBeDefined();
  });
});
