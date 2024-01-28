// import {getNumberOfChars, getFirstChar, getLastChar, getLower, getUpper, getCapitalized} from "./variations.js";

const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const answer5 = document.querySelector("#answer5");
const answer6 = document.querySelector("#answer6");

const name = document.querySelector("#your-name");

name.addEventListener("keyup", () => {
    const value = name.value;

    answer1.textContent = getNumberOfChars(value);
    answer2.textContent = getFirstChar(value);
    answer3.textContent = getLastChar(value);
    answer4.textContent = getLower(value);
    answer5.textContent = getUpper(value);
    if (value) {
        answer6.textContent = getCapitalized(value);
    } else {
        answer6.textContent = "";
    }
});

// /** @param {string} name */
// export function getNumberOfChars(name) {
//     // number of characters in: name
//     return name.length;

// }

// /** @param {string} name */
// export function getFirstChar(name) {
//     // first character of: name
//     return name[0];

// }

// /** @param {string} name */
// export function getLastChar(name) {
//     // last character of: name
//     return name[name.length-1];

// }

// /** @param {string} name */
// export function getLower(name) {
//     // name all in lower case (example: "ABC" becomes "abc")
//     return name.toLocaleLowerCase();

// }

// /** @param {string} name */
// export function getUpper(name) {
//     // name all in upper case (example: "abc" becomes "ABC")
//     return name.toLocaleUpperCase();
// }

// /** @param {string} name */
// export function getCapitalized(name) {
//     // capitalized version of name (example: "alEX" becomes "Alex")
//     return name[0].toLocaleUpperCase()+name.substring(1).toLocaleLowerCase();
// }


function getUpper(name) {
    // name all in upper case (example: "abc" becomes "ABC")
    return name.toLocaleUpperCase();
}

function getCapitalized(name) {
    // capitalized version of name (example: "alEX" becomes "Alex")
    return name[0].toLocaleUpperCase()+name.substring(1).toLocaleLowerCase();
}
function getLower(name) {
    // name all in lower case (example: "ABC" becomes "abc")
    return name.toLocaleLowerCase();
}
function getLastChar(name) {
    // last character of: name
    return name[name.length-1];

}
function getFirstChar(name) {
    // first character of: name
    return name[0];

}
function getNumberOfChars(name) {
    // number of characters in: name
    return name.length;

}