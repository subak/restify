define(["lib/view"], function (parent) {
  function User () {
    parent.apply(this, arguments);

    var subViews = {};

    this.getSubView = function (viewName) {
      return subViews[viewName];
    };

    this.setSubView = function (viewName, view) {
      return subViews[viewName] = view;
    };
  }

  var fn = parent.extends(User);



  fn.render = function () {
    this.getSubView(this.model.state).render();
  };

  return User;
});