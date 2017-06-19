var express = require('express');

module.exports = (app) => {
  app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : './public/html'})
  })
  
  app.get('/home', (req, res)=>{
    res.sendFile('home.html', {root : './public/html'})
  })
  
  app.use(express.static('public'));

}