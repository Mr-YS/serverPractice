var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send(
    '<!doctype html>' +
    '<html>' +
    '<body>' +
    '<h1>Hello, world!</h1>' +
    '<p>장차 내 agario 서버가 될 페이지</p>' +
    '</body>' +
    '</html>'
  );
});



app.listen(3000);
