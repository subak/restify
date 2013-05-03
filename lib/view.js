define(["lib/event"], function (parent) {
  function View(model) {
    parent.apply(this, arguments);
    
    var product;
    
    this.product = function () {
      return product;
    }
    
    var render = this.render;
    this.render = function () {
      product = render.apply(this, arguments);
    }
    
    model.on("update", this.render.bind(this));
    this.model = model;
  }
  
  var fn = parent.extends(View);
  
  fn.render = function () {  };
  
  return View;
});
