define(["lib/controller"], function (parent) {
  function User() {
    parent.super(this, arguments);
  }

  var fn = parent.extends(User);

  fn["index"] = function () {
    this.model.index();
  };

  fn["show"] = function (id) {
    this.model.show(id);
  };

  fn["new"] = function () {
    this.model.new();
  };

  fn["edit"] = function (id) {
    this.model.edit(id);
  };

  fn["create"] = function () {
    this.model.create();
  };

  fn["update"] = function (id) {
    this.model.update(id);
  };

  fn["destroy"] = function (id) {
    this.model.destroy(id);
  }
});