(function() {
  var aVariable, cholesterol, chris, cool, healthy, itsFriday, ruby, scala, someOtherVariable, someVariable;

  cool = true;

  scala = ruby = !cool;

  console.log("Is scala cool?", scala, "Is Ruby cool?", ruby);

  if (scala === cool) console.log("Phew, all is right with the world");

  if (scala !== cool) {
    console.log("Oh noes, if scala isn't cool, does that mean we're not cool?");
  }

  itsFriday = true;

  if (itsFriday) chris = "happy";

  console.log("chris is " + chris);

  cholesterol = 127;

  healthy = (200 > cholesterol && cholesterol > 60);

  someVariable = void 0;

  someOtherVariable = "foo";

  aVariable = someVariable != null ? someVariable : someOtherVariable;

  console.log("a variable = ", aVariable);

}).call(this);
