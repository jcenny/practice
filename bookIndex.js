function createIndex(book) {
  let pageMap = {};
  for (let page in book) {
    const sentence = book[page];
    sentence.split(' ').forEach((word) => {
      if (pageMap[word]) {
        pageMap[word]['pages'].add(page);
        pageMap[word]['freq']++;
      } else pageMap[word] = {
        pages: new Set(page),
        freq: 1,
      };
    })
  }
  return pageMap;
}

function printIndex(book) {
  const pageMap = createIndex(book);
  console.log(Object.entries(pageMap).map((entry) => [entry[0], entry[1].pages]))
}

function printInOrderOfPopularity(book) {
  const pageMap = createIndex(book);
  const entries = Object.entries(pageMap).sort((a, b) => {
    return b[1].freq - a[1].freq;
  })
  console.log(entries)
}

const input1 = {
  1: 'the cat likes to play with string',
  2: 'the dog likes to play with the ball',
}

/* EXPECTED OUTPUT
Index of what pages each word appears on (no specific order of words)
the: [1, 2]
cat: [1]
dog: [2]
likes: [1, 2]
to: [1, 2]
play: [1, 2]
with: [1, 2]
string: [1]
ball: [2]
*/
console.log(printIndex(input1));

/* EXPECTED OUTPUT
Popularity index of words (no specific order within group)
the: [1, 2]      (3 times)
likes: [1, 2]    (2 times)
play: [1, 2]    (2 times)
with: [1, 2]    (2 times)
to: [1, 2]        (2 times)
cat: [1]          (1 time)
dog: [2]         (1 time)
string: [1]      (1 time)
ball: [2]         (1 time)
*/
console.log(printInOrderOfPopularity(input1));

/*************************************** CLASS ****************************************/
class BookPagesIndex {
  constructor(book) {
    this.pageMap = {};
    this.createIndex(book);
  }

  createIndex(book) {
    for (let page in book) {
      const sentence = book[page];
      sentence.split(' ').forEach((word) => {
        if (this.pageMap[word]) {
          this.pageMap[word]['pages'].add(page);
          this.pageMap[word]['freq']++;
        } else this.pageMap[word] = {
          pages: new Set(page),
          freq: 1,
        };
      })
    }
  }

  printIndex() {
    console.log(Object.entries(this.pageMap).map((entry) => [entry[0], entry[1].pages]))
  }

  printInOrderOfPopularity() {
    const entries = Object.entries(this.pageMap).sort((a, b) => {
      return b[1].freq - a[1].freq;
    })
    console.log(entries)
  }
}

const newBook = new BookPagesIndex(input1);
newBook.printIndex();
newBook.printInOrderOfPopularity();