import { coloringItem } from "../utils/coloringItem.js";

export const os = (parameter) => {
  import("node:os").then((osModule) => {
    switch (parameter) {
      case "--EOL":
        console.log(coloringItem("yellow", JSON.stringify(osModule.EOL)));
        break;

      case "--cpus":
        osModule.cpus().forEach(({ model, speed }, idx) => {
          console.log(`CPU: ${coloringItem("yellow", `${idx + 1}`)}`);
          console.log(`Model: ${coloringItem("yellow", `${model}`)}`);
          console.log(`Speed: ${coloringItem("yellow", `${speed}\n`)}`);
        });
        console.log(
          `Total CPUs: ${coloringItem("yellow", `${osModule.cpus().length}`)}`
        );
        break;

      case "--homedir":
        console.log(coloringItem("yellow", osModule.homedir()));
        break;

      case "--username":
        console.log(coloringItem("yellow", osModule.userInfo().username));
        break;

      default:
        console.log(`\n${coloringItem("red", "Invalid input")}`);
    }
  });
};
