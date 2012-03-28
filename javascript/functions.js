(function() {
  var basicFunction, functionWithArg, functionWithDefaults, functionWithVarArgs, veryComplexFunction,
    __slice = Array.prototype.slice;

  basicFunction = function() {
    return "hello";
  };

  veryComplexFunction = function() {
    return 2 + 2;
  };

  functionWithArg = function(arg) {
    return "hello " + arg;
  };

  functionWithVarArgs = function() {
    var varargs, x, _i, _len, _results;
    varargs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    _results = [];
    for (_i = 0, _len = varargs.length; _i < _len; _i++) {
      x = varargs[_i];
      _results.push(console.log(x));
    }
    return _results;
  };

  functionWithDefaults = function(arg) {
    if (arg == null) arg = "Melissa";
    return console.log("Hi " + arg + " xx");
  };

  functionWithVarArgs("foo", "bar", "car");

  functionWithDefaults();

  functionWithDefaults("Tay");

}).call(this);
