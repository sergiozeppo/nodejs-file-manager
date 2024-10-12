import { exitCode } from "../constants/constants.js";

export const goodbyeUser = (userName) => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit(exitCode);
};
