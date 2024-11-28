import { createTestApp } from "@/lib/create-app";
import { authRouter } from "@/routes/auth/auth.index";
import { describe, expect, it } from "bun:test";
import env from "../../shared/env";

// const loginUrl = new RegExp(`^${env.KINDE_DOMAIN}/auth/cx/.*m:login`);
// const registerUrl = new RegExp(`^${env.KINDE_DOMAIN}/auth/cx/.*m:login`);

// beforeAll(() => {
//   mock(loginUrl, {
//     response: {
//       data: "hello",
//     },
//   });
// });
// // afterAll(() => kindeServer.close());
// // afterEach(() => kindeServer.resetHandlers());

describe("Auth with Kinde", () => {
  describe("Register route", () => {
    it("should redirect with 307 to Kinde", async () => {
      const testRouter = createTestApp(authRouter);
      const response = await testRouter.request("/auth/register");

      expect(response.status).toBe(307);
      expect(response.headers.get("Location")).toContain(env.KINDE_DOMAIN);
    });
  });
  describe("Login route", () => {
    it("should redirect with 307 to Kinde", async () => {
      const testRouter = createTestApp(authRouter);
      const response = await testRouter.request("/auth/login");

      expect(response.status).toBe(307);
      expect(response.headers.get("Location")).toContain(env.KINDE_DOMAIN);
    });
  });
  describe("Logout route", () => {
    it("should redirect with 307 to Kinde", async () => {
      const testRouter = createTestApp(authRouter);
      const response = await testRouter.request("/auth/logout");
      console.log(response);
      expect(response.status).toBe(308);
      expect(response.headers.get("Location")).toContain(env.KINDE_DOMAIN);
    });
  });
});
