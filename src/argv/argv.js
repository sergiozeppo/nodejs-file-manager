import { argv, env } from "node:process";

export const parseUserName = () => {
  const args = argv.slice(2);
  let userName = "";
  if (env.npm_config_username) userName = env.npm_config_username;
  else userName = args[0].slice(args[0].indexOf("=") + 1);
  console.log(`Welcome to the File Manager, ${userName}!`);
};
