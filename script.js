// Write your JavaScript code here!

window.addEventListener("load", function() {

let form = document.querySelector("form");
form.addEventListener("submit",function(event){
	let document = window.document;
	let userPilotName = document.querySelector("input[name=pilotName]");
	let coPilotName = document.querySelector("input[name=copilotName]");
	let fuelLevel = document.querySelector("input[name=fuelLevel]");
	let cargoMass = document.querySelector("input[name=cargoMass]")
	
	if (userPilotName === ""|| coPilotName === ""|| fuelLevel === ""|| cargoMass === ""){
		alert("Please fill out all fields.");
		event.preventDefault();
	}
	else{
		formSubmission(document, userPilotName, coPilotName, fuelLevel, cargoMass);
		event.preventDefault();
	};
});







   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
	   let planetPicked = pickPlanet(listedPlanets);
	   addDestinationInfo(document, planetPicked.name,planetPicked.diameter,planetPicked.star,planetPicked.distance,planetPicked.moons,planetPicked.image);
   })
   
   
});
