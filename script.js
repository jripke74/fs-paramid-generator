function pyramid(character, numOfRows, isInverted) {
  let level = "";
  if (isInverted === false) {
    for (let i = 1; i <= numOfRows; i++) {
      level += " ".repeat(numOfRows - i) + character.repeat(2 * i - 1) + "\n";
    }
  } else {
    for (let i = rows; i >= 1; i--) {
      level += " ".repeat(numOfRows - i) + character.repeat(2 * i - 1) + "\n";
    }
  }
  return "\n" + level;
}

console.log(pyramid("o", 4, false));
