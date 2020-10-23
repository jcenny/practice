/*
Input: "([)]"
Output: false

( [ ) ]


( [ ) ]
I: string of brackets
O: boolean to check validity of brackets
C: none
E: one bracket => false

create a stack, 
iterate through input and add to stack if it's an open parantheses,
top is the most recent addition
if we hit a closed parentheses, pop off if matching with top, return false if not
reassign top to be last of the stack
if stack is not empty return false
*/

var isValid = function(s) {
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  let stack = [];
  let top;
  let current;
  for (let i = 0; i < s.length; i++) {
    current = s[i];
    top = stack.length - 1;
    if (brackets[current]) {
      stack.push(current);
    } else if (stack.length && brackets[stack[top]] === current) {
      stack.pop()
    } else {
      return false;
    }
  }

  if (stack.length) return false;
  return true;
};