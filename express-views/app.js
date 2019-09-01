const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
  res.render('index');
});

personalInfo = {
  name: 'Alejandro',
  profession: 'Translation Engineer'
};

app.get('/about', (req, res, next) => {
  res.render('about', personalInfo);
});

app.listen(PORT);
