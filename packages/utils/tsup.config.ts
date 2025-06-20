import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: [
    "src/index.ts",
    "src/userAgent/index.ts",
    "src/date/index.ts",
    "src/number/index.ts",
  ],
  format: ["esm", "cjs"],
  sourcemap: true,
  minify: true,
  target: "esnext",
  outDir: "dist",
});
