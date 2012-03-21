basicFunction = -> "hello"

veryComplexFunction = ->
	2 + 2 #last line is always returned

functionWithArg = (arg) -> "hello #{arg}"

functionWithVarArgs = (varargs...) -> 

functionWithDefaults = (arg = "Melissa") -> console.log("Hi #{arg} xx")

functionWithDefaults()
functionWithDefaults("Tay")
