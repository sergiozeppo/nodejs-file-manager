import { coloringItem } from "../utils/coloringItem.js";

export const os = (parameter) => {
  import("node:os").then((osModule) => {
    switch (parameter) {
      case "--EOL":
        console.log(JSON.stringify(osModule.EOL));
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
        console.log(osModule.homedir());
        break;

      case "--username":
        console.log(osModule.userInfo().username);
        break;

      case "--architecture":
        console.log(osModule.arch());
        break;

      default:
        console.log(`\n${coloringItem("red", "Invalid input")}`);
    }
  });
};
