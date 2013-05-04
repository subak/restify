var requirejs = require("requirejs");
if (typeof define !== 'function') { var define = require('amdefine')(module) }

requirejs(["http"], function (http) {
  var server = http.createServer();

  server.on("request");

  server.listen(8081);
});
