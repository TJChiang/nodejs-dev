const request = require("request");
const yargs = require("yargs");

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request(
    {
      url: `https://www.mapquestapi.com/geocoding/v1/address?key=dM7ZYPmFUy3ZukZCpb7m68xE7VaqMRsr&location=${encodedAddress}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback("Unable to connect to the servers.");
      } else {
        callback(undefined, {
          // Area5: City, Area4: County, Area3: State, Area1: Country
          address: `${body.results[0].locations[0].street}, ${
            body.results[0].locations[0].adminArea5
          }, ${body.results[0].locations[0].adminArea4}, ${
            body.results[0].locations[0].adminArea3
          }, ${body.results[0].locations[0].adminArea1}`,
          latitude: body.results[0].locations[0].latLng.lat,
          longitude: body.results[0].locations[0].latLng.lng
        });
      }
    }
  );
};

module.exports.geocodeAddress = geocodeAddress;
