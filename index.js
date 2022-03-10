const express = require('express');
const morgan = require('morgan');
const app = express();
// const postgres = require('postgres');
const path = require('path');
const { addPage, editPage, main, userList, userPages, wikiPage } = require('./views')

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "./public")));

// const test = app.use(express.static(__dirname + '/views/stylesheets))


app.use(express.urlencoded({ extended : false}));  //parsing body
// app.use(express.json());  //parsing json

app.get('/', (req, res) => {
  res.send(main());
});


const PORT = 1337;

app.listen(PORT, () => {
  console.log(`Port open : ${PORT}`);
})

