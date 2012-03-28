(function() {
  var Animal, Dog, cat, myDog,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Animal = (function() {
    var cantSeeMe;

    function Animal(name) {
      this.name = name;
    }

    cantSeeMe = "i am private";

    Animal.staticThing = "i am as static as the team's velocity";

    Animal.prototype.sayHello = function() {
      return console.log("Hello, I am a " + this.name + "!");
    };

    return Animal;

  })();

  cat = new Animal("cat");

  console.log(cat.name);

  console.log(cat.cantSeeMe);

  console.log(Animal.staticThing);

  cat.sayHello();

  Dog = (function(_super) {

    __extends(Dog, _super);

    function Dog() {
      Dog.__super__.constructor.apply(this, arguments);
    }

    Dog.prototype.sayHello = function() {
      return console.log("WOOF!");
    };

    return Dog;

  })(Animal);

  myDog = new Dog("Lassie");

  myDog.sayHello();

  Animal.prototype.eat = function() {
    return console.log("" + this.name + " nom nom nom");
  };

  myDog.eat();

  cat.eat();

}).call(this);
