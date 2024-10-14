import * as tasks from "./tasks/index.js";
import { coloringItem } from "./utils/coloringItem.js";
import { showDir } from "./utils/showDir.js";
import { commands } from "./constants/commands.js";

export const taskHandler = async (chunk) => {
  const regex = /[^\s'"]+|'([^']*)'|"([^"]*)"/g;
  const args = [];
  let match;

  while ((match = regex.exec(chunk)) !== null) {
    args.push(match[1] || match[2] || match[0]);
  }
  const [command, ...params] = args;

  try {
    if (!commands.includes(command)) {
      console.log(`${coloringItem("red", "Invalid input")}`);
      return;
    }

    await tasks[command](...params);
  } catch {
    console.log(`${coloringItem("red", "Operation failed")}`);
  } finally {
    showDir();
  }
};
