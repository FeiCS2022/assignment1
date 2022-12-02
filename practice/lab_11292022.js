// 1.
// add a 'price' property and 2 others to the class and add 1 more method.
// create 5 instances (objects) from the class and store them in an array called myCarCollection OUTSIDE of the class.
// map through the array, drive each car, and log the cars' serial numbers
class Car {
    constructor (maker, serialNumber, price, country, zipcode) {
      this.serialNumber = serialNumber;
      this.maker = maker;
      this.price = price;
      this.country = country;
      this.zipcode = zipcode;
    }
    drive () {
      console.log('Vroom Vroom');
    }
    changeCountry (newCountry){
        this.country = newCountry
    }
  }

  const car1 = new Car("ford", "X12", 30000, "US", 08801);
  const car2 = new Car("ford", "X13",4000, "US", 09720);
  const car3 = new Car("ford", "X14", 199999,"US", 88888);
  const car4 = new Car("Nissan", "Y2", 24789, "Japan", 0000);
  const car5 = new Car("Tesla", "XTZ12", 212344, "China", 0000);


  const myCarCollection = [car1, car2, car3, car4, car5];


  const driveCar = () => {
    myCarCollection.map(ele => {
        ele.drive();
        console.log(ele.serialNumber)
    })
  }


  console.log(car1);
  console.log(driveCar())


  // 2.
  // Create a class called trucks - with a doors property that defaults to 2 doors.
  // add a 'price' property and 2 others. Add a couple of methods.
  // make 5 trucks and store them in an array called myTruckCollection  OUTSIDE of the class.
class Trucks {
    constructor (price, maker, serialNumber) {
        this.doors = 2;
        this.price = price;
        this.maker = maker;
        this.serialNumber = serialNumber;

    }
    drive () {
        console.log('Didi~')
    }
    addPrice (addNum) {
        this.price += addNum;
    }
}


const truck1 =new Trucks(50000, "ford", "F150");
const truck2 =new Trucks(30000, "dodge", "YY120");
const truck3 =new Trucks(15000, "Unknown", "xxx100");
const truck4 =new Trucks(10000, "fiat", "F150");
const truck5 =new Trucks(100000, "QQ", "xxy123");


const myTruckCollection = [truck1, truck2, truck3, truck4, truck5];
console.log(myTruckCollection)
  // 3.
  // make a function called compareCollections
  // create a variable in the function called carsValue and (by iterating through the array) get the average price.
  // do the same for the trucks collection
  // log a string explaining which collection has a higher average price
const compareCollections = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        var totalValue = 0;
        totalValue += arr[i].price
        
    }
    
   var carValue = totalValue/arr.length;

    return carValue
}


const  averageCarValue = compareCollections(myCarCollection);
const  averageTruckValue = compareCollections(myTruckCollection);
console.log("Average car price is: " + averageCarValue);
console.log("Average truck price is: " + averageTruckValue);


const maxValue = Math.max(averageTruckValue, averageCarValue);
console.log("The Truck Collection has a higher price");


  // 4.
 // Create a class called Person - add appropriate properties and methods.
 class Person {
    constructor (name, height, weight, occupation) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.occupation = occupation;
    }
    changeName (newName) {
        this.name = newName
    }
    addPets (pet){
        this.pet = pet;
    }
 }


 const p1 = new Person("lili", 163, 120, "teacher");
 const pet1 = p1.addPets("nini")
 console.log(p1);


  // 5.
//  create a class called Enemy that extends Person, adding extra properties and methods.
class Enemy extends Person {
    constructor (name, height, weight, occupation,country, zipcode) {
        super(name, height, weight, occupation);
        this.country = country;
        this.zipcode = zipcode;
    }
    printInfo() {
        console.log("The name is:" + this.name)

    }
}

const enemy = new Enemy("coco", 165, 110, "student", "US", 09720);
console.log(enemy);
enemy.printInfo();


 // 6.create a Factory that takes a name as a parameter.
// create an instance of the factory called const jerry = new Factory('jerry')
// the factory should have an empty array called "friends" (this.friends = [])
// the factory should also have a method to push friends to that array (taking the friend's name as a parameter)
class Factory {
    constructor(name){
        this.name = name;
        this.friends = [];
    }
    addFriends (newFriends) {
        this.friends.push(newFriends);
    }

};

const lili = new Factory("lili");
lili.addFriends("coco");
console.log(lili);


// 7.  
// Create a class that will produce Comments (author, content, date, likes, commentIndex (where the comment falls) ).
// Make another class for  social media posts.
// The object should have properties author, content, date, likes, and comments ( empty array).
// There should be a method called editContent that takes in a new string that will replace the content.
// There should be another method called addComment that uses the Comments class to create a new comment with some passed values (arguments) and
// pushes that comment object to the comments array.
class Comments{
    constructor(author, content, date, likes, commentIndex) {
        this.author = author;
        this.content = content;
        this.date = new Date();
        this.likes = likes;
        this.commentIndex = commentIndex;
    }
}


class Posts {
    constructor (author, content, date, likes, comments){
        this.author = author;
        this.content = content;
        this.date = new Date();
        this.likes = likes;
        this.comments = [];
    }
    editContent (newContent) {
        this.content = newContent;
    }
    addComment () {
        const newComment = new Comments(this.author, this.content, this.date, this.likes, this.comments.length)
        this.comments.push(newComment)
    }
}


const c1 = new Comments("Lee", "Today is nice.", "December, 2022", 10);
console.log(c1);
const c11 = new Posts("Lee", "Today is nice.", "December, 2022", 10)
console.log(c11);
c11.addComment()
console.log(c11)