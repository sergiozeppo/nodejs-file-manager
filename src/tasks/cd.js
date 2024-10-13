import { resolve } from "node:path";

export const cd = (pathToDir) => {
  const path = resolve(pathToDir);
  process.chdir(path);
};
