import { describe, expect, it, test } from "vitest";
import { sum } from "../src/lib";

describe("sum", () => {
  test("", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
