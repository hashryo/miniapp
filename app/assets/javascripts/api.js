const API_KEY = '2fd1b1b9bd432df981ffca3980d4b3fc';

$(function() {
  $('.prefectures').on('mouseover', function(e) {
    var cityName = $(this).text()
    $.ajax('http://api.openweathermap.org/data/2.5/weather?APPID=' + API_KEY + '&q=' + cityName)

      .done(function(data) {
        $('.result-city-name').text(data.name);
        $('.result-temp').text(Math.round(data.main.temp - 273));
        $('.result-weather').text(data.weather[0].main);
      })
      .fail(function(data) {
        alert('Something wrong occurred.');
      });
    e.preventDefault();
  });
});