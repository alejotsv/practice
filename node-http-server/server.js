const http = require('http');
const server = http.createServer( (req, res) => {
  console.log(`Someone has requested ${req.url}`);

  if (req.url === '/'){
    res.write('This is my page!');
    res.end();
  } else {
    res.write('Sorry, dude. Totally a 404');
    res.end();
  }
});

server.listen(3000);