// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:`+name+` </li>
                    <li>Diameter: `+diameter+`</li>
                    <li>Star: `+star+`</li>
                    <li>Distance from Earth: `+distance+`</li>
                    <li>Number of Moons: `+moons+`</li>
                </ol>
                <img src="${imageUrl}">`;
   
}

function validateInput(testInput) {
if(testInput===""||testInput.length==0){
	return "Empty";
	}
else if(isNaN(testInput)){
	return "Not a Number";
}
else{
	return "Is a Number";
}
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
   
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let faultyItems = document.getElementById("faultyItems");
   let launchStatus = document.getElementById("launchStatus");
   
   
   if (validateInput(pilot.value)=== "Is a Number"
   || validateInput(copilot.value) === "Is a Number"
   || validateInput(fuelLevel.value) === "Not a Number"
   || validateInput(cargoLevel.value) === "Not a Number"
   ){
	   alert ("Invalid Input");
   }
   else {
	   pilotStatus.innerHTML = "Pilot "+ pilot.value + " is ready for launch";
	   copilotStatus.innerHTML = "Co-pilot " + copilot.value + " is ready for launch";
	   if (fuelLevel.value < 10000){
		   fuelStatus.innerHTML = "Fuel level too low for launch";
		   faultyItems.style = "visible";
		   launchStatus.innerHTML = "Shuttle Not Ready for Launch";
		   launchStatus.style.color = "red";
	   }
	   else if (cargoLevel.value > 10000){
		   cargoLeve.innerHTML = "Cargo mass too high for launch";
		   faultyItems.style = "visible";
		   launchStatus.innerHTML = "Shuttle Not Ready for Launch";
		   launchStatus.style.color = "red";
	   }
	   else{
		launchStatus.innerHTML = "Ready for Launch";
		launchStatus.style.color = "green";
	   	
   }
   
   }
   
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
		return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
	let planet = planets[Math.floor(Math.random()*planets.length)];
	return planet;
	
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
