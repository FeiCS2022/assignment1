// const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newEnemy = {
//         name: nameIs,
//         health: healthIs,
//         power: powerIs,
//         stamina: staminaIs
//     }
//     return newEnemy;
// }

// let returnedEnemy = createEnemy("hi", 100, "over 900", 700);
// console.log(returnedEnemy.name);


// class Character {
//     constructor(name, health, power, stamina) {
//         this.name = name;
//         this.health = health;
//         this.power = power;
//         this.stamina = stamina;
//     }
//     addHealth(amoutOfHealth){
//         this.health += amoutOfHealth;
//     }
// }

// let characterInstanceOne =new Character("This Wolf", 1000, "over 9000", 7000);
// console.log(characterInstanceOne)
// characterInstanceOne.addHealth(100)

// console.log(characterInstanceOne)


// class Character {
//     constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || false;
//     }
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     smite () {
//       console.log('I smite thee you vile person');
//     }
//   }
//   const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
//   const me = new Character('Arthur the Wavy', 32, 'brown', 'his waves be spinnin keep of the g for greatness');
//   console.log(me);
//   console.log(you);


// // class Character {
// //     constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
// //       this.legs = 2;
// //       this.arms = 2;
// //       this.name = name;
// //       this.age = age;
// //       this.eyes = eyes;
// //       this.hair = hair;
// //       this.lovesCats = lovesCats;
// //       this.lovesDogs = lovesDogs || false;
// //     }
// //     greet (otherCharacter) {
// //       console.log('hi ' + otherCharacter + '!');
// //     }
// //     classyGreeting (otherClassyCharacter) {
// //       console.log('Greetings ' + otherClassyCharacter.name + '!');
// //     }
// //     setHair (hairColor) {
// //       this.hair = hairColor;
// //     }
// //     smite () {
// //       console.log('I smite thee you vile person');
// //     }
// //   }
// //   const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
// //   const me = new Character('Arthur the Wavy', 32, 'brown', 'his waves be spinnin keep of the g for greatness');
  
// //   me.classyGreeting(you);
// //   you.classyGreeting(me);


// // < easier > Create a class that will produce social media posts. It should make objects with properties author, content, date, and likes. There should be a method called editContent that takes in a new string that will replace the content.
// class socialMedia {
//     constructor (author, content, date, likes) {
//         this.author = author;
//         this.content = content;
//         this.date = new Date(date);
//         this.likes = likes;
//     }
//     repContent (newContent) {
//         this.content = newContent
//     }
// }
 
// const socialMedia1 = new socialMedia("Tom", "Today is cold.", "2022, 12", 3)
// console.log(socialMedia1)
// socialMedia1.repContent("today is hot")
// console.log(socialMedia1)


// // < harder > Create a class that will produce social media posts. The object should have properties author, content, date, and likes. There should be a method called editContent that takes in a new string that will replace the content.
// // Add another method called changeLikes that takes a string "add" or "remove" that increments or decrements that likes by 1 based on the string.
// class socialMedia_ {
//     constructor (author, content, date, likes) {
//         this.author = author;
//         this.content = content;
//         this.date = new Date(date);
//         this.likes = likes;
//     }
//     repContent (newContent) {
//         this.content = newContent
//     }
//     changeLikes (type, num) {
//         if (type == "add") {
//             this.likes += num
//         } else if (type == "remove") {
//             this.likes -= num
//         }
//     }
// }

// const socialMedia2 = new socialMedia_("Tom", "Today is cold.", "2022, 12", 3);
// socialMedia2.changeLikes("add", 3);
// console.log(socialMedia2)


class Character {
    constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
      this.legs = 2;
      this.arms = 2;
      this.name = name;
      this.age = age;
      this.eyes = eyes;
      this.hair = hair;
      this.lovesCats = lovesCats;
      this.lovesDogs = lovesDogs || true;
    }
    greet (otherCharacter) {
      console.log('hi ' + otherCharacter + '!');
    }
    classyGreeting (otherClassyCharacter) {
      console.log('Howdy ' + otherClassyCharacter.name + '!');
    }
    setHair (hairColor) {
      this.hair = hairColor;
    }
    smite () {
      console.log('i smited thee.');
    }
  
  }
   const hobbit = new Character('Mr Baggins', 33, 'brown', 'black')
  console.log(hobbit);


  class Hobbit extends Character {
    steal () {
      console.log('lets get away!');
    }
  }
  const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
  console.log(frodo);
  frodo.smite();
  frodo.steal();


  class Hobbit1 extends Character {
    constructor (name, age, eyes, hair) {
      super(name, age, eyes, hair);
      this.skills = ["thievery", "speed", "willpower"];
    }
    steal () {
      console.log('lets get away!');
    }
    greet (otherCharacter) {
      console.log('Greetings ' + otherCharacter);
    }
    smite () {
      super.smite();
      this.steal();
    }
  }
  const frodo1 = new Hobbit1('Frodo', 30, 'brown', 'black')
  console.log(frodo1);

