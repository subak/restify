define(["lib/controller"], function (parent) {
  function Root() {
    parent.apply(this, arguments);
  }
  
  var fn = parent.extends(Root);

  fn["page.blog"] = function (id) {
    this.model.update({
      page: "blog",
      id: id
    });    
  };
  
  fn["page.category"] = function (id) {
    this.model.update({
      page: "category",
      id: id
    });
  };
  
  fn["page.entry"] = function (id) {
    this.model.update({
      page: "entry",
      id: id
    });
  };
  
  return Root;
});