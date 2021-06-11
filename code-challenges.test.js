// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

var secretCodeWord1 = "Lackadaisical";
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook";
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric";
// Expected output: "3cc3ntr1c"

describe("codeMess", () => {
  test("should take in a string and return a coded message", () => {
    expect(codeMess(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
    expect(codeMess(secretCodeWord2)).toEqual("G0bbl3dyg00k");
    expect(codeMess(secretCodeWord3)).toEqual("3cc3ntr1c");
  });
});

// b) Create the function that makes the test pass.
const codeMess = (str) => {
  /*
        
        take in a string
        turn strin into an array
        filter
        loop through string to check what char is
        check:
        'a' to 4 or
        'e' to 3 or
        'i' to 1 or
        'o' to 0
    */
  let newStrArr = str.split("");
  let filteredArr = newStrArr.map((value, index) => {
    if (value.toLowerCase() === "a") {
      return 4;
    } else if (value.toLowerCase() === "e") {
      return 3;
    } else if (value.toLowerCase() === "i") {
      return 1;
    } else if (value.toLowerCase() === "o") {
      return 0;
    } else {
      return value;
    }
  });
  return filteredArr.join("");
};
// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Cherry", "Kiwi"];
// Expected output: ["Apple", "Banana"]
var arrayOfWords2 = ["Mango", "Orange", "Apricot", "Blueberry", "Peach"];
// Expected output: ["Mango", "Orange", "Apricot", "Peach"]
describe("hasLetterA", () => {
  test("should take in an array and returns all the words that contain the letter a", () => {
    expect(hasLetterA(arrayOfWords1)).toEqual(["Apple", "Banana"]);
    expect(hasLetterA(arrayOfWords2)).toEqual([
      "Mango",
      "Orange",
      "Apricot",
      "Peach",
    ]);
  });
});
// b) Create the function that makes the test pass.
const hasLetterA = (arr) => {
  /*
    takes in an array
    loop though the arrray
    check if each word in the array has an 'a'
    if it does include 'a'
    return that word in the filtered array
    */
  let onlyA = arr.filter((value) => {
    // return value.includes("a") || value.includes("A");
    return value.toLowerCase().includes("a");
  });
  // console.log(onlyA);
  return onlyA;
};
// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3];
// Expected output: true
var hand2 = [5, 5, 3, 3, 4];
// Expected output: false
var hand3 = [5, 5, 5, 5, 4];
// Expected output: false
describe("fullHouse", () => {
  test("should take in an array of 5 numbers and determines whether or not the array is a “full house”.", () => {
    expect(fullHouse(hand1)).toEqual(true);
    expect(fullHouse(hand2)).toEqual(false);
    expect(fullHouse(hand3)).toEqual(false);
  });
});
// b) Create the function that makes the test pass.
const fullHouse = (arr) => {
  /*
take in an array
sort the array
i want to create an object that could keep count of each time a number a appears
keep count of each accurance
if we have a pair of 3/2 count or if count equals to 5?
return true else false
    */
  // let count = 0;
  // let sortedArr = arr.sort();
  // for (let i = 0; i < sortedArr.length; i++) {
  //   console.log(sortedArr[i], sortedArr[i + 1]);
  // }
  // let newObj = sortedArr.reduce(function (acc, cur, i) {
  //   acc[i] = cur;
  //   return acc;
  // }, {});
  // for (const property in newObj) {
  //   console.log(`${property}: ${newObj[property]}`);
  //   if (newObj[property] === newObj[property + 1]) {
  //     count += 1;
  //   }
  // }
  // console.log(count);
};
