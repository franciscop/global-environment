import { afterAll, describe, expect, it } from "bun:test";

describe("global-environment", () => {
  afterAll(() => {
    delete globalThis.Netlify;
    delete process.env.GLOBAL_ENVIRONMENT_TEST;
  });

  it("copies the Netlify environment into process.env", async () => {
    globalThis.Netlify = {
      env: { toObject: () => ({ GLOBAL_ENVIRONMENT_TEST: "hello" }) },
    };
    await import("./index.js");
    expect(process.env.GLOBAL_ENVIRONMENT_TEST).toBe("hello");
  });
});
