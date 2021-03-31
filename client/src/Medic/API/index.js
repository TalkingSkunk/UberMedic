function getDirections() {
  return fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/-79.46556;43.73024?access_token=pk.eyJ1IjoiZ2lvODZrcnQiLCJhIjoiY2ttdzVnemx2MGJ5MTJ4bGJ3ODExbjE1byJ9.gxawj4w9zbZj6nmkHnPsEw`
  )
    .then((res) => console.log(res))
    .catch9((err) => console.log(err));
}

export default getDirections;
