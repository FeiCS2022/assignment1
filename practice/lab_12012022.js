//A. Q + A
//1. How do we assign a value to a variable?
/*Use let, var, const statement*/


//2. How do we change the value of a variable?
/*Just assign a new value to the variable, like variableName = newValue.


// How do we assign an existing variable to a new variable?
/*Use the expression that new variable name equals existing variable name, like newVar = oldVar*/


// Remind me, what are declare, assign, and define?
/* Creating a variabel in JS is called "declaring" a variale*/ 
/* "Assign" can be used in giving a value to a variable*/
/* "Define" can be used in creating a function*/


// What is pseudocoding and why should you do it?
/*Pseudocoding is informal coding that may not meet the rule of any formal coding lanuage like Python or Javascript.*/


// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
/* It depends on the difficulty level and the familiarity of the problem you met. If the problem is new and difficult, we should spend about 90% of the time understanding the problem itself. If the problem is not new to us, we may just spend a little bit of time recalling the solution and then type the code.*/


// B. Strings
//For all other questions that involve writing code, you can solve them via the following instructions.
// Create a variable called firstVariable
var firstVariable;


// Assign it the value of the string "Hello World"
firstVariable = "Hello World";
console.log(firstVariable)


// Change the value of this variable to some number
firstVariable = 1
console.log(firstVariable)


// Store the value of firstVariablein a new variable called secondVariable
var secondVariable = firstVariable
console.log(secondVariable)


// Change the value of secondVariableto any string.
secondVariable = "Hi"
console.log(secondVariable)


// What is the value of firstVariable?
console.log(firstVariable)
// it is 1


// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
let yourName = "Feiya"
console.log("Hello, my name is " + yourName)


//C.Boolean
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';


console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a < b < c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');


// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
let cow;


// Write code that will print out "mooooo" if the it is equal to cow
cow = "mooooo";
console.log(cow);


// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
cow = "Hey! You're not a cow.";
console.log(cow);


// Commit


// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
let age = 24;


// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
if (age >= 16) {
    console.log("Here are the keys!")
} else {
    console.log("Sorry, you're too young.")
}


// II. Loops
// Remember: USE letwhen you initialize your for loops!
// This is GOOD: for(let i = 0; i < 100; i++)
// This is NO GOOD: for(i = 0; i < 100; i++)


// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i <= 10; i++) {
    console.log(i)
}


// Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 10; i <= 400; i++) {
    console.log(i)
}


// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 12; i <= 4000; i+=3) {
    console.log(i)
}


// B. Get even
// Print out the numbers that are within the range of 1 - 100
for (let i = 1; i <= 100; i++){
        console.log(i)
}


// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i = 1; i <= 100; i++){
    if (i%2 == 0) {
        console.log(i+"<-- is an even number")
    }
}


// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
for (let i = 0; i <= 100;i++) {
    if(i % 5 == 0){
        console.log(`I found a ${i}. High five`)
    }
}



// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
for (let i = 0; i <= 100;i++) {
    if(i % 5 == 0){
        console.log(`I found a ${i}. High five`)
    } else if(i % 3 == 0) {
        console.log(`I found a ${i}.Three is a crowd`)
    }
}



// For numbers divisible by both three and five, be sure your code prints both messages
for (let i = 0; i <= 100;i++) {
    if (i % 15 == 0) {
        console.log(`I found a ${i}. High five. Three is a crowd`)
    }
    else if (i % 5 == 0){
        console.log(`I found a ${i}. High five`)
    } else if(i % 3 == 0) {
        console.log(`I found a ${i}.Three is a crowd`)
    }
}


// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
let bank_account = 0;
for (let i = 1; i<= 10; i++){
    bank_account += i
}
console.log(bank_account)


// Check your work! Your bank_account should have $55 in it.



// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
let bank_account1 = 0;
for (let i = 1; i<= 100; i++){
    bank_account1 += i * 2;
}
console.log(bank_account1)


// Check your work! Your bank_account should have $10,100 in it.



// III. Arrays & Control flow
// A. Talk about it:
// What are the things in an array called?
/*elements*/


// Do Arrays guarantee those things will be in order?
/*yes*/


// What real-life thing could you model with an array?
/*A line waiting for riding a Roller Coaster*/


// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
let arr = ["hi", "hey", "he"];


// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true];

// How do you access the 1st element in the array?
randomThings[0]


// Change the value of "Hello"to "World"
randomThings[2] = "World";


// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings[0]);
console.log(randomThings[2]);



// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];


// What would you write to access the 3rd element of the array?
ourClass[2];


// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
console.log(ourClass[4])


// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);


// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]
const myArray = [5, 10, 500, 20];


// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon");
myArray.push("Hi");
console.log(myArray);


// Remove the 5from the beginning of the array.
myArray.shift();
console.log(myArray);


// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);


// Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);


// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
Array.prototype.reverse();
console.log(myArray);
/*No changes*/
/*"Mutate" means making changes of the array elements.*/



// F. Biggie Smalls
// Create a variable that contains an integer.
let var2 = 78; 


// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.
if (var2 < 100) {
    console.log("little number")
} else {
    console.log("big number")
};


// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:
let num = 4
if (num < 5){
    console.log("little number") // console.log()little numberif the number entered is less than 5.
} else if (num > 10) {
    console.log("big number") // If the number entered is more than 10, log big number.
} else {
    console.log("monkey") // Otherwise, log "monkey".
}


const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} tody!`)


// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset)


// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stain" + kristynsCloset[5].slice(6, )
console.log(kristynsCloset[5]);


// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
thomsCloset[0][0];
console.log(thomsCloset[0]);


// In the same way, access one item from Thom's pants array.
thomsCloset[1][0];
console.log(thomsCloset[1][0]);


// Access one item from Thom's accessories array.
thomsCloset[2][0];
console.log(thomsCloset[2][0]);


// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][2]}, ${thomsCloset[1][2]} and ${thomsCloset[2][2]}!`)


// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset[1])


// IV. Functions
// A. printGreeting
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?
const printGreeting=(name) => {
    console.log(`Hello there, ${name}!`)
}
console.log(printGreeting("Slimer"));


// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
const printCool = (name) => {
    console.log(`${name} is cool`)
}
console.log(printCool("Captain Reynolds"));


// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
const calculateCube = (num) => {
    num = num**3
    return num
}
console.log(calculateCube(5))


// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
const isVowel = (letter) => {
    let vowel = "aeiou";
    letter = letter.toLowerCase();
    for (let i = 0; i < vowel.length; i++) {
        if (letter = vowel[i]) {
            return true
        } else {
            return false
        }
    }
}
console.log(isVowel("A"));


//Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
const getTwoLengths = (num1, num2) => {
    let res = [num1.length, num2.length];
    return res
}
console.log(getTwoLengths("Hank", "Hippopopalous"));


// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
const getMultipleLengths = (arr) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i].length)
    }
    return res
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


//Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
const maxOfThree = (num1, num2, num3) => {
    if (num1 >= num2) {
        if (num1 >= num3){
            return num1
        } else {
            return num3
        }
    } else {
        if (num2 >= num3){
            return num2
        } else {
            return num3
        }
    }
}


console.log(maxOfThree(6, 6, 1));


//Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
const printLongestWord = (arr) => {
    let longWord = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longWord) {
       longWord = arr[i].length; 
      }
      
    }
    for (let j = 0; j < arr.length; j++)
      if (arr[j].length == longWord){
        return arr[j]
      }
    }
    console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


//A. Make a user object
//Create an object called user.
let user;
//Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
user = {
    name: "lili",
    email: "lili111@hotmail.com",
    age:34,
    purchased: []
};



// B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
user.email = "lili222@hotmail.com"
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
user.age++
console.log(user.age)


// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.

// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
user.location = "111 New Yord Road, Trenton NJ"
console.log(user.location)


// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
user.purchased.push("carbohydrates")
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
user.purchased.push("peace of mind")
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
user.purchased.push("Merino jodhpurs")
// Console.log just the "Merino jodhpurs" from the purchasedarray.
console.log(user.purchased[user.purchased.length-1])


// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
    name: "dada",
    age: 35,
    location: "331 holly drive, NYC NY",
    purchased: []
}
// Console.log just the friend's name
console.log(user.friend.name)
// Console.log just the friend's location
console.log(user.friend.location)
// CHANGE the friend's age to 55
user.friend.age = 55
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
user.friend.purchased.push("The One Ring")
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push("A latte")
// Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[user.friend.purchased.length-1])


// F. Loops
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
for (let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i])
}
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for (let i = 0; i < user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i])
}


//G. Functions can operate on objects
//Write a single function updateUserthat takes no parameters. When the function is run, it should:
//it should increment the user's age by 1
const updateUser = () => {
user.age += 1;
user.name = user.name.toUpperCase();
return user
}

const age1 = updateUser()
console.log(user.age)


// The function does not need a returnstatement, it will merely modify the user object.

// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.*/
const oldAndLoud = (arr, age, name) => {
    arr.age += 1
    arr.name = arr.name.toUpperCase();
return arr
}

const test = oldAndLoud(user, age, "ii")
console.log(test)