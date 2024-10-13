import * as tasks from "./tasks/index.js";
import { coloringItem } from "./utils/coloringItem.js";
import { showDir } from "./utils/showDir.js";
import { commands } from "./constants/commands.js";

export const taskHandler = async (chunk) => {
  const [command, ...args] = chunk.split(" ");

  try {
    if (!commands.includes(command)) {
      console.log(`\n${coloringItem("red", "Invalid input")}`);
      return;
    }

    await tasks[command](...args);
  } catch {
    console.log(`\n${coloringItem("red", "Operation failed")}\n`);
  } finally {
    showDir();
  }
};
