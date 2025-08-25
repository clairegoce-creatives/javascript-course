// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log(js);

// console.log("=== VARIABLES ===");

// let firstName ="Jonas";
// console.log(firstName);

// let age = 30;
// console.log(age);
// age = 50;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);
 
// const PI = 3.1415;
// console.log(PI);


// var job = "programmer";
// job = "teacher";
//  console.log(job);
 
// const country = "Philippines";
//  const language = "Filipino";
 
//  age = 25;
//  age = 26;
 
//  // good variables name
// //  let firstName 
// // let myCurrentJob 
// // const PI 

// console.log("=== DATA TYPES ===");

// // Number (integers and decimals);
// let id = 12345;
//  console.log(id);
// console.log(typeof id);
 
// // String 
// let lastName = "Doe"
// console.log(lastName);
// console.log(typeof lastName);

// // Boolean
// let javaScriptIsFun = true;
//  console.log(javaScriptIsFun);
//  console.log(typeof javaScriptIsFun);

// // undefined
// let year;
// console.log(year);
// console.log(typeof year);

// let dynamicVariable = 40;
// console.log(dynamicVariable, typeof dynamicVariable);

// // change to a string
// dynamicVariable = "Now I'm a string";
// console.log(dynamicVariable, typeof dynamicVariable);
 
// // change to boolean
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);

// Basic Operators 
// console.log("=== MATH OPERATORS ===");
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// // More math operators
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math operations:");
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Multiplication:", 4 *7);
// console.log("Division:", 15 / 3);
// console.log("Exponentiation:", 2 ** 3);

// // Math with strings!
// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// console.log("Hello" + "World" + "!");
// console.log("I am " + 25 + "years old");

// // Assignment operators 
// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5; 
// console.log("x starts as:", x);

// x += 10;
// console.log("After x += 10:", x);

// x *= 4;
// console.log("After x *= 4:", x);

// x /= 2;
// console.log("After x /= 2:", x);

// x++;
// console.log("After x++:", x);


// x--;
// console.log("x starts as:", x);

// // Comparison operators
//  console.log("==== COMPARISON OPERATORS ===");

//  console.log("Age comparison:");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number comparisons:");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// const isFullage = ageSarah >= 18;
// console.log("Sarah is an adult:", isFullage);

// console.log("Complex comparison");
// console.log(now - 1991 > now - 2018); // ageJonas > ageSarah

// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older:", isJonasOlder);

// let z,y;
// z = y = 25 - 10 - 5;
// console.log("z and y:", z, y);

// const averageAge =(ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// // Coding Challenge #1

// // Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // 1. Calculate BMIs
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// // 2. Create markHigherBMI variable
// const markHigherBMI = BMIMark > BMIJohn;

// // 3. Log results to console
// // log marks bmi
// console.log(BMIMark);
// // log johns bmi
// console.log(BMIJohn);
// // log markHigherBMI
// console.log(markHigherBMI);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
 
const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2 + 3} equals five`);
console.log(`Comparisons too: ${5 > 3}`);

// if / else statements
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, Wait another ${yearsLeft} years`);
}

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true (empty object)
console.log(Boolean(""));

const massMark = 78;
const heightMark = 1.69;
const massJohn = 120;
const heightJohn = 1.95;


const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn); 

// Your if/else statement here
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`); 

} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`); 
}








 









 
 



 
