define(["lib/event"], function (parent) {
  function Model (value) {
    parent.apply(this, arguments);

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

  parent.extends(Model);

  return Model;
});