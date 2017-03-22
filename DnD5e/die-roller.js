<!-- hide script from old browsers

var d20Roll = 0;
var d20Roll2 = 0;

function SetUpDisplay() {
	document.getElementById("NUM_toHit").value = 0;
	document.getElementById("NUM_targetAC").value = 10;
	DisplayRoll();
}

function Rolld20() {
	var temp = 0;
	
	d20Roll = Math.floor(Math.random() * 20 + 1);
	d20Roll2 = Math.floor(Math.random() * 20 + 1);
	temp = d20Roll;
	
	if (document.getElementById("RDO_advantage").checked && d20Roll2 > d20Roll) {
		d20Roll = d20Roll2;
	} else if (document.getElementById("RDO_disadvantage").checked && d20Roll2 < d20Roll) {
		d20Roll = d20Roll2; }
	d20Roll2 = temp; 
	
	DisplayRoll();
}

function DisplayRoll() {
	document.getElementById("DIV_total").innerHTML = "d20 Roll : " + 
		(parseInt(document.getElementById("NUM_toHit").value) + d20Roll + " (" + d20Roll + " + " + 
		document.getElementById("NUM_toHit").value + ")");
		
	TellMeTheOdds();
	
	if (d20Roll !== 0) {
		if (d20Roll === 20) {
			document.getElementById("DIV_total").innerHTML += " Double Damage!";
		} else if (d20Roll === 1) {
			document.getElementById("DIV_total").innerHTML += " Critical Failure!"; }

		if (document.getElementById("RDO_advantage").checked) {
			document.getElementById("DIV_total").innerHTML += "<br/><br/>Rolled with Advantage (" + 
			d20Roll + " vs " + d20Roll2 + ")";
		} else if (document.getElementById("RDO_disadvantage").checked) {
			document.getElementById("DIV_total").innerHTML += "<br/><br/>Rolled with Disadvantage (" + 
			d20Roll + " vs " + d20Roll2 + ")"; }

		if (d20Roll + document.getElementById("NUM_toHit").value >= document.getElementById("NUM_targetAC").value) {
			document.getElementById("DIV_total").innerHTML += "<br/><br/>Target hit!"; 
		} else { document.getElementById("DIV_total").innerHTML += "<br/><br/>Target missed!"; }
	}
}

function TellMeTheOdds() {
	var odds = (parseFloat(document.getElementById("NUM_targetAC").value) 
		    + parseFloat(document.getElementById("NUM_toHit").value)) / 0.2;
	
	document.getElementById("DIV_hitChance").innerHTML = odds + "% chance of hitting";
}

// end hiding script from old browsers -->
