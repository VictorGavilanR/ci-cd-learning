import { describe, it, expect } from "vitest";
import { formatStatus } from "./formatStatus";

describe("formatStatus", () => {
  it("debería indicar que el servicio está operativo", () => {
    expect(formatStatus(true)).toBe("Operativo");
  });

  it("debería indicar que el servicio no está disponible", () => {
    expect(formatStatus(false)).toBe("No disponible");
  });
});
