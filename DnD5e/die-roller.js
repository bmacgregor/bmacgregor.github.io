<!-- hide script from old browsers

var d20Roll = 0;

function SetUpDisplay() {
	document.getElementById("NUM_toHit").value = 0;
	DisplayRoll();
}

function Rolld20() {
	d20Roll = Math.floor(Math.random() * 20 + 1);
	DisplayRoll();
}

function DisplayRoll() {
	document.getElementById("DIV_total").innerHTML = "d20 Roll : " + 
		(parseInt(document.getElementById("NUM_toHit").value) + d20Roll + " (" + d20Roll + " + " + 
		document.getElementById("NUM_toHit").value + ")");
	
	if (d20Roll === 20)
		document.getElementById("DIV_total").innerHTML += " Double Damage!";
	else if (d20Roll === 1)
		document.getElementById("DIV_total").innerHTML += " Critical Failure!";
}

// end hiding script from old browsers -->
