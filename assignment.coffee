#Chaining assignments
scala = ruby = false
console.log scala, ruby

cool = true

itsFriday = false

#Conditions
chris = "happy" if itsFriday

unless scala is cool
	console.log("Oh noes, if scala isn't cool, does that mean we're not cool?")

if scala is cool
	console.log("Phew, all is right with the world")

#Chaining comparisons
cholesterol = 127
healthy = 200 > cholesterol > 60

#Existential operator
someVariable = undefined
someOtherVariable = "foo"
aVariable = someVariable ? someOtherVariable
console.log("a variable = ", aVariable)
