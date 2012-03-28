(function() {
  var Dude, bettyUser, chris, chrisJson, company, dude, name, todd, toddJson, _i, _len, _ref;

  bettyUser = {
    name: 'betty',
    company: 'carcorp'
  };

  console.log(bettyUser);

  name = bettyUser.name, company = bettyUser.company;

  console.log(name);

  console.log(company);

  chrisJson = {
    "name": 'Chris',
    "company": 'Springer'
  };

  toddJson = {
    "name": 'Todd',
    "company": 'Springer Healthcare'
  };

  Dude = (function() {

    function Dude(userJson) {
      this.alias = userJson.name, this.business = userJson.company;
    }

    Dude.prototype.sayHello = function() {
      return console.log("I am known as " + this.alias + " and I work for " + this.business);
    };

    return Dude;

  })();

  chris = new Dude(chrisJson);

  todd = new Dude(toddJson);

  _ref = [chris, todd];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    dude = _ref[_i];
    dude.sayHello();
  }

}).call(this);
