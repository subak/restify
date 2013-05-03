var restify = require('restify');
var EventEmitter = require('events').EventEmitter;

ev = new EventEmitter();

function respond(req, res, next) {
  ev.emit("hello", req.params.name);
  //res.send('hello ' + req.params.name);
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

ev.on("hello", function (name) {
  debugger
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});