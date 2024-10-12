import {
  parseUserName,
  greetUser,
  goodbyeUser,
  showDir,
} from "./utils/index.js";

export const app = () => {
  const userName = parseUserName();
  greetUser(userName);
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
