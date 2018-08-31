'use strict';

// let a = ["ant", "bat", "cat", 42];
//
// a.forEach((element) => {console.log(element)});

// a.forEach(function(element) {
//   console.log(element);
// });
//
//
// let soliloquy = "To be, or not to be, that is the question:";
//
// Array.from(soliloquy).forEach(function(character) {
//   console.log(character);
// })

let a = [102, 8, 17, 42, 99];
a.sort(function(a, b) { return a - b; });

a.forEach((element) => {console.log(element)});
