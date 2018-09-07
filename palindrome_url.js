#!/usr/bin/node

'use strict';
let request = require("request");
let Phrase = require("marc-palindrome");
let palindromes;

// request('https://cdn.learnenough.com/phrases.txt', function (error, response, body) {
//   let lines = body.split("\n");
//   lines.forEach(line => console.log(new Phrase(line).palindrome() + ":\t" + line + "\n"));
// });

request('https://cdn.learnenough.com/phrases.txt', function (error, response, body) {
  let lines = body.split("\n");
  palindromes = lines.filter(line => (new Phrase(line)).palindrome());

  palindromes.forEach(function(palindrome) {
    console.log(palindrome);
  });
});
