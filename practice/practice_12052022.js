// const getUser = () =>{
//     let user = {
//         name: "James",
//         userId: 44443333
//     }
// }

// getUser()
// console.log(user);


let randomDecimal = Math.random();

console.log(randomDecimal * 10);


console.log(Math.ceil(randomDecimal * 10))
console.log(Math.floor(randomDecimal * 10))



// let user = {
//     name: "James",
//     userId: 44443333,
//     creation: new Date(),
//     points: 900
//     }

// let name = user.name;
// let id = user.userId;
// let points = user.points;

let getUserInfo = (objectParam) => {
    let user = {
        name: "James",
        userId: 44443333,
        creation: new Date(),
        points: 900
        }    
let {type} = objectParam;
let {name, userId, points} = user;

console.log(name);
console.log(userId);

}

getUserInfo()
let [varOne, varTwo, varThree,] = myArray;
console.log(varOne)

