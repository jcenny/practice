/*
Input:
words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]

Input:
words = ["What","must","be","acknowledgment","shall","be"]
maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be",
             because the last line must be left-justified instead of fully-justified.
             Note that the second line is also left-justified becase it contains only one word.


Input:
words = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"]
maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]

I: Array of words, max width = character count
O: array of phrases that are justfied 
C: if one word, should be justified left, if last line should be justified left
E: [] => []

iterate through words, 
check char count to not exceed max, 
if does not, countine to add char count with next word 
if char count exceeds, get current char count and determine amount of spaces to reach max
distribute evenly between words => total spaces needed = (max - current) 
space between word = spaces needed / word count - 1 
push line with correct spaces into result
*/

var fullJustify = function(words, maxWidth) {
  let result = [];
  let charCount = 0;
  let line = [];
  for (let i = 0; i < words.length; i++) {
    let count = words[i].length;
    if (charCount < maxWidth) {
      charCount += count;
      line.push(words[i]);
    }
  }
};

const test1 = ["This", "is", "an", "example", "of", "text", "justification."];
const test2 = ["What","must","be","acknowledgment","shall","be"];
const test3 = ["Science","is","what","we","understand","well","enough","to","explain",
"to","a","computer.","Art","is","everything","else","we","do"];

console.log('should be ["This    is    an", "example  of text", "justification.  "]: ', fullJustify(test1, 16))
console.log('should be ["What   must   be", "acknowledgment  ", "shall be        "]: ', fullJustify(test2, 16));
console.log('should be : ["Science  is  what we", "understand      well", "enough to explain to", "a  computer.  Art is", "everything  else  we","do                  "]', fullJustify(test3, 16))