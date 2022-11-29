let party = [
    {
        name: 'Joline',
        hitpoints: 15,
        belongings: ["spear", "bread", "Tums"],
        companion: {
            name: "Tabby",
            type: "cat",
        }
    },
    {
        name: 'Timothy',
        hitpoints: 10,
        belongings: ["sword", "potion", "Tums"],
        companion: {
            name: "Velma",
            type: "Bat",
        }
    },
    {
        name: 'Sarah',
        hitpoints: 20,
        belongings: ["bow", "arrows", "wood"],
        companion: {
            name: "Tony",
            type: "tiger",
        }
    },
]


// Prompt 1: double the hitpoints of everyone in the party
const doublePoint = (arr) => {
    for (ele in arr){
      arr[ele].hitpoints = arr[ele].hitpoints*2;
    }
  };
  console.log(par[0].hitpoints)
   doublePoint(par);
  console.log(par[0].hitpoints);


// Prompt 2: Timothy has been hit with an arrow, subtract 5 points from his hp
const takeHit = (name, point) => {
  for (ele in par){
  if (par[ele].name == name) {
  par[ele].hitpoints = par[ele].hitpoints - point
}
}
}
takeHit("Timothy", 5)
console.log(par[1].hitpoints)


// Prompt 3: Sarah's tiger has been turned into a jellyfish by a wizard, please change it
const changeType = (name, newType) => {
    for (ele in par){
      if (par[ele].name == name) {
        par[ele].companion.type = newType;
      }
    }
  };

  changeType("Sarah", "jellyfish")


// Prompt 4: Timothy drank this potion. Raise his hitpoints by 20 and remove "potion" from his belongings.
party.forEach(ele => {if(ele.name== "Timothy") {
    delete ele.belongings[1];
    //another way to indicate "potion"??
    ele.hitpoints = ele.hitpoints + 20;
 }
 }
 )
 console.log(party[1])


// Prompt 5: Timothy got hungry and stole Joline's bread. Take it out of her belongings and put it  into Timothy's belongings.
party.forEach(ele => {if(ele.name == "Joline") {
    party.forEach(ele2 => {
      if(ele2.name == "Timothy") {
          ele2.belongings.push.apply(ele2.belongings,ele.belongings);
          delete ele.belongings
      }
    }
   )
  }
  })

   console.log(party[1])


// Prompt 6: Joline got upset and left the party. Take her out of the array. (use the name of the leaving member as a parameter)
const removePerson = (arr, name) => {
    for (let i = 0; i < arr.length; i++){
      if (arr[i].name == name) {
        delete arr[i];
      }
    }
   }

   removePerson(party, "Joline")
   console.log(party)


// Prompt 7: Timothy and Sarah have been recruiting. Add a new adventurer to the party. (new adventurer is parameter)
const addAdventurer = (person) => {
    party.push({name : person})
  } 
  addAdventurer("Timothy")
  addAdverturer("Sarah")
  console.log(party)

  
// Prompt 8: The party has been doing well! They found 200 gold. Create a new property called gold and split the gold evenly between everyone. (amount of gold is parameter)
const addGold = (goldNum) => {
    for (let i = 0; i < party.length; i++) {
      party[i].gold = goldNum / party.length 
    }
  };

  addGold(200);
  console.log(party)


// Prompt 9: Sarah is tired of taking care of a jellyfish. Subtract some gold from her and change her companion to a bear. 
const changeCompanion = (person, type) => {
    for (let i = 0; i < party.length; i++) {
      if (party[i].name == person) {
        party[i].gold = party[i].gold - 10;
        party[i].companion.type = type
      }
    }
  }
  
  changeCompanion("Sarah", "bear");
  console.log(party[2])


// Prompt 10: Timothy’s sword has gotten old. Change it to “Rusty Sword" 
const changeBelongings = (person, oldB, newB) => {
  for (let i = 0; i < party.length; i++) {
    if (party[i].name == person) {
    var j = party[i].belongings.indexOf(oldB);
      party[i].belongings[j] = newB;
    }
  }
}

changeBelongings("Timothy", "sword", "Rusty Sword")
console.log(party)


// Prompt 11: Write a function called setLeader that takes a name as a parameter. The member with that name should have a new property leader: true while the other members have leader: false.
const setLeader = (name) => {
    for (let i = 0; i < party.length; i++) {
      party[i].leader = '';
      if (party[i].name == name){
        party[i].leader = true
      } else {
        party[i].leader = false
      }
    }
  }

  setLeader("Joline")
  console.log(party)
