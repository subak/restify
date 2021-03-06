define(["xregexp", "lib/class"], function (xregexp, parent) {
  function Router() { }

  var fn = parent.extends(Router);

  fn.detectRoute = function (method, pathname, routes) {
    var target = method + " " + pathname,
      action, match, res;

    res = routes.some(function (route) {
      action = route.action;
      match = xregexp.XRegExp(route.pattern).exec(target);
      return match !== null;
    });

    return res ? [action, match] : null;
  };

  return Router;
});