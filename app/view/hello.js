define(["lib/view"], function (View) {
  var parent = View;

  function Hello () {
    parent.apply(this, arguments);
    this.msg = "Hello, world!";    
  }

  var fn = View.extends(Hello);

  fn.render = function () {
    this.model;
  };

  return Hello;
});