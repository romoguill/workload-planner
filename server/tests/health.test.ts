import { createTestApp } from "@/lib/create-app";
import router from "@/routes/health-check";
import { describe, expect, it } from "bun:test";

describe("Health check", () => {
  it("responds with 200 and 'Server running'", async () => {
    const testRouter = createTestApp(router);
    const response = await testRouter.request("/health");
    const result = await response.text();

    expect(response.status).toBe(200);
    expect(result).toBe("Server running");
  });
});
