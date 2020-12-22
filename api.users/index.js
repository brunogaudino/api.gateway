const app = require('express')();

const users = [
  {
    "name": "Tony Stark"
  },
  {
    "name": "Thor"
  },
  {
    "name": "Peter Parker"
  }
];

app.get('/users', (req, res) => res.send(users));

app.listen(3001, () => console.log(`Users API listening on port 3001!`));