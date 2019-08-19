const express = require('express');
const app = express();

app.get('/', (req, res, nexxt) => {  
  res.send(`<h1>Home</h1><h3>Isn't this Homepage awesome?</h3><br><a href='/this-page'>Go to the other page</a>`);
});

app.get('/this-page', (req, res, next) => {
  res.send(`<h1>This is one cool page</h2><br>But it is time to <a href='/'>go back</a>`);
});

app.listen(3000, () => {
  console.log('This is running!')
});