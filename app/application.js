define(function (require) {
  var events = require("events"),
    parent = require("lib/application");

  function Application() {
    parent.apply(this, arguments);

    this.initializeUser();
  }

  var fn = Application.prototype;

  fn.initializeUser = function () {
    var emitter = new events.EventEmitter();
    var model = new require("app/model/user")();
    var view = new require("app/view/user")(model);

    this.dispatchEvents(new require("app/controller/user")(model), emitter);

    view.setSubView("index", new require("app/view/user/index")(model));
    view.setSubView("show", new require("app/view/user/show")(model));
    view.setSubView("new", new require("app/view/user/new")(model));
    view.setSubView("edit", new require("app/view/user/edit")(model));
    view.setSubView("create", new require("app/view/user/create")(model));
    view.setSubView("update", new require("app/view/user/update")(model));
    view.setSubView("destroy", new require("app/view/user/destroy")(model));

    this.dispatchEvents(new require("app/controller/user/index")(model), emitter);
    this.dispatchEvents(new require("app/controller/user/show")(model), emitter);
    this.dispatchEvents(new require("app/controller/user/new")(model), emitter);
    this.dispatchEvents(new require("app/controller/user/edit")(model), emitter);
    this.dispatchEvents(new require("app/controller/user/create")(model), emitter);
    this.dispatchEvents(new require("app/controller/user/update")(model), emitter);
    this.dispatchEvents(new require("app/controller/user/destroy")(model), emitter);

    this.setEmitter("user", emitter);
    this.setView("user", view);
  };

  return Application;
});