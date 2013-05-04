define(["url", "JQDeferred", "lib/router/rest", "app/application"], function (url, Deferred, parent, Application) {
  function Router(request, response) {
    var parsedUrl = url.parse(request.url);
    var route = this.detectRoute(request.method, parsedUrl.pathname, this.routes);

    if ( route === null ) {
      throw new Error("route not match.");
    }

    var scope = route.match.scope;
    var app = Application();
    var emitter = app.getEmitter(scope);
    var view = app.getView(scope);

    if ( !emitter ) {
      throw new Error("scope not found.");
    }

    if ( !view ) {
      throw new Error("scope not found.");
    }

    var df = Deferred();

    var id;
    if ( id = route.match.id ) {
      emitter.emit(route.action, id, df.promise());
    } else {
      emitter.emit(route.action, df.promise());
    }

    df.done(function () {
      response.end(view.product());
    });

    df.fail(function (statusCode, code, message) {
      response.statusCode = statusCode;
      response.end({
        statusCode: statusCode,
        code: code,
        message: message
      });
    });

  }

  var fn = parent.extends(Rest);

  return Rest;
});




//define(["lib/router", "lib/model", "lib/view", "app/controller/root"], function (parent, Model, View, RootController) {
//  function Router(req, res, next) {
//    parent.apply(this, arguments);
//
//    this.req = req;
//    this.res = res;
//    this.next = next;
//
//    this.rootModel = new Model();
//    this.rootView  = new View(this.rootModel);
//    this.rootController = new RootController(this.rootModel);
//    this.dispatchViewEventOnController(this.rootView, this.rootController);
//  }
//
//  var fn = parent.extends(Router);
//
//  fn.blog = function (id) {
//    this.rootView.trigger("page.blog", id);
//  }
//
//  fn.finish = function () {
//    this.res.send(this.rootView.product());
//  }
//
//  return Router;
//});