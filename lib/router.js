define(["lib/class"], function (parent) {  
  function Router() { }

  var fn = parent.extends(Router);

  fn.dispatchViewEventOnController = function (v, c) {
    Object.getOwnPropertyNames(c.constructor.prototype).forEach(function (type) {
      v.on(type, c[type].bind(c));
    });
  }

  return Router;
});