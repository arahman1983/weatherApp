export default async function getPrevTemp (lat, lon) {
  var ts = Math.round(new Date().getTime() / 1000);
  var tsDaysBefore = ts - (120 * 3600);
  let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${1601235292}&appid=c3893d1cc91c7d2a402863d4c414be54&units=metric`);
  // return response;
  let data = await response.json();
  return data
}