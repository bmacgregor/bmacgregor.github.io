<!-- hide script from old browsers

var d20Roll = 0;
var d20Roll2 = 0;

function SetUpDisplay() {
	document.getElementById("NUM_toHit").value = 0;
	document.getElementById("NUM_targetAC").value = 10;
	
	document.getElementById("NUM_dice").value = 1;
	document.getElementById("NUM_damage").value = 0;
	
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
	TellMeTheOdds();
	AverageDamage();
	
	if (d20Roll !== 0) {
	document.getElementById("DIV_total").innerHTML = "d20 Roll : " + 
		(parseInt(document.getElementById("NUM_toHit").value) + d20Roll + " (" + d20Roll + " + " + 
		document.getElementById("NUM_toHit").value + ")");
	
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

	if ((d20Roll + parseInt(document.getElementById("NUM_toHit").value) >= parseInt(document.getElementById("NUM_targetAC").value)
	   || d20Roll === 20) && d20Roll !== 1) {
		document.getElementById("DIV_total").innerHTML += " : Target hit!"; 
	} else { document.getElementById("DIV_total").innerHTML += " : Target missed!"; } 
	
	GetDamage(); }
}

function TellMeTheOdds() {
	var odds = Math.floor((((parseFloat(document.getElementById("NUM_targetAC").value - 1) 
		    - parseFloat(document.getElementById("NUM_toHit").value)) / 20) - 1) * -100);
	
	document.getElementById("DIV_hitChance").innerHTML = odds + "% chance of hitting on a normal roll";
}

function GetDamage() {
	var dType = parseFloat(document.getElementById("SEL_damage").value);
	var dMod = parseFloat(document.getElementById("NUM_damage").value);
	var dCount = parseFloat(document.getElementById("NUM_dice").value);
	var damage = 0;
	
	//var damage = Math.floor(Math.random() * dType + 1) + dMod;
	for (var i = 0; i < dCount ; i++) { damage += Math.floor(Math.random() * dType + 1) }
	
	dMod *= dCount;

      	document.getElementById("DIV_damage").innerHTML = "Damage Roll : " + (damage+dMod) + 
		" (" + dCount + " rolled, " + dMod + " added)";
}

function AverageDamage() {
	var dType = parseFloat(document.getElementById("SEL_damage").value);
	var dMod = parseFloat(document.getElementById("NUM_damage").value);
	var dCount = parseFloat(document.getElementById("NUM_dice").value);
	
	var avg = parseFloat((dCount + (dCount * dType) + (dCount + dMod)) * 0.5);
	avg = avg.toFixed(2);
	
	document.getElementById("DIV_dAvg").innerHTML = "Average damage : " + avg;
}

// end hiding script from old browsers -->
