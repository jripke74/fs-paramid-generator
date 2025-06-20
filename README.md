# fs-paramid-generator

In this lab you'll build a pyramid generator.

You'll take a number as input and generate a pyramid with that many levels using a loop.

Build a Pyramid Generator
Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

1.  You should have a function named pyramid that takes three arguments.
2.  The first argument should be a string representing the pattern character to repeat in your pyramid.
3.  The second argument should be an integer representing the number of rows in the pyramid.
4.  The third argument should be a Boolean value.
5.  The pyramid function should return a string in which the pattern character is repeated and arranged to form a pyramid having the vertex facing upwards when the third argument is false.
6.  When the third argument is true the pyramid should have the vertex facing downwards.
7.  The vertex row should have a single pattern character, and each other row should have two pattern characters more than the previous one.
8.  Each row should start with a number of spaces sufficient to put the center character of each row in the same column.
9.  The pyramid should start and end with a newline character.

For example, calling pyramid("o", 4, false) should give this output:


   o
  ooo
 ooooo
ooooooo
