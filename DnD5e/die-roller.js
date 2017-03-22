<!-- hide script from old browsers

var d20Roll = 0;

function SetUpDisplay() {
	console.log(Setting up page...);
	document.getElementById("NUM_toHit").value = 0;
	DisplayRoll();
}

function Rolld20() {
	console.log(Rolling d20);
	d20Roll = Math.floor(Math.random() * 20 + 1);
	DisplayRoll();
}

function DisplayRoll() {
	console.log(Displaying roll);
	document.getElementById("DIV_total").innerHTML = "d20 Roll : " + 
		(parseInt(document.getElementById("NUM_toHit").value) + d20Roll);
}

// end hiding script from old browsers -->
