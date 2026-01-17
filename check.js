const fs = require("fs");

fs.readFile("./file.txt", "utf8", () => {
  console.log("read file 1  called");
});
fs.readFile("./file.txt", "utf8", () => {
  setImmediate(() => {
    console.log("setImmediate executes 2");
  });
  setTimeout(() => {
    console.log("SetTimeout executes 2");
  }, 0);
  process.nextTick(() => {
    console.log("Next Tick executes 2");
  });
  setImmediate(() => {
    console.log("setImmediate executes 3");
  });
  Promise.resolve("Promise executes 2").then(console.log);
  console.log("File read 2");
});
process.nextTick(() => {
  console.log("Next Tick executes 1");
});
Promise.resolve("Promise Executes 1").then(console.log);
setImmediate(() => {
  console.log("SetImmediate Executes 1");
});
setTimeout(() => {
  console.log("SetTimeout executes 1");
}, 0);
