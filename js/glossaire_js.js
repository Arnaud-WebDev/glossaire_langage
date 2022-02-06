/* let tab = ['Pommes', 'Fraises', 'Poires'];

function findProduct() {
  for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
    const foundProduct = tab.find((p) => p == tab[i]);
    console.log(foundProduct);
  }
}

findProduct(); */

const array1 = [1, 4, 9, 16];
const map1 = array1.map((x) => x * 2);
console.log(map1);
//Le resultat dans la console sera : [2, 8, 18, 32]
