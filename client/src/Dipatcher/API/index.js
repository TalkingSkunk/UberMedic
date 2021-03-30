function getCoords(city, postCode, address) {
  city = city.replace(/ /g, "%20");
  postCode = postCode.replace(/ /g, "%20");
  address = address.replace(/ /g, "%20");
  console.log("TEST");
  return fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}&postcode="${postCode}"&address="${address}".json?access_token=pk.eyJ1IjoiZ2lvODZrcnQiLCJhIjoiY2ttdzVnemx2MGJ5MTJ4bGJ3ODExbjE1byJ9.gxawj4w9zbZj6nmkHnPsEw`
  )
    .then((res) => res.json().then((res) => console.log(res)))
    .catch((err) => console.log(err));

  ////res.geometry.coordinates
}

export default getCoords;
