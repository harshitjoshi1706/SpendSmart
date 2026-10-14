import jwt from "jsonwebtoken";
import { afterEach, describe, expect, it } from "vitest";
import { generateToken } from "../src/utils/tokenHelpers";

const originalSecret = process.env.JWT_SECRET;

afterEach(() => {
  if (originalSecret === undefined) {
    delete process.env.JWT_SECRET;
  } else {
    process.env.JWT_SECRET = originalSecret;
  }
});

describe("generateToken", () => {
  it("creates a seven-day JWT containing the user id", () => {
    process.env.JWT_SECRET = "unit-test-secret-not-for-production";

    const token = generateToken("user-123");
    const payload = jwt.verify(token, process.env.JWT_SECRET) as jwt.JwtPayload;

    expect(payload.userId).toBe("user-123");
    expect(payload.exp! - payload.iat!).toBe(7 * 24 * 60 * 60);
  });

  it("fails safely when JWT_SECRET is missing", () => {
    delete process.env.JWT_SECRET;

    expect(() => generateToken("user-123")).toThrow(
      "JWT_SECRET is not defined in environment variables",
    );
  });
});
