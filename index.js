//create and set up the express server.
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db");
const model = require("./Models");
const approute = require("./routes/adminroutes");


const app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', approute);
 //require("./routes/adminroutes")(app);






//default welcome page route
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  model.db.sync({alter:true});

  //test DB
db.authenticate().then(() => {
  console.log('Database connected successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});


app.listen(9000,()=>{
    console.log('app listening at http://localhost:9000')
}) 


