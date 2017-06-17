var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d9a3f4f23babb93998b02e1c4d53aa28&units=metric';

// d9a3f4f23babb93998b02e1c4d53aa28
// http://api.openweathermap.org/data/2.5/weather?q=bengaluru,india&units=metric&appid=d9a3f4f23babb93998b02e1c4d53aa28

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function (res){
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (error) {      
      throw new Error(error.response.data.message);
    });
  }
}
