const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Hello", "Lighthouse", "Labs"];
const moreWords = [];
const evenMoreWords = ["Hello"];

console.log(tail(words));
console.log(tail(moreWords));
console.log(tail(evenMoreWords));


assertEqual(words.length, 3);