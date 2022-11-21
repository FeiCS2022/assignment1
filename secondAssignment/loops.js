//2. a for loop that logs 0-15;
for (i = 0; i < 16; i++) {
    console.log(i)
}


//3.a for lopp that counts from 15-0;
for (i = 15; i >= 0; i--) {
    console.log(i)
}

//4. Make variable laps = 0; write a for loop that logs
// (“that’s another lap!”) and adds 1 to the laps variable. AFTER the loop, log laps.
let laps = 0;
for (i = 0; i < 2; i++) {
    console.log("that's another lap!");
    laps+=1;
}


//git add. commit, push
//done

//Make variable age. Make a loop from 0-100. 
//In every loop check if i == age, if so log something, else say “age doesn’t match”.
let age = 4;
for (i = 0; i <= 100; i++) {
      if (age == i) {
        console.log ("yeh")
    } else {
        console.log("age doesn't match")
    }
}


//Write a loop that logs all even numbers from 0-700.
for (i = 1; i <= 700; i++) {
    if (i % 2 == 0) {
        console.log(i)
    } 
}
//Write a loop that logs all odd numbers from 0-700.
for (i = 1; i <=700; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}


//Write a loop with some “if else” statements. The loop should start at 1900 and go to 1949 and log when things were invented. For example when i = 1902 the code should log “it is 1902 - the teddy bear is invented!”
for (i = 1900; i <=1949; i++){
    if (i == 1900) {
        console.log("it is 1900 - the Zeppelin is invented!")
    } else if (i == 1902) {
        console.log("it is 1900 - the Teddy Bear is invented!")
    } else if (i == 1910) {
        console.log("it is 1913 - the Bra is invented!")
    } else if (i == 1918) {
        console.log("it is 1913 - the Fortune Cookie is invented!")
    } else if (i == 1923) {
        console.log("it is 1913 - the Traffic Signal is invented!")
    } else if (i == 1935) {
        console.log("it is 1913 - the Radar is invented!")
    } else if (i == 1938) {
        console.log("it is 1913 - the Ballpoint Pen is invented!")
    } else if (i == 1943) {
        console.log("it is 1913 - the Slinky is invented!")
    }
}
//nogit add, commit, push