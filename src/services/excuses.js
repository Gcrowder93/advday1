export async function getExcuses() {
  const response = await fetch(`https://excuser.herokuapp.com/v1/excuse`);
  const excuseData = await response.json();
  return excuseData;
}
