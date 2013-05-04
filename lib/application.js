define(["lib/class"], function (parent) {
  function Application() {
    var views = {}, emitters = {};

    this.setEmitter = function (name, emitter) {
      return emitters[name] = emitter;
    };

    this.getEmitter = function (name) {
      return emitters[name];
    };

    this.setView = function (viewName, view) {
      return views[viewName] = view;
    };

    this.getView = function (viewName) {
      return views[viewName];
    };
  }

  var fn = parent.extends(Application);

  /**
   * @param {Controller} c
   * @param {events.EventEmitter} e
   */
  fn.dispatchEvents = function (c, e) {
    Object.getOwnPropertyNames(c.constructor.prototype).forEach(function (type) {
      e.on(type, c[type].bind(c));
    });
  };

  return Application;
});