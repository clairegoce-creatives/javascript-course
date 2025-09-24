'use strict';

// console.log(varX); 
// console.log(letX);
// console.log(constX);

// var varX = 1;
// let letY = 2;
// const constX = 3;

// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function (a, b) {
//     return a + b;
// };

// const addArrow = (a, b) => a + b;

// const person = {
//     name: 'Jonas',
//     greet: function () {
//         console.log(`Hello I am ${this.name}`);
//     },
    
// };

// person.greet();

// const anotherPerson = {name: 'Sarah' };

// anotherPerson.greet = person.greet;
// anotherPerson.greet();

// // Detached Function
// const greetFunction = person.greet;

// greetFunction();


// const obj = {
//     name: 'Objects',
//     regularMethod: function () {
//         console.log('Regular', this.name);
//     },
//     arrowMethod: function () {
//         console.log('Arrow:', this.name);

//     },
    
// };

// quiz.regularMethod();
// quiz.arrowMethod();

// const timer = {
//     name: 'Timer',
//     start: function () {
//         console.log(`${this.name} starting...`);

//         const self = this;
//         setTimeout(function () {
//             console.log(`${self.name} finished`);
//         }, 1000);
//         },

// startModern: function () {
// console.log(`${this.name} starting modern...`);

// setTimeout ( () => {
//     console.log(`${this.name} finished modern`);
//     }, 1500);
//   },

// };

const functionTypes = {
    regular: function () {
        console.log('Arguments length:', arguments.length);
        console.log('First argument:', arguments[0]);
    }, 
    
    arrowFunction: () => {
        // Arrow functions do not have their own 'arguments' object
        console.log('Arrow function called');
    },
};

functionTypes.regular('hello', 'world');
functionTypes.arrowFunction('hello', 'world'); 






