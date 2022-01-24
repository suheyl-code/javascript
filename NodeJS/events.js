// getting built-in module events
const { count } = require("console");
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("bell", (e) => {
  console.log(e);
  console.log("open the door!");
});

emitter.emit("bell", {time: Date.now(), count: 2});
