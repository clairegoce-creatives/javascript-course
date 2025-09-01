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

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// const friends = ["Conrad", "Steven", "Jeremiah"];
// console.log(friends);

// const mixed = ["Jonas", 40, false, friends];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// // Accessing Array Elements
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[4]);


// console.log(friends.length); 

// friends[0] = "Conrad";
// console.log(friends);

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;

// } ;

// const ages = [calcAge(2000), calcAge(1940), calcAge(1991)];
// console.log(ages);


// const newLength = friends.push("John");
// console.log(friends);


// friends.unshift("Belly");
// console.log(friends);

// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// // finding an element
// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Belly"));

// // includes
// console.log(friends.includes("Jeremiah"));
// console.log(friends.includes("Belly"));

// // Array Iterations
// for (let i = 0; i < friends.length; i++) {
//    console.log(friends[i]);
    
// }

// friends.forEach(
//     function(friend, index) {
//         console.log(`${index + 1}: ${friend}`);
// }
// );



// // practical example
// const grades2 = [85, 92, 78, 96, 88, 74];
// let total = 0;
// for (let i = 0; i < grades2.length; i++) {
//     total += grades2[i];
// }

// const average = total / grades2.length;
// console.log(`Average grade: $[average.toFixed(2)}`);

// let passedCount = 0;
// grades2.forEach(grade => {
//     if (grade >= 60) {
//         passedCount++;
//     }
// });

// const studentsGrade = [78, 85, 92, 67, 88, 95, 73, 82];

// calculateAverage = function(grades) {
//    let sum = 0;
//    for (let i = 0; i < grades.length; i++) { 
//     sum += grades[i];
//    }
//     return sum / grades.length;
// }



// const averageGrade = calculateAverage(studentsGrade);
// console.log(`Average grade: ${averageGrade.toFixed(2)}`);

// const highestGrade = Math.max(...studentsGrade);
// console.log(`Highest grade: ${highestGrade}`);

// const lowestGrade = Math.min(...studentsGrade);
// console.log(`Lowest grade: ${lowestGrade}`);

// const countPassing = studentsGrade.filter(grade => grade >= 70).length;
// console.log(`Number of students passing: ${countPassing} out of ${studentsGrade.length}`);

// The Array Problem 
//  const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
// ["Michael", "Peter", "Steven"],
    
//  ];

// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// console.log(jonasArray[2]);

// // Objects - Creation with Object Literal Syntax
// console.log("=== OBJECTS ===");

// // const jonas = {
// //     firstName: "Jonas",
// //     lastName: "Schemedtmann",
// //     age: 2037 - 1991,
// //     job: "teacher",
// //     friends: ["Micheal", "Peter", "Steven"],


// // }

// // console.log(jonas);

// // const jonasSArray = [
// //    "Jonas",
// //    "Schemedtmann",
// //    46,
// //    "teacher",
// //    ["Micheal", "Peter", "Steven"], 
// // ];

// // console.log(jonasSArray[0]);
// // console.log(jonasSArray[2]);

// // Object literal syntax - curly braces create objects
// const jonas = {
//   firstName: "Jonas", 
//   lastName: "Schmedtmann", 
//   age: 2037 - 1991, 
//   job: "teacher", 
//   friends: ["Michael", "Peter", "Steven"], 
// };
// console.log(jonas);


// const jonasObject = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 46,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonasObject);

// // Bracket notation - uses strings
// console.log(jonas["firstName"]); 
// console.log(jonas["lastName"]);
// console.log(jonas["age"]);

// // Both notations work for modification
// jonas.job = "programmer";
// jonas["age"] = 35;
// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// jonas.hasDriversLicense = true;

// console.log(jonas);

// // Exercise 1: Personal Object


// const book = {
//   title: "The Summer I Turned Pretty",
//   author: "Jenny Han",
//   pages: 837,
//   isRead: true
// };


// const playlist = {
//   name: "Red (Taylor's Version",
//   creator: "Taylor Swift",
//   songs: ["Red", "Message in a Bottle", "Begin Again"],
//   genre: "Pop"
// };


// console.log("Book Title:", book.title); 
// console.log("Book Author:", book["author"]); 
// console.log("Playlist Creator:", playlist.creator); 
// console.log("Playlist Genre:", playlist["genre"]); 


// book.yearPublished = 2009;
// playlist.totalSongs = playlist.songs.length;


// book.isRead = true; 
// playlist.genre = "Pop/Alternative"; 


// console.log("Book Object:", book);
// console.log("Playlist Object:", playlist);

// // Ordered, indexed data - think lists
// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// console.log(listOfYears);
// console.log(shoppingList);
// console.log(testScores);

// // Named, descriptive data - think entities
// const person = {
//   name: "Taylor Alison Swift",
//   age: 34,
//   occupation: "Singer-songwriter",
// };

// const car = {
//   brand: "Range Rover",
//   model: "Sport",
//   year: 2020,
//   color: "black",
// };

// console.log(person);
// console.log(car);

// // Objects can contain arrays, arrays can contain objects
// const student = {
//   name: "Joe",
//   grades: [85, 92, 78], 
//   address: {
   
//     street: "Cornelia St",
//     city: "New York",
//   },
// };

// console.log(student.grades[0]); 
// console.log(student.address.city);

// // Object Methods

// const Claire = {
//   firstName: "Claire",
//   lastName: "Goce",
//   birthYear: 2002,
//   job: "Content Creator",
//   friends: ["Hoshi", "Mingyu", "Seungcheol"],
//   hasDriversLicense: true,

 
//  calcAge: function (birthYear) {
//     return 2025 - birthYear;
//   },
// };


// console.log(Claire.calcAge(2002)); 
// console.log(Claire.calcAge(Claire.birthYear)); 


// const ClaireImproved = {
//   firstName: "Claire",
//   lastName: "Goce",
//   birthYear: 2002,
//   job: "Content Creator",
//   friends: ["Hoshi", "Mingyu", "Seungcheol"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     console.log(this); 
//     return 2025 - this.birthYear; 
//   },
// };

// console.log(ClaireImproved.calcAge());

// // Advanced: Storing Calculated Values

// const ClaireAdvanced = {
//   firstName: "Claire",
//   lastName: "Goce",
//   birthYear: 2002,
//   job: "Content Creator",
//   friends: ["Sophia", "Lara", "Daniela"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2025 - this.birthYear; 
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and she has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(ClaireAdvanced.calcAge()); 
// console.log(ClaireAdvanced.age);
// console.log(ClaireAdvanced.getSummary()); 


// // Exercise 2: Calculator Object


// const calculator = {
//   num1: 10,
//   num2: 5,
//   operator: "+",

  
//   add: function () {
//     return this.num1 + this.num2;
//   },

//   subtract: function () {
//     return this.num1 - this.num2;
//   },

//   multiply: function () {
//     return this.num1 * this.num2;
//   },

//   divide: function () {
//     return this.num1 / this.num2;
//   },

//   calculate: function () {
//     if (this.operator === "+") return this.add();
//     if (this.operator === "-") return this.subtract();
//     if (this.operator === "*") return this.multiply();
//     if (this.operator === "/") return this.divide();
//     return "Invalid operator!";
//   },

//   getResult: function () {
//     return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
//   },
// };

// console.log(calculator.calculate());   
// console.log(calculator.getResult()); 

// // Coding Challenge #3 

// const user = {
//   firstName: "Claire",
//   lastName: "Goce",
//   birthYear: 2002,
//   location: "New York",
//   interests: ["photography", "travel", "coding"],
//   friends: [
//     { name: "Hoshi", status: "active" },
//     { name: "Woozi", status: "inactive" },
//     { name: "Jeonghan", status: "active" },
//   ],
//   isActive: true,


//   calcAge: function () {
//     const currentYear = new Date().getFullYear();
//     this.age = currentYear - this.birthYear;
//     return this.age;
//   },

  
//   addFriend: function (name, status = "active") {
//     this.friends.push({ name, status });
//     return this.friends.length;
//   },

  
//   getActiveFriends: function () {
//     return this.friends.filter(friend => friend.status === "active").length;
//   },

 
//   toggleStatus: function () {
//     this.isActive = !this.isActive;
//     return this.isActive;
//   },


//   getSummary: function () {
//     this.calcAge(); 
//     return `
//      ${this.firstName} ${this.lastName}
//      Age: ${this.age}
//     Location: ${this.location}
//     Status: ${this.isActive ? "Active" : "Inactive"}
//      Friends: ${this.friends.length} total, ${this.getActiveFriends()} active
//      Interests: ${this.interests.join(", ")}
//     `;
//   },
// };


// console.log(user.getSummary());

// user.addFriend("Mingyu", "active");
// user.toggleStatus();

// console.log(`After updates:`);
// console.log(user.getSummary());

// Selecting DOM Elements

// // querySelector - works with any CSS selector
// const { JSDOM } = require("jsdom");
// const { document } = (new JSDOM(`<!DOCTYPE html><p class="message">Hello</p><h1>Title</h1><input class="guess"/><button id="btn">Click</button>`)).window;
// const message = document.querySelector(".message"); // Select by class
// const button = document.querySelector("#btn"); // Select by ID
// const heading = document.querySelector("h1"); // Select by tag
// const input = document.querySelector(".guess"); // Select by class

// console.log(message);
// console.log(button);
// console.log(heading);

// // Different selector types
// document.querySelector(".className"); 
// document.querySelector("#idName"); 
// document.querySelector("tagName"); 
// document.querySelector('[type="text"]'); 
// document.querySelector("div p"); 

// // getElementById - only works with IDs
// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(buttonById === button); 

// // querySelectorAll - gets ALL matching elements
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs); // NodeList (like an array)
// console.log(allParagraphs[0]); // First paragraph
// console.log(allParagraphs.length); // Number of paragraphs

// // Exercise 1: Element Selection Practice


// // 1. Select the element with class 'guess' and log it
// const guessInput = document.querySelector(".guess");
// console.log("Guess input:", guessInput);

// // 2. Select the element with ID 'btn' using both querySelector and another method
// const buttonQuery = document.querySelector("#btn");        // Method 1: querySelector
// const buttonByClass = document.getElementsByClassName("btn")[0];
// const firstspan = document.querySelector("span"); // Method 2: getElementsByClassName
// console.log("Button (querySelector):", buttonQuery);
// console.log("Button (getElementsByClassName):", buttonByClass);
// console.log("Same element?", buttonQuery === buttonByClass); // Should be true

// // 3. Select all span elements and log the collection
// const allSpans = document.querySelectorAll("span");
// console.log("All spans:", allSpans);



// // 5. Experiment with different CSS selectors
// console.log("Select by tag name:", document.querySelector("h1"));          // first <h1>
// console.log("Select by class:", document.querySelector(".message"));      // element with class 'message'
// console.log("Select by ID:", document.querySelector("#btn"));             // element with id 'btn'
// console.log("Select nested element:", document.querySelector("div span")); // span inside a div

// // Modifying Element Content

// const msg = document.querySelector(".message");

// console.log(msg.textContent);
// msg.textContent = "Hello from JavaScript!";
// msg.innerHTML = "<strong>Bold text from JS!</strong>";
// console.log(msg.innerText);

// const guessField = document.querySelector(".guess");

// console.log(guessField.value); // Log current value
// guessField.value = "Default text"; // Set value
// guessField.placeholder = "Type here"; // Set placeholder
// console.log(guessField);

// // Changing element styles with the style property
// const heaDing = document.querySelector("h1");

// heaDing.style.color = "red";
// heaDing.style.backgroundColor = "yellow"; // Note: camelCase!
// heaDing.style.fontSize = "3rem";
// heaDing.style.padding = "20px";
// heaDing.style.borderRadius = "10px";


// // Exercise 2: Content and Style Practice
// // Practice content and style manipulation:
// // 1. Change the h1 text to your name
// // 2. Make the button's background color blue and text white
// // 3. Set a placeholder text in the input field
// // 4. Change the message text to include HTML bold formatting
// // 5. Make the score display larger and a different color

// // Select elements
// const hng = document.querySelector("h1");
// const btton = document.querySelector("#btn");
// const ipt = document.querySelector(".guess");
// const mess = document.querySelector(".message");
// const scoreValue = document.querySelector(".score-value");

// // 1. Change h1 text to your name
// heading.textContent = "Claire Goce";

// // 2. Style the button
// btton.style.backgroundColor = "blue";
// btton.style.color = "white";
// btton.style.padding = "10px 20px";
// btton.style.border = "none";
// btton.style.borderRadius = "5px";
// btton.style.cursor = "pointer"; // Added better UX

// // 3. Set placeholder text in input field
// ipt.placeholder = "Enter your guess here...";

// // 4. Add HTML bold formatting in the message
// mess.innerHTML = "This is a <strong>bold</strong> message from JavaScript!";

// // Select the element
// const scrValue = document.querySelector("#scoreValue");

// // Style it
// scrValue.style.fontSize = "2rem";
// scrValue.style.color = "green";
// scrValue.style.fontWeight = "bold";
// scrValue.style.textShadow = "1px 1px 2px black";

// // Event Listeners - User Interaction

// const bttn = document.querySelector("#btn");
// const mssage = document.querySelector(".message");

// // addEventListener - the modern way to handle events
// bttn.addEventListener("click", function () {
//   console.log("Button was clicked!");
//   mssage.textContent = "You clicked the button!";
//   mssage.style.color = "green";
// });

// // Event listener with state management
// let clickCount = 0;

// button.addEventListener("click", function () {
//   clickCount++;
//   button.textContent = `Clicked ${clickCount} times`;
//   button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
// });

// // Input events fire every time user types
// const iP = document.querySelector(".guess");

// iP.addEventListener("input", function () {
//   const userText = iP.value;
//   message.textContent = `You typed: ${userText}`;
//   message.style.fontSize = `${userText.length + 10}px`;
// });

// // Keyboard events - responding to specific keys
// input.addEventListener("keydown", function (event) {
//   console.log(`Key pressed: ${event.key}`);

//   if (event.key === "Enter") {
//     message.textContent = `You pressed Enter! Text was: ${input.value}`;
//     input.value = ""; // Clear input
//   }
// });

// // Global keyboard events
// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     // Reset everything
//     message.textContent = "Reset with Escape key!";
//     input.value = "";
//     clickCount = 0;
//     button.textContent = "Click Me!";
//   }
// });

// Exercise 3: Event Listener Practice
// ===== DOM Caching =====
const els = {
  scoreBoxes: [
    document.getElementById("score-1"),
    document.getElementById("score-2"),
  ],
  addButtons: document.querySelectorAll(".btn-add"),
  resetBtn: document.getElementById("btn-reset"),
  winningInput: document.getElementById("winning-score"),
  targetSpan: document.querySelector(".target"),
  winnerBanner: document.querySelector(".winner"),
  winnerName: document.querySelector(".winner-name"),
  players: document.querySelectorAll(".player"),
};

// ===== State & Logic =====
const gameState = {
  scores: [0, 0],
  target: parseInt(els.winningInput.value, 10) || 5,
  active: true,

  addPoint(playerIndex) {
    if (!this.active) return;
    this.scores[playerIndex]++;
    this.updateDisplay();
    this.checkWinner();
  },

  setTarget(nextTarget) {
    const n = Number(nextTarget);
    this.target = Number.isFinite(n) && n > 0 ? n : 5;
    els.targetSpan.textContent = this.target;
    this.reset(false); // Soft reset when target changes
  },

  checkWinner() {
    const winnerIndex = this.scores.findIndex((s) => s >= this.target);
    if (winnerIndex !== -1) {
      this.active = false;
      this.showWinner(winnerIndex);
    }
  },

  showWinner(winnerIndex) {
    const loserIndex = winnerIndex === 0 ? 1 : 0;

    els.winnerName.textContent = `Player ${winnerIndex + 1}`;
    els.winnerBanner.classList.remove("hidden");

    els.players[winnerIndex].classList.add("winner");
    els.players[loserIndex].classList.add("loser");

    // celebratory background
    document.body.style.background =
      "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
  },

  updateDisplay() {
    els.scoreBoxes[0].textContent = this.scores[0];
    els.scoreBoxes[1].textContent = this.scores[1];
  },

  reset(hard = true) {
    this.scores = [0, 0];
    this.active = true;
    this.updateDisplay();

    els.winnerBanner.classList.add("hidden");
    els.winnerName.textContent = "Player";
    els.players.forEach((p) => p.classList.remove("winner", "loser"));

    // restore original background
    document.body.style.background =
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";

    if (hard) {
      els.winningInput.value = this.target;
      els.targetSpan.textContent = this.target;
    }
  },
};

// ===== Event Listeners =====
els.addButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const player = parseInt(btn.dataset.player, 10) - 1;
    gameState.addPoint(player);
  });
});

els.resetBtn.addEventListener("click", () => gameState.reset());

els.winningInput.addEventListener("input", (e) =>
  gameState.setTarget(e.target.value)
);

// Keyboard shortcuts: 1 → P1, 2 → P2, R → Reset
document.addEventListener("keydown", (e) => {
  const k = e.key.toLowerCase();
  if (k === "1") gameState.addPoint(0);
  else if (k === "2") gameState.addPoint(1);
  else if (k === "r") gameState.reset();
});

// ===== Initialize =====
els.targetSpan.textContent = gameState.target;
gameState.updateDisplay();
gameState.reset();

// console.log("Event listeners ready!");
