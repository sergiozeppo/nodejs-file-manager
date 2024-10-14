import { resolve } from "path";
import { rename } from "node:fs/promises";

export const rn = async (srcFile, dstFile) => {
  try {
    const srcFP = resolve(srcFile);
    const dstFP = resolve(dstFile);

    await rename(srcFP, dstFP);
  } catch {
    throw new Error();
  }
};