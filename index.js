/**
 * @Author: Ali
 * @Date:   2019-11-02T12:48:40+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-11-02T13:01:21+01:00
 */
const fetch = require('node-fetch');

const url = 'https://www.imdb.com/find?s=tt&ttype=ft&ref_=fn_ft&q='

function searchMovies(searchTerm) {
  fetch(`${url}${searchTerm}`)
  .then(res => res.text())
  .then( body => {
    console.log(body);
  })
}


searchMovies('star wars')
