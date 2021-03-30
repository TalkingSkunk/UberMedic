function getCoords(data) {
  let { city, postCode, address } = data;
  city = city.replace(/ /g, "%20");
  postCode = postCode.replace(/ /g, "%20");
  address = address.replace(/ /g, "%20");
  console.log("TEST");
  return fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}&postcode="${postCode}"&address="${address}"&autocomplete=false.json?access_token=pk.eyJ1IjoiZ2lvODZrcnQiLCJhIjoiY2ttdzVnemx2MGJ5MTJ4bGJ3ODExbjE1byJ9.gxawj4w9zbZj6nmkHnPsEw`
  )
    .then((res) =>
      res.json().then((res) => console.log(res.features[0].center))
    )
    .catch((err) => console.log(err));

  ////res.geometry.coordinates
}

export default getCoords;
