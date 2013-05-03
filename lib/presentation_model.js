define(["lib/model"], function (Model) {
  var parent = Model;
  
  function PresentationModel () {
    parent.apply(this);
  }

  Model.extends(PresentationModel);
  
  return PresentationModel;
});