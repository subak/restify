define(["lib/router", "lib/model", "lib/view", "app/controller/root"], function (parent, Model, View, RootController) {
  function Router(req, res, next) {
    parent.apply(this, arguments);

    this.req = req;
    this.res = res;
    this.next = next;

    this.rootModel = new Model();
    this.rootView  = new View(this.rootModel);
    this.rootController = new RootController(this.rootModel);
    this.dispatchViewEventOnController(this.rootView, this.rootController);
  }

  var fn = parent.extends(Router);

  fn.blog = function (id) {
    this.rootView.trigger("page.blog", id);
  }

  fn.finish = function () {
    this.res.send(this.rootView.product());
  }

  return Router;
});