basicFunction = -> "hello"

veryComplexFunction = ->
	2 + 2 #last line is always returned

functionWithArg = (arg) -> "hello #{arg}"

functionWithVarArgs = (varargs...) -> console.log(x) for x in varargs

functionWithDefaults = (arg = "Melissa") -> console.log("Hi #{arg} xx")

functionWithVarArgs("foo", "bar", "car")
functionWithDefaults()
functionWithDefaults("Tay")
