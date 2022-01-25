export async function getExcuses() {
  const response = await fetch(`https://excuser.herokuapp.com/v1/excuse/10`);
  const excuseData = await response.json();
  console.log('excuseData', excuseData);
  return excuseData;
}
