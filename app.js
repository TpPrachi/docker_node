const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 5000;

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port || 5000, '0.0.0.0', function () {
  console.log(`Application listening on port ${port || 5000}!`);
});
