import { createTestApp } from "@/lib/create-app";
import router from "@/routes/health-check";
import { expect, describe, it } from "bun:test";

describe("Auth", () => {
  it("responds with 200 and 'Server running'", async () => {
    const testRouter = createTestApp(router);
    const response = await testRouter.request("/health");
    const result = await response.text();

    expect(response.status).toBe(200);
    expect(result).toBe("Server running");
  });
});
