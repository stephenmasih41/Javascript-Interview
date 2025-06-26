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
console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"));
console.log(panic("Hello"));

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

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));
