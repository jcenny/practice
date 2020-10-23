function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

const shuffle = (arr) => {
  if (arr.length <= 1) return;
  for (let chosen = 0; chosen < arr.length - 1; chosen++) {
    const random = getRandom(chosen, array.length - 1)
    if (random !== chosen) {
      const temp = arr[chosen];
      arr[chosen] = arr[random];
      arr[random] = temp;
    }
  }
}

/*
a b c d e
i
      j

d b c a e
      i
        j
*/