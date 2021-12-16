// //Address and port
// const express = require('express');
// const app = express();

// const host = 'localhost';
// const port = 8000;
// app.get('/cal', function (req, res) {
//   if (req.query.func === 'add') {
//     let sum = Number(req.query.a) + Number(req.query.b);
//     res.send('Addition is: ' + sum).status(200);
//   }
//   if (req.query.func === 'subtract') {
//     let sub = Number(req.query.a) - Number(req.query.b);
//     res.send('Subtraction is: ' + sub);
//   }
// });
// app.post('/cal', function (req, res) {
//   console.log(req.query);
//   if (req.query.func === 'multiple') {
//     let mul = Number(req.query.a) * Number(req.query.b);
//     res.send('Multiplication is: ' + mul).status(200);
//   }
//   if (req.query.func === undefined) {
//     let div = Number(req.query.a) / Number(req.query.b);
//     res.send('Division is: ' + div).status(200);
//   }
// });
// app.listen(8000, function () {
//   console.log('port active at 8000');
// });

const res = require('express/lib/response');
var http = require('http');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var queryData = url.parse(request.url, true).query;
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  console.log(queryData);
  if (queryData.func === 'add') {
    const sum = Number(queryData.a) + Number(queryData.b);
    // user told us their name in the GET request, ex: http://host:8000/?name=Tom
    response.end('Addition is: ' + sum);
  } else if (queryData.func === 'subtract') {
    const sub = Number(queryData.a) - Number(queryData.b);
    // user told us their name in the GET request, ex: http://host:8000/?name=Tom
    response.end('Subtraction is: ' + sub);
  } else if (queryData.func === 'multiple') {
    const mul = Number(queryData.a) * Number(queryData.b);
    response.end('Multiplication is: ' + mul);
  } else if (queryData.func === undefined) {
    const div = Number(queryData.a) / Number(queryData.b);
    response.end('Division is: ' + div);
  }
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);
