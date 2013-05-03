define(["lib/class"], function (Class) {
  function Controller(model) {
    this.model = model;
  }
  
  var fn = Class.extends(Controller);

  return Controller;  
});