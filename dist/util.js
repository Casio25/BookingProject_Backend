"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RandomFloatNumber = RandomFloatNumber;
exports.RandomNaturalNumber = RandomNaturalNumber;
exports.shuffle = shuffle;
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
function RandomNaturalNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function RandomFloatNumber(min, max) {
  return Math.random() * (max - min) + min;
}