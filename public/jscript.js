function getWeather(icao) {
  const requestURL = `https://avwx.rest/api/metar/${icao}?token=4W4dX6eCELvToL3eJvLdRVYNBUx9nqy8R_1x2mG8vYU`;
  const request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  return new Promise((resolve, reject) => {
    request.onload = () => {
      resolve(request.response);
      //console.log(request.response);
    }

    request.onerror = () => {
      reject('Error during GET');
    }
  })
}

async function printWeather(station) 
{
    const response = await getWeather(station);
    let newData = station +": "+ response["wind_direction"]["value"] + " degrees " + response["wind_speed"]["value"] + "kts QNH: "+ response["altimeter"]["value"];
    var metarstation = station + "Metar";
    document.getElementById(metarstation).innerHTML = newData;

    var wind;
    if(response["wind_direction"]["value"] === null) {
        wind = response["wind_direction"]["repr"];
    } else {
        wind = response["wind_direction"]["value"];
    }

    var table = document.getElementById("MetarTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = station;
    cell1.classList.add("text-xs");
    cell2.innerHTML = wind + " " + response["wind_speed"]["value"];
    cell2.classList.add("text-xs");
    cell3.innerHTML = response["altimeter"]["value"];
    cell3.classList.add("text-xs");
}

const airports = ['EDDL', 'EDDK', 'EDDG','EDLV'];

airports.forEach(element => printWeather(element));

    
function hideRW(event) {
    //This function hides or shows runway rows in a table

    //Selects element to hide (value of check = id to hide)
    var elem = document.getElementById(event.target.value);
    
    //renders element hidden or shows it
    if (elem.classList.contains("hidden") && event.target.checked == true)
    {
        elem.classList.remove("hidden");
        console.log("show");
    } else {
        elem.classList.add("hidden");
        console.log("hide");
    }
    
    
    //console.log(elem)
}

function 


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('EDDL_SID_23L').classList.add("hidden");
  document.getElementById('cb_EDDL_SID_23L').checked = false;
});
