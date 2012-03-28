(function() {
  var bestHusband, otherDudes, programmers, sexyMan,
    __slice = Array.prototype.slice;

  programmers = ['Chris', 'Uday', 'Rob', 'Mike', 'Jose', 'Mark'];

  sexyMan = programmers[0], bestHusband = programmers[1], otherDudes = 3 <= programmers.length ? __slice.call(programmers, 2) : [];

  console.log("Sexy man = " + sexyMan);

  console.log("Best husband = " + bestHusband);

  console.log("And the rest.. ", otherDudes);

}).call(this);
