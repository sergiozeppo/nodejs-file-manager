import { resolve } from "path";
import { access, rm } from "node:fs/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { coloringItem } from "../utils/coloringItem.js";

export const mv = async (srcFile, dstPath) => {
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

  ws.on("finish", async () => {
    await rm(srcFP);

    console.log(
      `File ${coloringItem(
        "cyan",
        srcFP
      )} successfully moved into: ${coloringItem("magenta", slicedPath)}`
    );
  });

  rs.pipe(ws);
};
