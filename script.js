//Endpoint: https://api.solunar.org/solunar/latitude,longitude,date,tz

//Parameters need to be comma separated values.
//Latitude needs to be in decimal degree format with North positive, South negative.
//Longitude needs to be in decimal degree format with East positive, West negative.
//Date needs to be yyyymmdd format.
//tz - timezone for results, needs to be an integer
//fetch(https://api.solunar.org/solunar/51.481801,-0.010710,20210404,0); 
//result.body.moonPhase should be the current moon phase

const requestUrl = 'https://api.solunar.org/solunar/51.481801,-0.010710,20210404,0';
console.log('running script')

async function fetchCurrentMoonPhase() {
  const response = await fetch(requestUrl)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

fetchCurrentMoonPhase().then((json) => {
  let currentMoonPhase = json.moonPhase; 
  let text = document.createElement('p');
  text.innerHTML = currentMoonPhase;
  const targetElement = document.getElementById('moon_phases');
  targetElement.appendChild(text);
}).catch(e => console.log(e));