import { coloringItem } from "./coloringItem.js";

export const showDir = () => {
  console.log(`You are currently in ${coloringItem("cyan", process.cwd())}`);
};
