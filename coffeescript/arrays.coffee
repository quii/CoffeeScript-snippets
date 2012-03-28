array = ["dog", "cat", "fish", "donkey"]
console.log(animal) for animal in array

newArray = (animal for animal in array when animal[0]=='d')
console.log("new array =", newArray)

if "cat" in array then console.log("the array has a cat")
[1..4].map (i) -> console.log "Happy Birthday " + (if i is 3 then "dear Chris" else "to You")

"foo"