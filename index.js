function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  // if start and end values are equal, return
  if (fromN === toN) {
    return fromN;
  } else {
    return fromN + sum(fromN + 1, toN);
  }
}

module.exports = sum;

// sum(3 ,5)
//   3 + sum(4, 5)
//     4 + sum(5,5)
//     return 4 + 5
//   return 3 + 4 + 5
// return
