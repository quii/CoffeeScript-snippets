#Chaining assignments
cool = true
scala = ruby = !cool
console.log scala, ruby


#Conditions
unless scala is cool
	console.log("Oh noes, if scala isn't cool, does that mean we're not cool?")

if scala is cool
	console.log("Phew, all is right with the world")

itsFriday = true
chris = "happy" if itsFriday
console.log("chris is #{chris}")

#Chaining comparisons
cholesterol = 127
healthy = 200 > cholesterol > 60

#Existential operator
someVariable = undefined
someOtherVariable = "foo"
aVariable = someVariable ? someOtherVariable
console.log("a variable = ", aVariable)
