import { createReadStream } from "fs";
import { resolve } from "path";
import { createHash } from "node:crypto";
import { coloringItem } from "../utils/coloringItem.js";
import { access } from "node:fs/promises";

export const hash = async (pathToFile) => {
  const path = resolve(pathToFile.trim());

  try {
    await access(path);
  } catch (error) {
    throw new Error();
  }

  const hs = createHash("sha256");
  const rs = createReadStream(path);

  hs.on("error", (error) => {
    console.error(
      coloringItem(
        "red",
        `An error occurred during hash calculation: ${coloringItem(
          "yellow",
          error.message
        )}`
      )
    );
  });

  rs.pipe(hs).on("finish", () => {
    const hash = hs.digest("hex");
    console.log(
      `SHA256-hash of ${coloringItem("cyan", path)} is: ${coloringItem(
        "magenta",
        hash
      )}`
    );
  });
};
