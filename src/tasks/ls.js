import { promises as fs } from "fs";
import { join } from "path";

export const ls = async () => {
  try {
    const dirname = process.cwd();
    const dirList = await fs.readdir(dirname);

    const promises = dirList.map(async (item) => {
      const path = join(dirname, item);
      const stat = await fs.stat(path);
      return {
        name: item,
        type: stat.isDirectory() ? "directory" : "file",
      };
    });

    const result = await Promise.all(promises);
    const resultSort = result.sort((a, b) => {
      if (a.type === "directory" && b.type !== "directory") {
        return -1;
      }
      if (a.type !== "directory" && b.type === "directory") {
        return 1;
      }
      return a.name.localeCompare(b.name);
    });
    console.table(resultSort);
  } catch {
    throw new Error();
  }
};
