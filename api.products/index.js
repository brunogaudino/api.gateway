const app = require('express')();

const products = [
  {
    "name": "iPhone x",
    "year": "2020"
  },
  {
    "name": "Samsung Android X2",
    "year": "2025"
  },
  {
    "name": "Moto Gx Android XPTO",
    "year": "2019"
  }
];

app.get('/products', (req, res) => res.send(products));

app.listen(3002, () => console.log(`Products API listening on port 3002!`));