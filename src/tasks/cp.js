import { resolve } from "path";
import { access } from "node:fs/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { coloringItem } from "../utils/coloringItem.js";

export const cp = async (srcFile, dstPath) => {
  const srcFP = resolve(srcFile.trim());
  const dstP = resolve(dstPath.trim(), srcFile.trim());

  try {
    await access(srcFP);
  } catch {
    throw new Error();
  }

  try {
    await access(dstPath);
  } catch {
    throw new Error();
  }

  const rs = createReadStream(srcFP);
  const ws = createWriteStream(dstP);

  const slicedPath = dstP.slice(0, dstP.lastIndexOf("\\"));

  ws.on("finish", () => {
    console.log(
      `File ${coloringItem(
        "cyan",
        srcFP
      )} copied successfully in: ${coloringItem("magenta", slicedPath)}`
    );
  });

  rs.pipe(ws);
};
