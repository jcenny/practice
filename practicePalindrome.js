/*
Brute force
c c c a b a
i
  j

c c c a b a
*/


const findCenter = (s, index) => {
  let left = index;
  let right = index + 1;
  while (s[left] === s[right] && right < s.length) {
    right++;
  }
  return [left, --right];
}

const expandAroundCenter = (s, left, right) => {
  left -= 1;
  right += 1;
  while (s[left] === s[right] && left >= 0 && right < s.length) {
    left--;
    right++;
  }
  return [++left, --right];
}

const longestPalindrome = (s) => {
  let start = 0;
  let end = 0;
  let center, expand;
  for (let i = 0; i < s.length; i++) {
    center = findCenter(s, i);
    expand = expandAroundCenter(s, center[0], center[1]);
    let left = expand[0];
    let right = expand[1];
    if (end - start < right - left) {
      start = left;
      end = right;
    }
    i = center[1];    
  }
  return s.substring(start, end + 1);
}

const isPalindrome = (s) => {
  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

const bruteForce = (s) => {
  let max = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j <= s.length; j++) {
      let current = s.substring(i, j);
      if (isPalindrome(current)) {
        if (max.length < current.length) {
          max = current;
        }
      }   
    }
  }
  return max;
}

// console.log('ccc: ', bruteForce('cccaba'))
// console.log('bab: ', bruteForce('babad'))
// console.log('bb: ', bruteForce('cbbd'))

console.log('ccc: ', longestPalindrome('cccaba'))
console.log('bab: ', longestPalindrome('babad'))
console.log('bb: ', longestPalindrome('cbbd'))