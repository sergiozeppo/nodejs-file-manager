import { coloringItem } from "./coloringItem.js";

export const greetUser = (userName) => {
  console.log(
    `Welcome to the File Manager, ${coloringItem("magenta", userName)}!`
  );
};
