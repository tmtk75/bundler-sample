import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  external: ["axios"],
  plugins: [resolve(), commonjs(), json()],
};
