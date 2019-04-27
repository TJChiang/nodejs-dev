const request = require("request");

var getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/e25995cc718c2e84bd9a978e57be5ac8/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          Temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature,
          Humidity: body.currently.humidity,
          Pressure: body.currently.pressure
        });
      } else {
        callback("Unable to fetch weather.");
      }
    }
  );
};

module.exports.getWeather = getWeather;
