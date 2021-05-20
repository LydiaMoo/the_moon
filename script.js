//Endpoint: https://api.solunar.org/solunar/latitude,longitude,date,tz

//Parameters need to be comma separated values.
//Latitude needs to be in decimal degree format with North positive, South negative.
//Longitude needs to be in decimal degree format with East positive, West negative.
//Date needs to be yyyymmdd format.
//tz - timezone for results, needs to be an integer
//fetch(https://api.solunar.org/solunar/51.481801,-0.010710,20210404,0); 
//result.body.moonPhase should be the current moon phase

const today = new Date();

const zero = '0';
let date = today.getDate();
date<=9 ?  date = zero.concat(date) : null; 
let month = today.getMonth();
month<=9 ?  month = zero.concat(month) : null; 
let year = (today.getFullYear()).toString();

const dateString = year.concat(month, date);

const requestUrl = `https://api.solunar.org/solunar/51.481801,-0.010710,${dateString},0`;

async function fetchCurrentMoonPhase() {
  const response = await fetch(requestUrl)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

const moonImages = {
  "Waxing Gibbous":"waxing-gibbous.jpg",
  "Waning Gibbous": "waning-gibbous.jpg",
  "Waning Crescent": "waning-crescent.jpg",
  "Waxing Crescent": "waxing-crescent.jpg"
}

fetchCurrentMoonPhase().then((json) => {
  let currentMoonPhase = json.moonPhase; 
  let imagePhase = moonImages[currentMoonPhase];
  let text = document.createElement('p');
  let image = document.createElement("img");
  image.src=imagePhase;
  text.innerHTML = currentMoonPhase;
  const targetElement = document.getElementById('moon_phases');
  targetElement.appendChild(text);
  targetElement.appendChild(image);
}).catch(e => console.log(e));