/ First step:
// a pattern enclosed between slashes,as follow:
// ex /ab/
// step two:
// /w+-matches one or more word character (letters,digits,or underscores).
// $-anchors the match to the end of the string .
// g-global flag,meaning find all matches.
// /b word boundary(start or end of a word)
// [..!?]A character set - match anyone of these character

let number = 6369779636;
let test = /^[1-9][0-9]{9}$/;

if (test.test(number.toString())) {
    console.log("correct");
} else {
    console.log("check your valid num");
}

const text="hello! how are you";
const words=text.match(/\bh\w+o\b/gi);
console.log(words);
	


