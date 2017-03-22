<!-- hide script from old browsers

var d20Roll = 0;
var d20Roll2 = 0;

function SetUpDisplay() {
	document.getElementById("NUM_toHit").value = 0;
	DisplayRoll();
}

function RollType() {
	if (document.getElementById("d20RollType").value === 0)
}

function Rolld20() {
	d20Roll = Math.floor(Math.random() * 20 + 1);
	d20Roll2 = Math.floor(Math.random() * 20 + 1);
	
	if (document.getElementById("d20RollType").value === 1 && d20Roll2 > d20Roll
		d20Roll = d20Roll2
	else if (document.getElementById("d20RollType").value === -1 && d20Roll2 < d20Roll
		d20Roll = d20Roll2
	
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
	
	if (document.getElementById("d20RollType").value === 1)
		document.getElementById("DIV_total").innerHTML += "<br/>Rolled with Advantage";
	else if (document.getElementById("d20RollType").value === -1)
		document.getElementById("DIV_total").innerHTML += "<br/>Rolled with Disadvantage";
}

// end hiding script from old browsers -->
