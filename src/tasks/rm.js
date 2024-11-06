import { resolve } from "path";
import { rm as remove } from "node:fs/promises";

export const rm = async (fileName) => {
  try {
    const fp = resolve(fileName.trim());
    await remove(fp);
  } catch {
    throw new Error();
  }
};
