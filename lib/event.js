define(["events", "lib/class"], function (events, parent) {
  function Event() {
    var emitter = new events.EventEmitter();

    this.on = function (type, callback) {
      emitter.on(type, callback.bind(this));
    };

    this.off = function (type, callback) {
      if (type && callback) {
        emitter.removeListener(type, callback);
      } else if (type) {
        emitter.removeAllListeners(type);
      } else {
        emitter.removeAllListeners();
      }
    }

    this.trigger = function () {
      emitter.emit.apply(emitter, arguments);
    };  
  }

  var fn = parent.extends(Event);

  return Event;
});