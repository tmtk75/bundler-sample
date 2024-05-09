import { sum } from "./lib";
import axios from "axios";

function main() {
  console.log(sum(1, 2));
  axios.get("https://example.com").then(console.log);
}

main();