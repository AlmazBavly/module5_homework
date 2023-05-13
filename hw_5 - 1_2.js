// Задание 1.
let input = prompt('Введите значение:');
let number = +input;

if (isNaN(number)) {
  console.log('Упс, кажется, вы ошиблись');
} else if (typeof number === 'number') {
  if (number % 2 === 0) {
    console.log(number + ' четное');
  } else {
    console.log(number + ' нечетное');
  }
}

// Задание 2.
let x = prompt("Введите значение переменной x:");

if (typeof x === "number") {
  console.log("x — число");
} else if (typeof x === "string") {
  console.log("x — строка");
} else if (typeof x === "boolean") {
  console.log("x — логический тип");
} else {
  console.log("Тип x не определен");
}
