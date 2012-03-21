class Animal
  constructor: (@name) ->
  cantSeeMe = "i am private"
  @staticThing = "i am as static as the team's velocity"
  sayHello: ->
    console.log "Hello, I am a #{@name}!"

cat = new Animal("cat")

console.log cat.name
console.log cat.cantSeeMe
console.log Animal.staticThing
cat.sayHello()

class Dog extends Animal
  sayHello: ->
    console.log "WOOF!"

myDog = new Dog
myDog.sayHello()