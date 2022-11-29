//1. Create a funtion that takes name and dish;
//2. Convert everything to upper or lower case
//3. Compare first character of both arguments
//4. Compare last character of both arguments
//5. If EITHER condition 3 or 4 is false , function returns false
//6. If NEITHER condition is false, function returns true.
function feast(beast, dish) {
    const beast1 = beast.toLowerCase();
    const dish1 = dish.toLowerCase();
    if (beast1[0] == dish1[0] && beast1[beast1.length -1] == dish1[dish1.length -1]) {
      return true;
    } else {
      return false;
    }
  //your function here
  }
  feast ("cat", "dog")
  //one line code: 
  const feast = (beast, dish) => beast[0] == dish[0] && beast[beast.length -1] == dish[dish.length -1]


  function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let total = 0;
    let num = marks.length
    for (i = 0; i< num; i++){
      total += marks[i];
    };
    ave = (total / num);
    return Math.round(ave);
  }
  // one line code:
  const getAverage = (marks) =>{ return Math.floor(marks.reduce((a, b) => a + b) / marks.length)}


//make changes of properties in an Object
const movies = [
    {title:"Tokyo Story", year: 1991},
    {title: "Paul", year : 2008},
    {title: "L'Adventure", year : 1980}
  ];
  console.log(movies);
  movies.forEach(ele => {
    if (ele.title == "Paul") {
      ele.year = 2018
    }
  });
  console.log(movies)


  //
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


