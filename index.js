/* Problem 1:-
Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

*/
function panic(str) {
  // Step 1: Converting the string into UpperCase
  const upperStr = str.toUpperCase();

  // Step 2: Split into words
  const words = upperStr.split(" ");

  // Step 3: Join with emoji if multiple words
  const result = words.join(" 😱 ");

  // Step 4: Add exclamation at the end
  return result + "!";
}

// Test your function
// console.log(panic("I'm almost out of coffee"));
// console.log(panic("winter is coming"));
// console.log(panic("Hello"));

/*Problem 2:- 
Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

function whisper(sentence) {
  // Step 1: Remove exclamation point if it ends with one
  if (sentence.endsWith("!")) {
    sentence = sentence.slice(0, -1); // remove last character
  }

  // Step 2: Convert to lowercase
  const lower = sentence.toLowerCase();

  // Step 3: Add "shh..." at the beginning
  return "shh... " + lower;
}

// console.log(whisper("PLEASE STOP SHOUTING."));
// console.log(whisper("MA'AM, this is a Wendy's!"));

/* 
Problem 3:-
Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (i % 2 === 0) {
      newStr += char.toUpperCase();
    } else {
      newStr += char.toLowerCase();
    }
  }
  return newStr; // Return the built string after the loop
}

// console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
Problem 4:-
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

function toTitleCase(str) {
  return str
    .split(" ")
    .map((word) => capitalizeWord(word))
    .join(" ");
}

// Test your functions
// console.log(capitalizeWord("pumpkin"));
// console.log(toTitleCase("pumpkin pranced purposefully across the pond"));

/* 
Problem 5:-
Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!

Hint: Remainder operator, modulo 
 */

function awardBonuses() {
  const range = [];
  for (let i = 1; i <= 100; i++) {
    range.push(i);
  }
  range.map((num) => {
    if (num % 5 === 0 && num % 3 === 0) {
      console.log(`${num} - JACKPOT! 1 Million and a Yacht!`);
    } else if (num % 3 === 0) {
      console.log(` ${num} - Vacation!`);
    } else if (num % 5 === 0) {
      console.log(`${num} - $100,000 bonus!`);
    } else {
      console.log(`${num} - :(`);
    }
  });
}

awardBonuses();

/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
  smile: "😊",
  angry: "😠",
  party: "🎉",
  heart: "💜",
  cat: "🐱",
  dog: "🐕",
};

/* 
Problem 6:-
1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/

function emojifyWord(word) {
  if (word.endsWith(":") && word.startsWith(":")) {
    const name = word.slice(1, -1);
    return emojis[name] || name;
  } else {
    return word;
  }
}

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/

function emojifyPhrase(phrase) {
  return phrase
    .split(" ")
    .map((word) => emojifyWord(word))
    .join(" ");
}

// console.log(emojifyWord(":heart:"));
// console.log(emojifyWord(":flower:"));
// console.log(emojifyWord("elephant"));

// console.log(emojifyPhrase("I :heart: my :cat:"));
// console.log(emojifyPhrase("I :heart: my :elephant:"));

/* 
Problem 7:-
Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/
function sorting(str) {
  return str.split("").sort().join("");
}
function isAnagram(str1, str2) {
  const logic = sorting(str1) === sorting(str2);
  const len = str1.length === str2.length;
  if (logic && len) {
    return true;
  } else {
    return false;
  }
}

// console.log(isAnagram("allergy", "gallery"));
// console.log(isAnagram("treasure", "measure"));

/* We Come in Peace!  
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/

const title = ":htraE no od ot ffutS";
const messages = [
  "maerc eci yrT",
  "rewoT leffiE tisiV",
  "noom eht ot snamuh etacoleR",
  "egrahc ni stac tuP",
];

/* 
Problem 8:-
Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/

function reverseString(arr) {
  const split = arr.split(" ");
  const reversing = split.map((word) => {
    return word.split("").reverse().join("");
  });
  return reversing.join(" ");
}

/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/

function reverseStringsInArray(arr) {
  return messages.map((word) => reverseString(word));
}

// console.log(reverseString(title));
// console.log(reverseStringsInArray(messages));

/* 
Problem 9:-
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/
function reverse(str) {
  return str.split("").reverse().join("");
}
function isPalindrome(str) {
  if (str === reverse(str)) {
    return true;
  } else {
    return false;
  }
}

// Test your function
// console.log(isPalindrome("abba"));
// console.log(isPalindrome("civic"));
// console.log(isPalindrome("octopus"));
// console.log(isPalindrome("pumpkins"));
// console.log(isPalindrome("madam"));

/*  
Problem 10:-
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23";

function removeDupeChars(chars) {
  let result = "";
  for (let char of chars) {
    if (!result.includes(char)) {
      result += char;
    }
  }
  return result;
}

// console.log(removeDupeChars(password));

/* 
Problem 11:-
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/

function countChars(str) {
  const result = {};
  const low = str.toLowerCase().split(" ").join("");
  for (let char of low) {
    result[char] = (result[char] || 0) + 1;
  }
  return result;
}

// console.log(countChars("Peggy Porth"));

/*
Problem 12:-
Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/

const eggScrambleRecipe = [
  "🥓 bacon",
  "🥓 bacon",
  "🍳 eggs",
  "🫑 green peppers",
  "🧀 cheese",
  "🌶️ hot sauce",
  "🥓 bacon",
  "🥦 broccoli",
  "🧀 cheese",
  "🥦 broccoli",
  "🌶️ hot sauce",
];

function removeDupesFromArray(arr) {
  let newArr = [];
  for (let item of arr) {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  }
  return newArr;
}

function removeDupesFromArray(arr) {
  return [...new Set(arr)];
}

// console.log(removeDupesFromArray(eggScrambleRecipe));

/* 
Problem 13:-
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
  [39, 99, 76],
  89,
  98,
  [87, 56, 90],
  [96, 95],
  40,
  78,
  50,
  [63],
];

const kittyPrizes = [
  ["💰", "🐟", "🐟"],
  "🏆",
  "💐",
  "💵",
  ["💵", "🏆"],
  ["🐟", "💐", "💐"],
  "💵",
  "💵",
  ["🐟"],
  "🐟",
];

function flatten(arr) {
  return arr.flat();
}

function flatten(arr) {
  // initialize a new, empty array
  // loop through the passed in array and check - string or array?
  // if the item is string, push into the new array
  // if the item is an array, loop through it, pushing each item into the array
  // return new array

  const newArr = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      element.forEach((item) => newArr.push(item));
    } else {
      newArr.push(element);
    }
  });
  return newArr;
}

// console.log(flatten(kittyPrizes));
// console.log(flatten(kittyScores));

/*
Problem 14:-
Alex from Scrimba wants to know how many new students have attended 
Scrimba's weekly Town Hall event this year. 

He has an array of first-time attendees for each month of the year. 
Help him find the total number of attendees! Your function should
take in an array and return a number representing the total number
of new attendees. 

Example input: [1,2,3]
Example output: 6
 */

const studentCount = [50, 53, 61, 67, 60, 70, 78, 80, 80, 81, 90, 110];

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < studentCount.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// console.log(sumArray(studentCount));

/* 
Problem 15:-
Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/

const gameNightFood = {
  "🍕 pizza": 3,
  "🌮 tacos": 10,
  "🥗 salads": 7,
  "🍝 pasta": 5,
};

function findTheWinner(obj) {
  let maxVotes = 0;
  let winner = "";

  for (let food in obj) {
    if (obj[food] > maxVotes) {
      maxVotes = obj[food];
      winner = food;
    }
  }
  return `The winner is ${winner} with ${maxVotes} votes`;
}

// console.log(findTheWinner(gameNightFood));

import podcasts from "./data.js";

/* 
Problem 16:-
Find Free Podcasts 
We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 

Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
]
*/
// console.log(podcasts)
function getFreePodcasts(data) {
  return data
    .filter((podcast) => podcast.paid === false)
    .map((podcast) => ({
      title: podcast.title,
      rating: podcast.rating,
      paid: podcast.paid,
    }));
}
// console.log(getFreePodcasts(podcasts));

import products from "./data.js";

/*
Problem 17:-
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

function getSaleItems(data) {
  return data
    .filter((item) => item.type === "sweet")
    .map((candy) => {
      return {
        item: candy.item,
        price: candy.price,
      };
    });
}
// console.log(getSaleItems(products));

import shoppingCart from "./data.js";

/*  
Problem 18:-
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

function total(arr) {
  const some = arr.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
  return some.toFixed(2);
}

// console.log(total(shoppingCart));
