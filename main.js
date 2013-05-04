var requirejs = require("requirejs");
if (typeof define !== 'function') { var define = require('amdefine')(module) }

var http = require("http");

requirejs(["restify", "app/router"], function (restify, Router) {
  var server = restify.createServer();

  server.get("/blog/:id", function (req, res, next) {
    var router = new Router();
    router.blog(req.params.id);
    
    //debugger
    //router.finish();
  });

  server.get("/category/:id", function (req, res, next) {
    var router = new Router(req, res, next);
    router.category(req.params.id);
  });

  server.get("/entry/:id", function (req, res, next) {
    var router = new Router(req, res, next);
    router.entry(req.params.id);
  });

  server.listen(8081, function(a, b, c, d) {
    console.log("init");
  });
  
  // var router = new Router();
  // router.blog(1);

});
