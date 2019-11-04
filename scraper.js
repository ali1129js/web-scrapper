/**
 * @Author: Ali
 * @Date:   2019-11-02T13:16:34+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-11-04T08:09:46+01:00
 */
 const fetch = require('node-fetch');
 const cheerio = require('cheerio');

 const url = 'https://www.imdb.com/find?s=tt&ttype=ft&ref_=fn_ft&q='


 function searchMovies(searchTerm) {
    console.log("Searching for :",searchTerm);
   return
   fetch(`${url}${searchTerm}`)
   .then(res => res.text())
   .then( body => {

     const movies = []

     const $ = cheerio.load(body)
     // now we access elements from $
     $('.findResult').each(function (i,element) {
       const $element = $(element)
       const $image = $element.find('td a img')
       const $title = $element.find('td.result_text a')

       const movie = {
         image:$image.attr('src'),
         title:$title.text()
       }
       movies.push(movie)
     })
     return movies
   })
 }
 module.exports = {
  searchMovies
 }


/*
const res = await fetch(url)
const body = await res.text()
console.log(body);
*/
