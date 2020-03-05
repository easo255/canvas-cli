const minimist = require("minimist");
const authenticate = require("../src/api/http").authenticate;
const fs = require("fs");
const path = require("path");

const verifyConfig = () => {
  filePath = path.join(__dirname, "../src/config.json");
  fs.readFile(filePath, { encoding: "utf-8" }, function(err, data) {
    if (!err) {
      console.log("found file. Verifying cridentials");
    } else {
      console.log("cannot find config.json");
    }
  });
};

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  /*check if user has authenticated */

  verifyConfig();

  let cmd = args._[0] || "help";

  if (args.version || args.v) {
    cmd = "version";
  }

  if (args.help || args.h) {
    cmd = "help";
  }

  switch (cmd) {
    case "messages":
      require("./cmds/messages")(args);
      break;

    case "help":
      require("./cmds/help")(args);
      break;

    case "version":
      require("./cmds/version")(args);
      break;

    case "assignments":
      require("./cmds/assignments")(args);
      break;

    case "announcements":
      require("./cmds/announcements")(args);
      break;

    default:
      console.error(`"${cmd}" is not a valid command!`);
      break;
  }
};
