// Задание 8.
let myMap = new Map();
myMap.set('X1', 'Y1');
myMap.set('X2', 'Y2');
myMap.set('X3', 'Y3');

for (let [key, value] of myMap) {
  console.log(`Ключ -${key}, Значение - ${value}`);
}
