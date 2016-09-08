<!-- hide script from old browsers

var nothing = "<img src='images/nothing.bmp'></img>";
var images = [];
var total = 0;
	
function SetUpDisplay() {
	document.getElementById("NUM_skill").value = 0;
		
	for (var i = 0; i < 4; i++) {images[i] = nothing;}
	
	DisplayRoll();
}
	
function RollFateDice() {
	var roll;
		
	total = 0;
		
	for (var i = 0; i < 4; i++) {
		roll = Math.floor((Math.random() * 3) - 1);
		
		if (roll === 1) {
			images[i] = "<img src='images/plus.bmp'></img>";
			total++;
		} else if (roll === -1) {
			images[i] = "<img src='images/minus.bmp'></img>";
			total--;
		} else {images[i] = nothing;}		
	}
		
	DisplayRoll();
}
	
function DisplayRoll() {
	document.getElementById("PAR_top").innerHTML = "";
	document.getElementById("PAR_bottom").innerHTML = "";
		
	for (var i = 0; i < 4; i++) {
		if (i === 0 || i === 1) {document.getElementById("PAR_top").innerHTML += images[i];}
		else {document.getElementById("PAR_bottom").innerHTML += images[i];}
	}
		
	UpdateTotal();
}
	
function UpdateTotal(){
	document.getElementById("PAR_total").innerHTML = "Total : " + 
		(parseInt(document.getElementById("NUM_skill").value) + total);
}

// end hiding script from old browsers -->
