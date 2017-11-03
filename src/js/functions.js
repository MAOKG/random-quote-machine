import $ from 'jquery';

$(document).ready(function() {
  var quote = '';
  var author = '';
  var colors = ['#8B0000', '#006400', '#00008B', '#000', '#B8860B'];
  function getQuotes() {
    var url = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';
    $.getJSON(url, function(json) {
      quote = json.quoteText;
      author = json.quoteAuthor;
      $('.quote').html('"' + quote + '"');
      $('.author').html('- ' + author);
      var index = Math.floor(Math.random() * 5);
      var color = colors[index];
      $('body').css('background-color', color);
      $('.quotes').css('color', color);
      $('.btn').css({ 'background-color': color, color: 'white' });
    });
  }
  getQuotes();
  $('#twitter_btn').on('click', function() {
    window.open('https://twitter.com/intent/tweet?text=' + '"' + quote + '"' + ' - ' + author + '&hashtags=quote');
  });
  $('#new_quote').on('click', function() {
    getQuotes();
  });
});
