define(function (require) {
  var R = require("lib/router"),
    Model = require("lib/model"),
    View = require("lib/view"),
    RootController = require("app/controller/root");

  function Router(req, res, next) {
    this.rootModel = new Model();
    this.rootView  = new View(this.rootModel);
    this.rootController = new RootController(this.rootModel);
    this.dispatchViewEventOnController(rootView, rootController);
  }

  var fn = R.extends(Router);

  fn.blog = function (id) {
    this.rootView.trigger("page.blog", id);
  }

  return Router;
});