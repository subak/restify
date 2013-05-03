define(function () {
  var HelloView = require("app/view/hello"),
    PageModel = require("app/model/page");

  function Hello() {
    this.page = new PageModel();
  }

  var fn = Hello.prototype;
  fn.constructor = Hello;

  fn.get = function (name) {
    this.page.attr("page", "hello");
  }

});