const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js app running in Minikube by Utkarsh!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
