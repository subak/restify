define(["lib/class", "events"], function (Class, events) {
  function Model (value) {
    var emitter = new events.EventEmitter();

    this.on = function (type, callback) {
      emitter.on(type, callback.bind(this));
    };
    
    this.trigger = function () {
      emitter.emit.apply(emitter, arguments);
    };

    this.read = function () {
      this.trigger("read");
      return value;
    };

    this.update = function (newValue) {
      var oldValue = value;
      value = newValue;
      this.trigger("update", newValue, oldValue);
      return value;
    };
  }

  Class.extends(Model);

  return Model;
});