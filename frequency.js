/*
I: string of text
O: array of unique words and number of occurance 

Things to consider
=> capitalization is considered same word
=> adjust for posisble punctuations at the end of a word

This is a test. That is not a test. Test

word map
{
  this: 1,
  is: 2,
  a: 2,
  test: 3,
  that: 1,
  not: 1, 
}
=> sort by frequency and if same, sort alphabetically
*/

const sortFreq = (a, b) => {
  if (a[1] === b[1]) return 0
  return b[1] - a[1];
}

const wordfrequency = (str) => {
  const words = str.split(' ');
  const wordMap = {};
  const re = /[^a-z^0-9]/
  // create word map
  for (let i = 0; i < words.length; i++) {
    // consider uppercase
    let word = words[i].toLowerCase();
    // consider punctuation
    word = word.split(re)[0];
    if (wordMap[word]) wordMap[word]++;
    else wordMap[word] = 1;
  }

  const frequencies = Object.entries(wordMap);
  frequencies.sort((a, b) => {
    return sortFreq(a, b) || a[0].localeCompare(b[0]);
  })

  return frequencies.map((word) => word.join(' '));
}


let string1 = 'This is a test. That is not a test. Test'
console.log('should be [test 3, a 2, is 2, not 1, that 1, this 1]', wordfrequency(string1));
let string2 = 'From the moment the first immigrants arrived on these shores, generations of parents have worked hard and sacrificed whatever is necessary so that their children could have the same chances they had; or the chances they never had. Because while we could never ensure that our children would be rich or successful; while we could never be positive that they would do better than their parents, America is about making it possible to give them the chance. To give every child the opportunity to try. Education is still the foundation of this opportunity. And the most basic building block that holds that foundation together is still reading. At the dawn of the 21st century, in a world where knowledge truly is power and literacy is the skill that unlocks the gates of opportunity and success, we all have a responsibility as parents and librarians, educators and citizens, to instill in our children a love of reading so that we can give them the chance to fulfill their dreams.'
console.log(wordfrequency(string2))