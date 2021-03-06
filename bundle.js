(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("marc-palindrome");

function palindromeTester(e) {
  e.preventDefault();

  let phrase = new Phrase(e.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function(e) {
    palindromeTester(e);
  });
});

},{"marc-palindrome":2}],2:[function(require,module,exports){
'use strict';

module.exports = Phrase;


// Reverses a string. => prototype: inheritance
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

//Tests if the string is empty or consists of whitespaces
String.prototype.blank = function() {
  let regex = new RegExp(/^\s*$/);
  return regex.test(this);
}


// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content.
  this.letters = function letters() {
   const regex = /[a-z]/i;
   return Array.from(this.content).filter(c => c.match(regex)).join("");
 }

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return (this.processedContent() === this.processedContent().reverse()) &&
            (this.processedContent() !== "");
  }
}

},{}]},{},[1]);
