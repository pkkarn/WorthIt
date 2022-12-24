function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.move = function() {
    console.log(this.name + ' is moving.');
  };
  
  function Dog(name) {
  // Used to initialize the constructor of dog
  // this of dog and name of dog is passed. Which means
  // this.name = 'Max' will be initialized to Dog Object
    Animal.call(this, name);
  }
  
  // To inherit all the protoype of Animal constructor in Dog 
  // constructor
  Dog.prototype = Object.create(Animal.prototype);
  
  
  // used to tell `hey use Dog constructor of Dog not from 
  // Animal` defined at line no. 33
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.bark = function() {
    console.log(this.name + ' is barking.');
  };
  
  var dog = new Dog('Max');
  dog.move();  // prints 'Max is moving.'
  dog.bark();  // prints 'Max is barking.'
  
  console.log(dog.constructor === Dog);  // prints 'true'
  console.log(dog.constructor === Animal);  // prints 'false'