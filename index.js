var requirejs = require("requirejs");
if (typeof define !== 'function') { var define = require('amdefine')(module) }


requirejs(["http", "url", "app/router"], function (http, url, Router) {
  var server = http.createServer();
  server.on("request", function (request, response) {

    var restEvent = new events.EventEmitter();

    /**
     * ======== ======= ==============
     * index    GET     /user
     * show     GET     /user/:id
     * new      GET     /user/new
     * edit     GET     /user/:id/edit
     * create   POST    /user
     * update   PUT     /user/:id
     * destroy  DELETE  /user/:id
     * ======== ======= ==============
     */

    function parse(method) {

    }

    paths = pathname.replace(/^\/|\/$/g, "").split("/");

    requestView = paths[0];
    viewName = requestView + "View";

    if ( !$this->[viewName] ) {
      throw new Error("request view not found.");
    }

    id = 1;

    view = $this->getView[viewName];
    emitter = $this->getEmitter[viewName];

    emitter.emit("index");
    emitter.emit("show", id);
    emitter.emit("new");
    emitter.emit("edit", id);
    emitter.emit("create");
    emitter.emit("update", id);
    emitter.emit("destroy", id);


    var cookies = request.headers.cookie;
    request.method;
    request.url;

    url.parse(request.url);


    var entryView =;
    var categoryView =;
    var blogView =;

//    { href: '/status?name=ryan',
//      search: '?name=ryan',
//      query: 'name=ryan',
//      pathname: '/status' }

    response.end("hoge");


  });

  server.listen(8081, function () {
    console.log("listening at 8081.");
  });
});


//ev = new EventEmitter();
//
//function respond(req, res, next) {
//  ev.emit("hello", req.params.name);
//  //res.send('hello ' + req.params.name);
//}
//
//var server = restify.createServer();
//server.get('/hello/:name', respond);
//server.head('/hello/:name', respond);
//
//ev.on("hello", function (name) {
//  debugger
//});
//
//server.listen(8080, function() {
//  console.log('%s listening at %s', server.name, server.url);
//});