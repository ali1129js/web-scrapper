/**
 * @Author: Ali
 * @Date:   2019-11-04T07:48:08+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-11-04T12:10:50+01:00
 */
const cheerio = require('cheerio');
const request  = require('request ');

const url = `https://wallhaven.cc/search?&categories=111&purity=100&sorting=relevance&order=desc&q=cars`

request(url,(error,res,html) => {
  if(!error && res.statusCode === 200){
    console.log(html)
  }
})




// const getPics = async () => {
//   const pics = []
//   const res = await fetch(url)
//   const body = await res.text()
//
//   const $ = cheerio.load(body)
//
//   $('.preview').each((i,pic) => {
//
//     const $item=$(item)
//     const name = $item.find('img.lazyload').text()
//     console.log(name);
//   })
// }
// getPics()
