define(["lib/router"], function (parent) {
  function Rest() {
    parent.apply(this, arguments);
  }

  var fn = parent.extends(Rest);

  /**
   * ======== ======= ==============
   * index    GET     /scope
   * show     GET     /scope/:id
   * new      GET     /scope/new
   * edit     GET     /scope/:id/edit
   * create   POST    /scope
   * update   PUT     /scope/:id
   * destroy  DELETE  /scope/:id
   * ======== ======= ==============
   */
  fn.routes = [
    {
      action:  "index",
      pattern: "^GET /(?<scope>[^/]*)$"
    },
    {
      action:  "new",
      pattern: "^GET /(?<scope>[^/]*)/new$"
    },
    {
      action:  "edit",
      pattern: "^GET /(?<scope>[^/]*)/(?<id>[^/]*)/edit$"
    },
    {
      action:  "show",
      pattern: "^GET /(?<scope>[^/]*)/(?<id>[^/]*)$"
    },
    {
      action:  "create",
      pattern: "POST ^/(?<scope>[^/]*)$"
    },
    {
      action:  "update",
      pattern: "PUT ^/(?<scope>[^/]*)/(?<id>[^/]*)$"
    },
    {
      action:  "destroy",
      pattern: "DELETE ^/(?<scope>[^/]*)/(?<id>[^/]*)$"
    }
  ];
});