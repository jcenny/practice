var isPalindrome = function(x) {
  let s = x.toString();
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
      if (s[i] !== s[j]) return false;
      i++;
      j--;
  }
  return true;
};

var isPalindome = function(x) {
  let s = s.toString();
  return s === s.split('').reverse().join('');
}

/* math solution
1221 
revert => 1
x => 122
revert => 10 + 2 = 12
x => 12

12321
revert => 1
x => 1232
revert => 10 + 2 = 12
x => 123
revert => 120 + 3 => 123
x => 12

*/
var isPalindrome = function(x) {
  if (x === 0) return true;
  if (x < 0 || x % 10 === 0) return false;
  let revert = 0;
  while (x > revert) {
    revert = revert * 10 + x % 10;
    x = Math.floor(x/10);
  }
  return x === revert || x === Math.floor(revert/10);
}