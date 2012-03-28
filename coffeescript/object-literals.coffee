bettyUser = 
	name:'betty', 
	company:'carcorp'

console.log bettyUser

#You can desconstruct objects with pattern matching too
{name, company} = bettyUser 
console.log name
console.log company

#This could be used to convert json from an ajax request into something more useful
chrisJson = "name":'Chris', "company":'Springer'
toddJson = "name":'Todd', "company":'Springer Healthcare'

class Dude
	constructor:(userJson) ->
		{name: @alias, company: @business} = userJson

	sayHello: -> console.log("I am known as #{@alias} and I work for #{@business}")

chris = new Dude(chrisJson)
todd = new Dude(toddJson)

dude.sayHello() for dude in [chris, todd]


