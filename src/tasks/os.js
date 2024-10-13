import { coloringItem } from "../utils/coloringItem.js";
import { divisor } from "../constants/constants.js";

export const os = (parameter) => {
  import("node:os").then((osModule) => {
    switch (parameter) {
      case "--EOL":
        console.log(coloringItem("yellow", JSON.stringify(osModule.EOL)));
        break;

      case "--cpus":
        osModule.cpus().forEach(({ model, speed }, idx) => {
          const ghz = (speed / divisor).toFixed(1);
          console.log(`CPU: ${coloringItem("yellow", `${idx + 1}`)}`);
          console.log(`Model: ${coloringItem("yellow", `${model}`)}`);
          console.log(`Speed: ${coloringItem("yellow", `${ghz} Ghz\n`)}`);
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

      case "--architecture":
        console.log(coloringItem("yellow", osModule.arch()));
        break;

      default:
        console.log(`${coloringItem("red", "Invalid input")}`);
    }
  });
};
