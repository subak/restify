define(function (require) {
  var Class = require("lib/class"),
    Model = require("lib/model"),
    View = require("lib/view"),
    RootView = require("app/view/root"),
    HelloView = require("app/view/hello"),
    RootController = require("app/controller/root");

  function Router(req, res, next) {
    this.rootModel = new Model();
    this.rootView  = new View(this.rootModel);
    this.rootController = new RootController(this.rootModel);
    this.dispatchViewEventOnController(rootView, rootController);

    this.helloView = new HelloView(this.page);
  }

  var fn = Class.extends(Router);

  fn.dispatchViewEventOnController = function (v, c) {
    Object.getOwnPropertyNames(c).forEach(function (type) {
      v.on(type, c[type].bind(c));
    });
  }

  fn.blog = function (id) {
    this.rootView.trigger("page.blog", id);
  }

  return Router;
});