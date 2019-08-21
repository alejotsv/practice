const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res, nexxt) => {  
  res.send(`<h1>Home</h1><h3>Isn't this Homepage awesome?</h3><br><a href='/this-page'>Go to the other page</a><h2>Or maybe you want to see a really cool <a href='/cat'>cat page</a></h2>`);
});

app.get('/this-page', (req, res, next) => {
  res.send(`<h1>This is one cool page</h2><br>But it is time to <a href='/'>go back</a>`);
});

app.get('/cat', (req, res, next) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Cat</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <h1>Cat</h1>
        <p><a href='/'>Home</a></p>
        <img src="/images/cool-cat.jpg" />
      </body>
    </html>
  `)
});

app.listen(3000, () => {
  console.log('This is running!')
});