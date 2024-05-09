import { sum } from "./lib";
import axios from "axios";

function main() {
  console.log(sum(1, 2));
  axios.get("https://example.com").then((r) => {
    console.log(r.data);
  });
}

main();
