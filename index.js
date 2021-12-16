//Address and port
const express = require('express');
const app = express();

const host = 'localhost';
const port = 8000;
app.get('/cal', function (req, res) {
  if (req.query.func === 'add') {
    let sum = Number(req.query.a) + Number(req.query.b);
    res.send('Addition is: ' + sum).status(200);
  }
  if (req.query.func === 'subtract') {
    let sub = Number(req.query.a) - Number(req.query.b);
    res.send('Subtraction is: ' + sub);
  }
});
app.post('/cal', function (req, res) {
  console.log(req.query);
  if (req.query.func === 'multiple') {
    let mul = Number(req.query.a) * Number(req.query.b);
    res.send('Multiplication is: ' + mul).status(200);
  }
  if (req.query.func === undefined) {
    let div = Number(req.query.a) / Number(req.query.b);
    res.send('Division is: ' + div).status(200);
  }
});
app.listen(8000, function () {
  console.log('port active at 8000');
});
