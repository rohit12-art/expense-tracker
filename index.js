const express = require('express')
const app = express();
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path');

dotenv.config({path:'./config.env'});
const PORT = process.env.PORT  || 5000

//use middleware
app.use(cors());
app.use(express.json());


// use database
const conn = require('./db/connection');

//using routes
app.use(require('./routes/route'));

//server production assets
app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})