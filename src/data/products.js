const productsData = [
  {
    id: 1,
    name: 'react',
    title: 'React shirt',
    basePrice: 20,
    colors: ['blue', 'red', 'green'],
    sizes: [
      { id: 1, name: 'S', additionalPrice: 0 },
      { id: 2, name: 'M', additionalPrice: 5 },
      { id: 3, name: 'L', additionalPrice: 6 },
      { id: 4, name: 'XL', additionalPrice: 8 },
    ],
  },
  {
    id: 2,
    name: 'kodilla',
    title: 'Kodilla shirt',
    basePrice: 25,
    colors: ['white', 'black', 'red'],
    sizes: [
      { id: 1, name: 'S', additionalPrice: 0 },
      { id: 2, name: 'M', additionalPrice: 2 },
      { id: 3, name: 'L', additionalPrice: 3 },
      { id: 4, name: 'XL', additionalPrice: 4 },
    ],
  },
];

export default productsData;
