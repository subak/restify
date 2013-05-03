define(function () {
  function Class () { }

  Class.extends = function ( klass ) {
    klass.prototype = Object.create(this.prototype);

    klass.prototype.constructor = klass;
    klass.prototype.parent = this;

    Object.getOwnPropertyNames(this).forEach(function(element, index, array) {
      klass[element] = this[element];
    }.bind(this));
    
    return klass.prototype;
  }

  return Class;
});