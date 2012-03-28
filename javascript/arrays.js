(function() {
  var animal, array, newArray, _i, _len,
    __indexOf = Array.prototype.indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  array = ["dog", "cat", "fish", "donkey"];

  for (_i = 0, _len = array.length; _i < _len; _i++) {
    animal = array[_i];
    console.log(animal);
  }

  newArray = (function() {
    var _j, _len2, _results;
    _results = [];
    for (_j = 0, _len2 = array.length; _j < _len2; _j++) {
      animal = array[_j];
      if (animal[0] === 'd') _results.push(animal);
    }
    return _results;
  })();

  console.log("new array =", newArray);

  if (__indexOf.call(array, "cat") >= 0) console.log("the array has a cat");

  [1, 2, 3, 4].map(function(i) {
    return console.log("Happy Birthday " + (i === 3 ? "dear Chris" : "to You"));
  });

  "foo";

}).call(this);
