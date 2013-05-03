define(["lib/model"], function (Model) {
  var parent = Model;

  function Page () {
    parent.apply(this);
  }

  Model.extends(Page);
  
  return Page;
});
