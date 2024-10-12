import { CONSOLE_COLORS } from "../constants/consoleColors.js";

export const coloringItem = (color, item) => {
  if (CONSOLE_COLORS[color])
    return `${CONSOLE_COLORS[color]}${item}${CONSOLE_COLORS.reset}`;
  else return `${item}`;
};
