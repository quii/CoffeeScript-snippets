bettyUser = 
	name:'betty', 
	company:'carcorp'

console.log bettyUser

#You can desconstruct objects with pattern matching too
{name: name, company: company} = bettyUser 
console.log name
console.log company

#This could be used to convert json from an ajax request into something more useful
chrisUser = name:'Chris', company:'Springer'
toddUser = name:'Todd', company:'Springer Healthcare'

class Dude
	constructor:(userJson) ->
		{name: @alias, company: @business} = userJson

	sayHello: -> console.log("I am known as #{@alias} and I work for #{@business}")

chris = new Dude(chrisUser)
todd = new Dude(toddUser)

dude.sayHello() for dude in [chris, todd]




