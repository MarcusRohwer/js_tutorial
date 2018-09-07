#!/usr/bin/node

'use strict';
let fs = require("fs");
let Phrase = require("marc-palindrome");

let text = fs.readFileSync("phrases.txt", "utf-8");

let lines = text.split("\n");
let result = "";

lines.forEach(line => result += (new Phrase(line).palindrome() + ":\t" + line + "\n"));

fs.writeFile("palindrome.txt", result, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
