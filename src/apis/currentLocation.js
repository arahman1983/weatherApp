export default async function getCurrentLoc () {
  let response = await fetch(`https://geolocation-db.com/jsonp`);
  // return response;
  let data = await response.json();
  return data
}