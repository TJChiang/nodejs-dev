const yargs = require("yargs");
const axios = require("axios");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help().alias("help", "h").argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=dM7ZYPmFUy3ZukZCpb7m68xE7VaqMRsr&location=${encodedAddress}`;

axios
  .get(geocodeUrl)
  .then(response => {
    var lat = response.data.results[0].locations[0].latLng.lat;
    var lng = response.data.results[0].locations[0].latLng.lng;
    var weatherUrl = `https://api.darksky.net/forecast/e25995cc718c2e84bd9a978e57be5ac8/${lat},${lng}`;
    console.log(
      `${response.data.results[0].locations[0].street}  ${
        response.data.results[0].locations[0].adminArea5
      }  ${response.data.results[0].locations[0].adminArea4}  ${
        response.data.results[0].locations[0].adminArea3
      }  ${response.data.results[0].locations[0].adminArea1}`
    );
    return axios.get(weatherUrl);
  })
  .then(response => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(
      `It's currently ${temperature}. It feels like ${apparentTemperature}`
    );
  })
  .catch(e => {
    if (e.code === "ENOTFOUND") {
      console.log("Unable to connect to API servers.");
    } else {
      console.log(e.message);
    }
  });
