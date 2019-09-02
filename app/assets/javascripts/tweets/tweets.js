const API_KEY = '2fd1b1b9bd432df981ffca3980d4b3fc';

$(function() {
  $('.prefectures').on('mouseover', function(e) {
    var cityName = $(this).text()
    $.ajax('http://api.openweathermap.org/data/2.5/weather?APPID=' + API_KEY + '&q=' + cityName)

    .done(function(data) {
      $('.result-city-name').text(data.name);
      $('.result-temp').text(`${Math.round(data.main.temp - 273)} ℃`);
      $('.result-weather').text(data.weather[0].main);
      if (data.weather[0].main == 'Clouds'){
        $('.result-icon').append(`<i class="fa fa-cloud fa-4x"></i>`);   
      }else if (data.weather[0].main == 'Rain'){
        $('.result-icon').append(`<i class="fa fa-umbrella fa-4x"></i>`);
      }else if (data.weather[0].main == 'Clear'){
        $('.result-icon').append(`<i class="fa fa-sun-o fa-4x"></i>`);
      }else if (data.weather[0].main == 'Snow'){
        $('.result-icon').append(`<i class="fa fa-asterisk fa-4x"></i>`);
      }else if (data.weather[0].main == 'Thunderstorm'){
        $('.result-icon').append(`<i class="fa fa-umbrella fa-4x"></i>`);
      }else if (data.weather[0].main == 'Drizzle'){
        $('.result-icon').append(`<i class="fa fa-umbrella fa-4x"></i>`);
      }

    })
    .fail(function(data) {
      alert('Something wrong occurred.');
    });
    e.preventDefault();
  });

  $('.prefectures').on('mouseout', function(e) {
    $(this).removeClass("active");
    $(".result-city-name").hide();
    $(".result-temp").hide();
    $(".result-weather").hide();
    $('.result-icon').children().remove();
  });

  $('.prefectures').on('mouseover', function(e) {
    $(this).addClass("active");
    $(".result-city-name").show();
    $(".result-temp").show();
    $(".result-weather").show();
  });
  
  $('.user').hide();
  $('.ranking_title').on('mouseover',function(e) {
    $('.user').fadeIn(3000);
  });

});