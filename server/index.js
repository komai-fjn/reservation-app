const express = require('express');
const mongoose = require("mongoose");
// const { getModeForUsageLocation } = require('typescript');
const config = require('./config/dev')
const FakeDB = require('./fake-db')

const productRoutes = require('./routes/products')

mongoose
  .connect(
    config.DB_URI
  )
  .then(() =>
  {
    console.log("Connected!");
    const fakeDb = new FakeDB();
    fakeDb.init();
  }
  );

const app = express()

app.use('/api/v1/products', productRoutes)

// app.get('/products', function(req, res){
//   res.json({'success':true})
// })

const PORT= process.env.PORT || '3001';

app.listen(PORT, function(){
  console.log('I\'m running!')
})

// mongodb+srv://test:<password>@cluster0.lldybhj.mongodb.net/?retryWrites=true&w=majority
