define(["lib/class"], function (Class) {
  function View(model) {
    var product;
    
    this.product = function () {
      return product;
    }
    
    var render = this.render;
    this.render = function () {
      debugger
      product = render.apply(this, arguments);
    }
    
    model.on("update", this.render.bind(this));
    this.model = model;
  }
  
  var fn = Class.extends(View);
  
  fn.render = function () { };
  
  return View;
});
