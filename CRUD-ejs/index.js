const express = require('express'); //import express
const app = express(); //use express
const PORT = 3000; //define port
const path = require('path');
const mongoose = require('mongoose'); //import mongoose
mongoose.connect('mongodb://127.0.0.1:27017/test');

app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

app.get('/home', (req, res) => {
  res.send(`Welcome home`);
});
