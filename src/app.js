import { parseUserName, greetUser } from "./utils/index.js";

export const app = () => {
  const userName = parseUserName();
  greetUser(userName);
};
