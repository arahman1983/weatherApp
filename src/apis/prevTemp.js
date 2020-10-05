export default async function getPrevTemp (lat, lon, tsDaysBefore) {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${tsDaysBefore}&appid=c3893d1cc91c7d2a402863d4c414be54&units=metric`);
  // return response;
  let data = await response.json();
  console.log(data)
  return data
}