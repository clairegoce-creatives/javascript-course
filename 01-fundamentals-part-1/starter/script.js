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

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;
 
// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`);

// // if / else statements
// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young, Wait another ${yearsLeft} years`);
// }

// // 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean("Jonas")); // true
// console.log(Boolean({})); // true (empty object)
// console.log(Boolean(""));

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 120;
// const heightJohn = 1.95;


// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn); 

// // Your if/else statement here
// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`); 

// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`); 
// }

// Type Conversion and Coercion

// type conversion (manual)
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear); 
// console.log(Number(inputYear) + 18); 

// console.log(Number("Jonas")); 
// console.log(typeof NaN);

// console.log(String(23), 23); 
// console.log(typeof String(23)); 

// // type coercion (automatic)
// console.log("I am " + 23 + " years old"); 
// console.log("23" - "10" - 3);
// console.log("23" / "2"); 
// console.log("23" * "2"); 

// let n = "1" + 1;
// n = n - 1; 
// console.log(n);

// console.log(2 + 3 + 4 + "5"); 
// console.log("10" - "4" - "3" - 2 + "5"); 

// // Predict the output, then test:
// console.log("5" + 2); // 52
// console.log("5" - 2); // 3
// console.log("5" * 2); // 10
// console.log("5" / 2); // 2.5

// // Convert these explicitly:
// const userAge = "25"; // Convert to number
// const userScore = 95; // Convert to string

// // Explicit conversions
// const ageAsNumber = Number(userAge);   
// const scoreAsString = String(userScore); 

// // results
// console.log(ageAsNumber, typeof ageAsNumber);   // 25 number
// console.log(scoreAsString, typeof scoreAsString);

// // Simple calculator that fixes string concatenation bug

// // Ask user for two numbers
// const num1 = prompt("First number:");  // Returns string
// const num2 = prompt("Second number:"); // Returns string

// // Convert to numbers before adding
// const sum = Number(num1) + Number(num2);

// // Show result
// console.log(`Sum: ${sum}`);
// alert(`Sum: ${sum}`);


// // Equality Operators: == vs. ===

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");


// console.log("18" === 18); // false 
// console.log("18" == 18); // true 
// console.log(18 === 18); // true 

// // Why == can be dangerous
// console.log("0" == 0); // true (string converted)
// console.log(0 == false); // true (boolean converted)
// console.log("0" == false); // true (both converted!)
// console.log(null == undefined); // true (special case)

// // Weird cases that cause bugs
// console.log("" == 0); // true
// console.log("   " == 0); // true (spaces trimmed!)

// // Convert explicitly, then compare strictly
// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// // Not-equal operator
// if (favourite !== 23) console.log("Why not 23?");

// // Fixed Login System

// const username = prompt("Username:");
// const password = prompt("Password:");


// if (username === "admin" && password === "1234") {
//   console.log("Welcome admin!");
//   alert("Welcome admin!");
// } else {
//   console.log("Access denied");
//   alert("Access denied");
// }

// // Logical Operators

// const hasDriversLicense = true; 
// const hasGoodVision = true; 

// console.log(hasDriversLicense && hasGoodVision); 
// console.log(hasDriversLicense || hasGoodVision); 
// console.log(!hasDriversLicense); 

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// // More complex scenarios
// const agenow = 20;
// const hasPermission = true;
// const hasExperience = false;


// if ((agenow >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

// // Club Entry System

// const agecurrent = 19;     
// const hasID = true; 
// const isVIP = false; 


// if ((agecurrent >= 21 && hasID) || isVIP) {
//   console.log("Welcome to the club!");
//   alert("Welcome to the club!");
// } else {
//   console.log("Sorry, you cannot enter");
//   alert("Sorry, you cannot enter");
// }

// // Weather Advisor
// const temperature = 25; // Celsius
// const isRaining = false;
// const isWindy = true;

// // Advice rules:
// // Perfect day: temp 20-30 AND not raining AND not windy
// // Good day: temp 15-35 AND not raining
// // Stay inside: anything else

// if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy) {
//   console.log("It's a perfect day! 🌞");
//   alert("It's a perfect day! 🌞");
// } else if (temperature >= 15 && temperature <= 35 && !isRaining) {
//   console.log("It's a good day! 😀");
//   alert("It's a good day! 😀");
// } else {
//   console.log("Better stay inside! ☔");
//   alert("Better stay inside! ☔");
// }

// // The Conditional (Ternary) Operator

// const agerightnow = 23;

// // Basic ternary: condition ? valueIfTrue : valueIfFalse
// const drink = agerightnow >= 18 ? "wine 🍷" : "water 💧";
// console.log(drink);

// // Equivalent if/else (more verbose)
// let drink2;
// if (agerightnow >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = "water 💧";
// }
// console.log(drink2);

// // Perfect for template literals!
// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

// // 1. Login status
// const isLoggedIn = true;
// let welcomeMessage = isLoggedIn ? "Welcome back!" : "Please sign in";

// console.log(welcomeMessage); // → "Welcome back!"


// // 2. Price with discount
// const isPremium = false;
// let price = isPremium ? 100 * 0.8 : 100;

// console.log(`Price: $${price}`); // → "Price: $100"

// const score = 85;
// const weather = "sunny";
// const battery = 15; // percentage

// // Smart responses with ternary in template literals
// const scoreMessage = `Your score: ${score} (${score >= 60 ? "Passed" : "Failed"})`;
// const weatherMessage = `Weather is ${weather} (${weather === "sunny" ? "Great for outdoor activities" : "Stay inside"})`;
// const batteryMessage = `Battery: ${battery}% (${battery < 20 ? "Low battery warning" : "Battery OK"})`;

// // Output messages
// console.log(scoreMessage);
// console.log(weatherMessage);
// console.log(batteryMessage);

// // Optional alerts if running in browser
// alert(scoreMessage);
// alert(weatherMessage);
// alert(batteryMessage);


// ////////////////////////////////////
// // Coding Challenge #4 - Tip Calculator

// const bill = 275; // Try with 275, 40, and 430

// // Step 1: Tip calculation using ternary operator
// // 15% if bill is between 50 and 300, else 20%
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// // Step 2: Beautiful output with template literal
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );







 









 
 



 
