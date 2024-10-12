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

  goodbyeUser(userName);
};
