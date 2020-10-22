/*
You and your friends are all fans of the hit TV show ThroneWorld and like to discuss it on social media. Unfortunately, some of your friends don't watch every new episode the minute it comes out. Out of consideration for them you would like to obfuscate your status updates so as to keep them spoiler-free.

You settle on a route cipher, which is a type of transposition cipher. Given a message and integers r and c, to compute the route encryption of the message:

Write out the message row-wise in a grid with r rows and c columns
then read the message column-wise.

You are guaranteed that r * c == len(message).

Your task is to write a function that, given a message, r, and c, returns the route encryption of the message.

Example:

message = "One does not simply walk into Mordor", r = 6, c = 6

O n e   d o
e s   n o t
  s i m p l
y   w a l k
  i n t o  
M o r d o r

-> "Oe y Mnss ioe iwnr nmatddoploootlk r"

Other examples:

message = "1.21 gigawatts!", r = 5, c = 3
1 . 2
1   g
i g a
w a t
t s !

-> "11iwt. gas2gat!"

message = "1.21 gigawatts!", r = 3, c = 5 -> "1ga.it2gt1as w!"

Complexity analysis:

n: the length of the message

I: string, row and col count
O: string
C: none
E: none

create a matrix with row and col input
iterate through the string to place into matrix
rotate matrix 90 degrees, and iterate through to create output string

O n e   d o
e s   n o t
  s i m p l
y   w a l k
  i n t o  
M o r d o r

"One does not simply walk into Mordor"

(colI * C) + rowI 
message[(0 * 6) + 0]
message[(1 * 5) + 0]
message[()]

"Oe y Mnss ioe iwnr nmatddoploootlk r"
*/

// const routeCipher = (message, r, c) => {
//   let result = '';
//   for (let i = 0; i < c; i++) {
//     for (let j = 0; j < r; j++) {
//       result += message[(j * c) + (i)];
//     }
//   }
//   return result;
// }

/*
matrix[0][0]
matrix[1][0]
*/

// const routeCipher = (message, r, c) => {
//   let matrix = [];
//   let start = 0;
//   for (let i = 0; i < r; i++) {
//     let line = [];
//     for (let j = 0; j < c; j++) {
//       line.push(message[start]);
//       start++;
//     }
//     matrix.push(line)
//   }

//   let colIndex = 0;
//   let result = '';
//   while (colIndex < c) {
//     for (let k = 0; k < r; k++) {
//       result += matrix[k][colIndex]
//     }
//     colIndex++;
//   }
//   return result;
// }


/*
"One does not simply walk into Mordor"

O n e   d o
e s   n o t
  s i m p l
y   w a l k
  i n t o  
M o r d o r
(colIndex * C) + rowIndex

(rowIndex * C) + colIndex
message[(0 * 6) + 0 = 0]
message[(1 * 6) + 0 = 6]
message[(2 * 6) + 0 = 12]
...
message[8]
"Oe y Mnss ioe iwnr nmatddoploootlk r"
*/

const routeCipher = (message, r, c) => {
  result = '';
  for (let col = 0; col < c; col++) {
    for (let row = 0; row < r; row++) {
      result += message[(row * c) + col]
    }
  }
  return result;
}



const message1 = "One does not simply walk into Mordor";
const r1 = 6;
const c1 = 6;
console.log('should be Oe y Mnss ioe iwnr nmatddoploootlk r',routeCipher(message1, r1, c1))


const message2 = "1.21 gigawatts!";
const r2 = 5;
const c2 = 3;
const r3 = 3;
const c3 = 5;
console.log('should be: 11iwt. gas2gat!', routeCipher(message2, r2, c2))
console.log('should be: 1ga.it2gt1as w!', routeCipher(message2, r3, c3))









