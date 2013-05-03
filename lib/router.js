define(["lib/class"], function (Class) {
  var parent = Class;
  
  function Router() { }
  
  var fn = Class.extends(Router);

  fn.dispatchViewEventOnController = function (v, c) {
    Object.getOwnPropertyNames(c).forEach(function (type) {
      v.on(type, c[type].bind(c));
    });
  }

  return Router;
});