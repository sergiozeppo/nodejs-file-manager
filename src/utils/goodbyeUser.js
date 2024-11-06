import { exitCode } from "../constants/constants.js";
import { coloringItem } from "./coloringItem.js";

export const goodbyeUser = (userName) => {
  console.log(
    `Thank you for using File Manager, ${coloringItem(
      "magenta",
      userName
    )}, goodbye!`
  );
  process.exit(exitCode);
};
