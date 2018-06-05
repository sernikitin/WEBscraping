var request = require('request');
var cheerio = require('cheerio');

var url = "https://stackoverflow.com/questions/34353234/scrape-html-element-with-jquery";

request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body)

   
   
    var content = $("body").find(".post-text").text();
    //var title = $('video-title').text();
//var freeArticles = $('.central-featured-lang.lang1 a small').text()

    console.log('URL: ' + url);
    console.log('Title: ' + content);
   // console.log('EN articles: ' + freeArticles);
  }
  else {
    console.log("We’ve encountered an error: " + error);
  }
});