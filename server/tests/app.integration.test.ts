import request from "supertest";
import { beforeAll, describe, expect, it } from "vitest";

let app: typeof import("../src/app").default;

beforeAll(async () => {
  process.env.NODE_ENV = "test";
  process.env.JWT_SECRET = "integration-test-secret-not-for-production";
  app = (await import("../src/app")).default;
});

describe("Express application", () => {
  it("reports health without requiring MongoDB", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });

  it("validates signup input through the full middleware stack", async () => {
    const response = await request(app)
      .post("/api/auth/signup")
      .send({ email: "not-an-email" });

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      success: false,
      error: "Please provide name, email and password",
    });
  });

  it("protects expense routes when no bearer token is supplied", async () => {
    const response = await request(app).get("/api/expenses");

    expect(response.status).toBe(401);
    expect(response.body).toMatchObject({
      success: false,
      error: "No token provided. Please login.",
    });
  });

  it("returns a JSON 404 for unknown routes", async () => {
    const response = await request(app).get("/does-not-exist");

    expect(response.status).toBe(404);
    expect(response.body.success).toBe(false);
  });
});
