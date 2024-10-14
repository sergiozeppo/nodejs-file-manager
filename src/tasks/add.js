import { writeFile } from "node:fs/promises";
import { resolve } from "path";
import { newFileContent } from "../constants/constants.js";

export const add = async (fileName) => {
  try {
    const p = resolve(fileName);

    await writeFile(p, newFileContent, { flag: "wx+" });
  } catch {
    throw new Error();
  }
};
