import { parseUserName, greetUser, goodbyeUser } from "./utils/index.js";

export const app = () => {
  const userName = parseUserName();
  greetUser(userName);
  goodbyeUser(userName);
};
