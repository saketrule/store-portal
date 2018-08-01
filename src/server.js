const express = require('express')
var pg = require("pg")
const app = express()

// Saket : I have temporarily made the src folder static for dev purposes
// Later add public folder for serving static files
app.use(express.static(__dirname + '/public'));

// Connecting to Database
var connectionString = "postgres://postgres:apple@localhost:5432/postgres";


app.get('/', function (req, res) {
  // pg.connect has been hard depreciated for version 7
  // https://stackoverflow.com/questions/45174120/pg-connect-not-a-function
  // need to use pools - clearly stuff like this will keep happening for nodejs :( - should resort to a python backend
  //var pool = new pg.Pool()
  pg.connect(connectionString,function(err,client,done) {
    if(err){
      console.log("cannot connect to database" + err);
      res.status(400).send(err);
    }
    client.query('SELECT * FROM student where id = $1', [1], function(err,result) {
      done(); // this closes the connection
      if(err){
        console.log(err);
        res.status(400).send(err);
      }
      //res.status(200).send(result.rows);
      });
  });
  res.sendFile('index.html', {root: __dirname })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
