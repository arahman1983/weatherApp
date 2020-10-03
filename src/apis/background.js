export default async function getBackground (keyWord) {
  let response = await fetch(`https://source.unsplash.com/1600x900/?${keyWord}`);
  let data = await response.url;
  return data
}