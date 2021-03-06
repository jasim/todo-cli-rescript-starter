// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Os = require("os");
var Curry = require("bs-platform/lib/js/curry.js");

var getToday = (function() {
  let date = new Date();
  return new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
    .toISOString()
    .split("T")[0];
});

var encoding = "utf8";

console.log("Hello! today is " + Curry._1(getToday, undefined));

if (Fs.existsSync("todo.txt")) {
  console.log("Todo file exists.");
} else {
  Fs.writeFileSync("todo.txt", "This is todo!" + Os.EOL, {
        encoding: encoding,
        flag: "w"
      });
  console.log("Todo file created.");
}

exports.getToday = getToday;
exports.encoding = encoding;
/*  Not a pure module */
