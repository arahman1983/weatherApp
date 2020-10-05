export default async function getPrevTemp (cityName) {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=c3893d1cc91c7d2a402863d4c414be54&units=metric`);
  // return response;
  let data = await response.json();
  return data
}