////fetching coordinates with address, city and postcode inputs, RETURNING array with lat, long

function getCoords(data) {
  let { city, postCode, address } = data;
  city = city.replace(/ /g, "%20");
  postCode = postCode.replace(/ /g, "%20");
  address = address.replace(/ /g, "%20");
  // console.log("TEST");
  return fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}&postcode="${postCode}"&address="${address}"&autocomplete=false.json?access_token=pk.eyJ1IjoiZ2lvODZrcnQiLCJhIjoiY2ttdzVnemx2MGJ5MTJ4bGJ3ODExbjE1byJ9.gxawj4w9zbZj6nmkHnPsEw`
  )
    .then((res) => res.json().then((res) => res.features[0].center))
    .catch((err) => console.log(err));

  ///////Should store the coords to DB with the form info
}

export default getCoords;
