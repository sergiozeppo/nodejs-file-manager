import { coloringItem } from "../utils/coloringItem.js";

export const os = (parameter) => {
  import("node:os").then((osModule) => {
    switch (parameter) {
      case "--EOL":
        console.log(coloringItem("yellow", JSON.stringify(osModule.EOL)));
        break;

      default:
        console.log(`\n${coloringItem("red", "Invalid input")}`);
    }
  });
};
