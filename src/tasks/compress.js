import { resolve } from "node:path";
import { access } from "node:fs/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { createBrotliCompress } from "node:zlib";
import { coloringItem } from "../utils/coloringItem.js";
import { brotliExt } from "../constants/constants.js";

export const compress = async (srcFile, dstFile) => {
  const srcFP = resolve(srcFile.trim());
  const dstFP = resolve(dstFile.trim(), srcFile.trim() + brotliExt);

  try {
    await access(srcFP);
  } catch {
    throw new Error();
  }

  try {
    await access(dstFile.trim());
  } catch {
    throw new Error();
  }

  const rs = createReadStream(srcFP);
  const ws = createWriteStream(dstFP);

  const archive = createBrotliCompress();
  const s = rs.pipe(archive).pipe(ws);

  s.on("finish", () => {
    console.log(
      `File ${coloringItem(
        "cyan",
        srcFP
      )} successfully compressed in: ${coloringItem("magenta", dstFP)}`
    );
  });
};
