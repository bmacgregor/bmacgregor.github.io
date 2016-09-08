<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>FATE Die Roller</title>
	<link href="../../css/bootstrap.min.css" rel="stylesheet">
	
	<script>
		var nothing = "<img src='../../images/FATE/Die Roller/nothing.bmp'></img>";
		var images = [];
		var total = 0;
		
		function SetUpDisplay() {
			
			document.getElementById("NUM_skill").value = 0;
			
			for (var i = 0; i < 4; i++) {
				images[i] = nothing;
			}
			
			DisplayRoll();
		}
		
		function RollFateDice() {
			var roll;
			
			total = 0;
			
			for (var i = 0; i < 4; i++) {
				roll = Math.floor((Math.random() * 3) - 1);
				
				if (roll === 1) {
					images[i] = "<img src='../../images/FATE/Die Roller/plus.bmp'></img>";
					total++;
				} else if (roll === -1) {
					images[i] = "<img src='../../images/FATE/Die Roller/minus.bmp'></img>";
					total--;
				} else {
					images[i] = nothing;
				}		
			}
			
			DisplayRoll();
		}
			
		function DisplayRoll() {
		
			document.getElementById("PAR_top").innerHTML = "";
			document.getElementById("PAR_bottom").innerHTML = "";
			
			for (var i = 0; i < 4; i++) {
				if (i === 0 || i === 1){
					document.getElementById("PAR_top").innerHTML += images[i];
				} else {
					document.getElementById("PAR_bottom").innerHTML += images[i];
				}
			}
			
			UpdateTotal();
		}
		
		function UpdateTotal()
		{
			document.getElementById("PAR_total").innerHTML = "Total : " + 
				(parseInt(document.getElementById("NUM_skill").value) + total);
		}
	</script>
</head>
<body onload="SetUpDisplay()">
	<div class="container text-center"">
	
		<h1>FATE Die Roller</h1><hr/>
		
		<div>
			<label for="NUM_skill">Enter Skill Level : </label>
			<input type="number" id="NUM_skill" min="0" style="text-align:center" onchange="UpdateTotal()">
		</div>
		
		<br/>
		
		<button id="BTN_Roll" class="btn btn-primary btn-lg" onclick="RollFateDice()">
			Roll Dice</button><br/><br/>
		
		<div class="panel-body">
			<div class="row">
				<p id="PAR_top">
				</p>
			</div>
			<div class="row">
				<p id="PAR_bottom">
				</p>
			</div>
		</div>
		
		<div>
			<p id="PAR_total" class="h4"></p>
		</div>
	</div>
	
	<script src="../../js/jquery.js"></script>
	<script src="../../js/bootstrap.min.js"></script>
</body>
</html>
