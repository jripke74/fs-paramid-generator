function pyramid(patternChar, numOfRows, isInverted) {
  let level = "";
  if (isInverted === false) {
    for (let i = 1; i <= numOfRows; i++) {
      level += " ".repeat(numOfRows - i) + patternChar.repeat(2 * i - 1) + "\n";
    }
  } else {
    for (let i = numOfRows; i >= 1; i--) {
      level += " ".repeat(numOfRows - i) + patternChar.repeat(2 * i - 1) + "\n";
    }
  }
  return "\n" + level;
}

console.log(pyramid("o", 4, false));

//    o
//   ooo
//  ooooo
// ooooooo

console.log(pyramid("o", 4, true));

// ooooooo
//  ooooo
//   ooo
//    o