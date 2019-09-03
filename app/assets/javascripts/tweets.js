const API_KEY = '2fd1b1b9bd432df981ffca3980d4b3fc';

$(function() {
  $('.contents_row__left__content_post__prefectures').on('mouseover', function(e) {
    var cityName = $(this).text()
    $.ajax('http://api.openweathermap.org/data/2.5/weather?APPID=' + API_KEY + '&q=' + cityName)

    .done(function(data) {
      $('.contents_row__weather__result-city-name').text(data.name);
      $('.contents_row__weather__result-temp').text(`${Math.round(data.main.temp - 273)} ℃`);
      $('.contents_row__weather__result-weather').text(data.weather[0].main);
      if (data.weather[0].main == 'Clouds'){
        $('.contents_row__weather__result-icon').append(`<i class="fa fa-cloud fa-4x"></i>`);   
      }else if (data.weather[0].main == 'Rain'){
        $('.contents_row__weather__result-icon').append(`<i class="fa fa-umbrella fa-4x"></i>`);
      }else if (data.weather[0].main == 'Clear'){
        $('.contents_row__weather__result-icon').append(`<i class="fa fa-sun-o fa-4x"></i>`);
      }else if (data.weather[0].main == 'Snow'){
        $('.contents_row__weather__result-icon').append(`<i class="fa fa-asterisk fa-4x"></i>`);
      }else if (data.weather[0].main == 'Thunderstorm'){
        $('.contents_row__weather__result-icon').append(`<i class="fa fa-umbrella fa-4x"></i>`);
      }else if (data.weather[0].main == 'Drizzle'){
        $('.contents_row__weather__result-icon').append(`<i class="fa fa-umbrella fa-4x"></i>`);
      }
    })
    .fail(function(data) {
      alert('Something wrong occurred.');
    });
    e.preventDefault();
  });

  $('.contents_row__left__content_post__prefectures').on('mouseout', function() {
    $(this).removeClass("active");
    $(".contents_row__weather__result-city-name").hide();
    $(".contents_row__weather__result-temp").hide();
    $(".contents_row__weather__result-weather").hide();
    $('.contents_row__weather__result-icon').children().remove();
  });

  $('.contents_row__left__content_post__prefectures').on('mouseover', function() {
    $(this).addClass("active");
    $(".contents_row__weather__result-city-name").show();
    $(".contents_row__weather__result-temp").show();
    $(".contents_row__weather__result-weather").show();
  });

  $('.contents_row__right__ranking__title__user').hide();
  $('.contents_row__right__ranking__title').on('mouseover',function() {
    $('.contents_row__right__ranking__title__user').fadeIn(3000);
  });

});