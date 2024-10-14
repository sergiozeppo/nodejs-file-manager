import { resolve } from "path";
import { createReadStream } from "fs";
import { stdout } from "process";
import { coloringItem } from "../utils/coloringItem.js";

export const cat = (fileName) => {
  const p = resolve(fileName);
  const rs = createReadStream(p);

  rs.pipe(stdout);

  rs.on("end", () => stdout.write("\n"));

  rs.on("error", () => {
    console.log(`\n${coloringItem("red", "Operation failed")}`);
  });
};
