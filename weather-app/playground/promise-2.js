const request = require("request");
const yargs = require("yargs");

var geocodeAddress = address => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);

    request(
      {
        url: `https://www.mapquestapi.com/geocoding/v1/address?key=dM7ZYPmFUy3ZukZCpb7m68xE7VaqMRsr&location=${encodedAddress}`,
        json: true
      },
      (error, response, body) => {
        if (error) {
          reject("Unable to connect to the servers.");
        } else {
          resolve({
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
  });
};

geocodeAddress("19146").then(
  location => {
    console.log(JSON.stringify(location, undefined, 2));
  },
  errorMessage => {
    console.log(errorMessage);
  }
);
