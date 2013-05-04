define(["url", "xregexp", "lib/router", "app/application"], function (url, xregexp, parent, Application) {
  function Rest(request, response) {
    var parsedUrl = url.parse(request.url);
    var tokens = parsedUrl.pathname.replace(/^\/|\/$/g, "").split("/");

    var scope = tokens.shift();

    var app = Application();

    var emitter = app.getEmitter(scope);
    var view = app.getView(scope);

    var action = this.detectRestAction.apply(this, [request.method].concat(tokens));

    var route = this.detectRoute(request.method + " " + parsedUrl.pathname, this.routes);

    new RegExp()
  }

  var fn = parent.extends(Rest);


  return Rest;
});
