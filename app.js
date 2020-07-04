const express = require('express');
const app = express();
const router = express.Router();
// const AWS = require('aws-sdk');
// const uuid = require('uuid');

// AWS.config = {
//   accessKeyId: 'AKIAI52YBKRMVODPRSHQ',
//   secretAccessKey: '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',
//   region: 'us-east-1',
//   signatureVersion: 'v4',
// };

// Set the region 
// AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
// var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

// var params = {
//   TableName: 'CUSTOMER_LIST',
//   Item: {
//     'CUSTOMER_ID' : { S: '001' },
//     'CUSTOMER_NAME' : { S: 'Richard Roe' }
//   }
// };

// Call DynamoDB to add the item to the table
// ddb.putItem(params, function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data);
//   }
// });

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
