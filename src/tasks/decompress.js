import { resolve } from "node:path";
import { access } from "node:fs/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { createBrotliDecompress } from "node:zlib";
import { coloringItem } from "../utils/coloringItem.js";
import { brotliExt } from "../constants/constants.js";

export const decompress = async (srcFile, dstFile) => {
  const srcFP = resolve(srcFile.trim());
  const slicedSrcFP = srcFile
    .trim()
    .slice(0, srcFile.trim().lastIndexOf(brotliExt));
  const dstFP = resolve(dstFile.trim(), slicedSrcFP);

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

  const archive = createBrotliDecompress();
  const s = rs.pipe(archive).pipe(ws);

  s.on("finish", () => {
    console.log(
      `File ${coloringItem(
        "cyan",
        srcFP
      )} successfully decompressed in: ${coloringItem("magenta", dstFP)}`
    );
  });
};
