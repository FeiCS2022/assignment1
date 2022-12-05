/*Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34*/
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    get info() {
      return `${this.name}s age is ${this.age}`
              }
  };

  var john = new Person('john', 34)
  console.log(john.info())


  /* 7 - classes / inheritance*/
  // Get Coding :)
  class Animal {
    constructor(name, age, legs, species, status) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }


class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, 0, "shark", status);
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, status) {
      super(name, age, 4, "cat", status)
    }
    introduce() {
      return `${super.introduce()}  Meow meow!`;
  }
}
  
  class Dog extends Animal {
    constructor (name, age, status, master){
      super(name, age, 4, "dog", status);
      this.master = master;
    }
    greetMaster() {
      return `Hello ${this.master}`;
  }
}



//6 - array odd number of times
function findOdd(A) {
    if (A.length == 1){
      return A[0]
    }
    A = A.sort();
    let l = 0;
    let r =  1;
    let count = 1;
    while (l < A.length && r < A.length ) {
      if (A[r] == A[l]) {
        count += 1;
        r += 1;
      } else {
        if (count % 2 != 0) {
          return A[l] 
        } else { 
          l = r
            
          }
        }
      }
      return A[l]
    }
  