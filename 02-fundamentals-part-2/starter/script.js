// console.log("Part 2: Functions ready!");

// // Functions - Declarations and Expressions
// console.log("=== FUNCTIONS ===");

// function logger() {
//     console.log("My name is Claire");


// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges); 
// const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// return juice;
// }

// console.log(fruitProcessor(5, 3));



// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 2);

// // Function expression
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;

// } ;

// const age1 = calcAge(2002); 
// console.log(age1);

// console.log(calcAge(1991));
// function introduce(firstName, lastName, age) {
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
//     return introduction;

// } 

// function yearsUntilRetirement(birthYear, firstName)  {
//   const age = calcAge(birthYear); // Using one function inside another!
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return `${firstName} has already retired!`;
//   }
// }

// console.log(yearsUntilRetirement(2002, "Claire"));
// console.log(yearsUntilRetirement(1950, "Mike"));
// // function scope 

// const globalVar = "I am global";

// function testScope() {
//   // Function scope
//   const localVar = "I am local";
//   console.log(globalVar); // Can access global
//   console.log(localVar); // Can access local
// }

// testScope();
// // console.log(localVar); 
// console.log(globalVar); 

// // Coding Challenge #1

// // Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//  return (score1 + score2 + score3) / 3;

// }

// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;

//     } else {
//         return `No team wins... (Dolphins: ${avgDolphins}, Koalas: ${avgKoalas})`;
//     }
//     }
    

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

const grades = [85, 92, 78, 96, 88];
console.log(grades);

const friends = ["Conrad", "Steven", "Jeremiah"];
console.log(friends);

const mixed = ["Jonas", 40, false, friends];
console.log(mixed);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

// Accessing Array Elements
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[4]);


console.log(friends.length); 

friends[0] = "Conrad";
console.log(friends);

const calcAge = function (birthYear) {
    return 2025 - birthYear;

} ;

const ages = [calcAge(2000), calcAge(1940), calcAge(1991)];
console.log(ages);


const newLength = friends.push("John");
console.log(friends);


friends.unshift("Belly");
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

const shifted = friends.shift();
console.log(shifted);
console.log(friends);

// finding an element
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Belly"));

// includes
console.log(friends.includes("Jeremiah"));
console.log(friends.includes("Belly"));

// Array Iterations
for (let i = 0; i < friends.length; i++) {
   console.log(friends[i]);
    
}

friends.forEach(
    function(friend, index) {
        console.log(`${index + 1}: ${friend}`);
}
);



// practical example
const grades2 = [85, 92, 78, 96, 88, 74];
let total = 0;
for (let i = 0; i < grades2.length; i++) {
    total += grades2[i];
}

const average = total / grades2.length;
console.log(`Average grade: $[average.toFixed(2)}`);

let passedCount = 0;
grades2.forEach(grade => {
    if (grade >= 60) {
        passedCount++;
    }
});

const studentsGrade = [78, 85, 92, 67, 88, 95, 73, 82];

calculateAverage = function(grades) {
   let sum = 0;
   for (let i = 0; i < grades.length; i++) { 
    sum += grades[i];
   }
    return sum / grades.length;
}



const averageGrade = calculateAverage(studentsGrade);
console.log(`Average grade: ${averageGrade.toFixed(2)}`);

const highestGrade = Math.max(...studentsGrade);
console.log(`Highest grade: ${highestGrade}`);

const lowestGrade = Math.min(...studentsGrade);
console.log(`Lowest grade: ${lowestGrade}`);

const countPassing = studentsGrade.filter(grade => grade >= 70).length;
console.log(`Number of students passing: ${countPassing} out of ${studentsGrade.length}`);



