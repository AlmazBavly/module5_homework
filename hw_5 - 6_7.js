// Задание 6.
const arr = [1, 1, 1, 1];
let allEqual = true;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] !==[0]) {
      allEqual = false;
      break;
    }
}
console.log(allEqual);
