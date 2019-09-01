const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {  
  res.sendFile(__dirname + '/views/home-page.html');
});

app.get('/this-page', (req, res, next) => {
  res.send(`<h1>This is one cool page</h2><br>But it is time to <a href='/'>go back</a>`);
});

app.get('/cat', (req, res, next) => {
  res.sendFile(__dirname + '/views/cat-page.html')
});

app.listen(3000, () => {
  console.log('This is running!')
});