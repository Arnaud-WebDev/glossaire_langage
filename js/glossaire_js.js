/* let tab = ['Pommes', 'Fraises', 'Poires'];

function findProduct() {
  for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
    const foundProduct = tab.find((p) => p == tab[i]);
    console.log(foundProduct);
  }
}

findProduct(); */

/* let fish = ['piranha', 'barracuda', 'cod', 'eel'];

// Print out each item in the array
fish.forEach((individualFish) => {
  console.log(individualFish);
});
// Loop through the length of the array
for (let i = 0; i < fish.length; i++) {
  console.log(fish[i]);
}
// Pluralize all items in the fish array
let pluralFish = fish.map((individualFish) => {
  return `${individualFish}s`;
});

console.log(pluralFish);

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

const passengers = ['Will Alexander', 'Sarah Kate', 'Audrey Simon', 'Tao Perkington'];

for (let passenger of passengers) {
  console.log('Embarquement du passager ' + passenger);
}
 */

const array1 = [1, 2, 3, 4];
console.log(array1);
const totalArray1 = array1.reduce((previousValue, currentValue) => previousValue + currentValue);
//totalArray1 = 1 + 2 + 3 + 4 = 10
console.log(totalArray1);
