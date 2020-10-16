/*
c c c a b a
i
    j
found center ccc [0, 2]

c c c a b a
i    
      j
expand center, return center [0, 2]
*/

const findCenter = (s, index) => {
  let left = index;
  let right = index + 1;
  while (s[left] === s[right] && right < s.length) {
    right++;
  }
  return [left, --right];
};

const expandAroundCenter = (s, left, right) => {
  left -= 1;
  right += 1;
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return [++left, --right]
};

const longestPalindrome = (s) => {
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    let center = findCenter(s, i);
    let expand = expandAroundCenter(s, center[0], center[1]);
    let left = expand[0];
    let right = expand[1];
    if (right - left > end - start) {
      start = left;
      end = right;
    }
    // start index after center end
    i = center[1];
  }
  return s.substring(start, end + 1);
}

const isPalindrome = (s) => {
  let j = 0;
  let k = s.length - 1;
  while (j <= k) {
    if (s[j] === s[k]) {
      j++;
      k--;
    } else {
      return false;
    }
  }
  return true;
}

const bruteForce = (s) => {
  let max = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j <= s.length; j++) {
      let string = s.substring(i, j);
      if (isPalindrome(string)) {
        if (string.length > max.length) {
          max = string;
        }
      }
    }
  }
  return max;
}

console.log('ccc: ', bruteForce('cccaba'))
console.log('bab: ', bruteForce('babad'))
console.log('b: ', bruteForce('b'))

console.log('ccc: ', longestPalindrome('cccaba'))
console.log('bab: ', longestPalindrome('babad'))
console.log('bb: ', longestPalindrome('cbbd'))