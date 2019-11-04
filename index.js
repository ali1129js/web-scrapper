/**
 * @Author: Ali
 * @Date:   2019-11-02T12:48:40+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-11-03T22:18:13+01:00
 */

const express = require('express');
const scraper = require('./scraper');
const app = express()

const PORT = process.env.PORT || 3000

// /search/star wars

app.get('/', (req,res) => {
res.send('<h1>Hello</h1>')
})

app.get('/search/:title',  (req, res) => {
  scraper.searchMovies(req.params.title)
  .then( movies => console.log(movies)
  )
  console.log(req.params.title);
  console.log(re);
});


app.listen(PORT,()=>{
  console.log(` express server is running on port ${PORT}`);
})
