let tab = ['Pommes', 'Fraises', 'Poires'];

function findProduct() {
  for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
    const foundProduct = tab.find((p) => p == tab[i]);
    console.log(foundProduct);
  }
}

findProduct();
