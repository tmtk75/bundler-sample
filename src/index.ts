import { sum } from "./lib";
import axios from "axios";
import dayjs from "dayjs";

function main() {
  console.log(sum(1, 2));
  console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"));
  axios.get("https://example.com").then((r) => {
    console.log(r.data.slice(0, 100));
  });
}

main();
