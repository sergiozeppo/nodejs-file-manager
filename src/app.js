import {
  parseUserName,
  greetUser,
  goodbyeUser,
  showDir,
} from "./utils/index.js";
import os from "os";

export const app = () => {
  const userName = parseUserName();
  greetUser(userName);

  process.chdir(os.homedir());
  showDir();

  const readConsole = process.stdin;
  readConsole.on("data", (chunk) => {
    const command = chunk.toString().trim();

    if (command === ".exit") {
      goodbyeUser(userName);
    }
  });
  process.on("SIGINT", () => {
    goodbyeUser(userName);
  });
};
