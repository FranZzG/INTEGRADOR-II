const productsData = [
  {
    id: 1,
    name: 'Harina Comun',
    cost: 12,
    category: 'futbol',
    cardImg: './assets/img/products/comun.jpg',
  },
  {
    id: 2,
    name: 'Harina de Coco',
    cost: 120,
    category: 'futbol',
    cardImg: './assets/img/products/coco.jpg',
  },
  {
    id: 3,
    name: 'Harina Integral',
    cost: 140,
    category: 'futbol',
    cardImg: './assets/img/products/integral.jpg',
  },
  {
    id: 4,
    name: 'Brocoli',
    cost: 200,
    category: 'autos',
    cardImg: './assets/img/products/brocoli.jpg',
  },
  {
    id: 5,
    name: 'Tomate',
    cost: 220,
    category: 'autos',
    cardImg: './assets/img/products/tomate.jpg',
  },
  {
    id: 6,
    name: 'Lechuga',
    cost: 300,
    category: 'autos',
    cardImg: './assets/img/products/lechuga.jpg',
  },
  {
    id: 7,
    name: 'Frutilla',
    cost: 250,
    category: 'politicos',
    cardImg: './assets/img/products/frutilla.jpg',
  },
  {
    id: 8,
    name: 'Manzana',
    cost: 200,
    category: 'politicos',
    cardImg: './assets/img/products/manzana.jpg',
  },
  {
    id: 9,
    name: 'Pera',
    cost: 130,
    category: 'politicos',
    cardImg: './assets/img/products/pera.jpg',
  },
  {
    id: 10,
    name: 'Azucar Mascabo',
    cost: 220,
    category: 'musica',
    cardImg: './assets/img/products/mascabo.jpg',
  },
  {
    id: 11,
    name: 'Edulcorante',
    cost: 340,
    category: 'musica',
    cardImg: './assets/img/products/edulcorante.png',
  },
  {
    id: 12,
    name: 'Stevia',
    cost: 450,
    category: 'musica',
    cardImg: './assets/img/products/stevia.jpg',
  },
  {
    id: 13,
    name: 'Barras de Cereal',
    cost: 50,
    category: 'peliculas',
    cardImg: './assets/img/products/barras.jpg',
  },
  {
    id: 14,
    name: 'Galletas Integrales x100gr',
    cost: 200,
    category: 'peliculas',
    cardImg: './assets/img/products/galletas.jpg',
  },
  {
    id: 15,
    name: 'Chocolate 100%',
    cost: 500,
    category: 'peliculas',
    cardImg: './assets/img/products/chocolate.jpg',
  },
];

// seccion VER MAS

const splitProducts = size => {
let dividedProducts = [];
for (let i = 0; i < productsData.length; i += size) {
  dividedProducts.push(productsData.slice(i, i + size));
}
return dividedProducts;
};

// DIVICION DE PRODUCTOS
const productsController = {
dividedProducts: splitProducts(6),
nextProductsIndex: 1,
productsLimit: splitProducts(6).length,
};

// console.log(productsController);