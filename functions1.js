/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName() {
  const name = "Janna Almuqaisib";
  console.log(name);
}

printName();

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(birthYear) {
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;
  console.log(age);
}

printAge(2001);

/**
 * Task 3:
 * Create a function named `printAgeAndName`
 * - that takes a birth year and your name as parameters,
 * - and prints 'Hello NAME you are AGE years old' on the screen.
 * - Age = current year - birth
 */

function printAgeAndName(birthYear, name) {
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;
  console.log(`Hello ${name} you are ${age} years old`);
}

printAgeAndName(2001, "Janna Almuqaisib");

/**
 * Task 4:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(name, language) {
  if (language === "en") {
    console.log(`Hello ${name}`);
  } else if (language === "es") {
    console.log(`Hola ${name}`);
  } else if (language === "fr") {
    console.log(`Bonjour ${name}`);
  } else if (language === "tr") {
    console.log(`Merhaba ${name}`);
  } else {
    console.log("Please enter a valid language");
  }
}

printHello("Janna", "en");
printHello("Janna", "es");
printHello("Janna", "fr");
printHello("Janna", "tr");

/**
 * Task 5:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(x, y) {
  if (x > y) {
    console.log(x);
  } else if (y > x) {
    console.log(y);
  } else {
    console.log(`${x} and ${y} are equal`);
  }
}

printMax(10, 6);
printMax(3, 3);
