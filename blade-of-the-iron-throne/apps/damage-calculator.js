<!-- hide script from old browsers


		
function updateLocations(){
	switch (document.getElementById("damageType").value){
		case "blunt":
			document.getElementById("damageArea").innerHTML = 
			"<option value='area_1'>Area One (Lower Legs)</option>" + 
			"<option value='area_2'>Area Two (Upper Legs)</option>" + 
			"<option value='area_3'>Area Three (Upper Body)</option>" + 
			"<option value='area_4'>Area Four (Overhand Swing)</option>" + 
			"<option value='area_5'>Area Five (Vertical Swing)</option>" + 
			"<option value='area_6'>Area Six (Upward Swing)</option>" + 
			"<option value='area_7'>Area Seven (Arms)</option>" + 
			"<option value='area_8'>Area Eight (Lower Legs)</option>" + 
			"<option value='area_9'>Area Nine (Upper Legs)</option>" + 
			"<option value='area_10'>Area Ten (Pelvic Region)</option>" + 
			"<option value='area_11'>Area Eleven (Belly)</option>" + 
			"<option value='area_12'>Area Twelve (Chest)</option>" + 
			"<option value='area_13'>Area Thirteen (Head)</option>" + 
			"<option value='area_14'>Area Fourteen (Arms)</option>";
			break;
		case "cleaving":
			document.getElementById("damageArea").innerHTML = 
			"<option value='area_1'>Area One (Lower Legs)</option>" + 
			"<option value='area_2'>Area Two (Upper Legs)</option>" + 
			"<option value='area_3'>Area Three (Upper Body)</option>" + 
			"<option value='area_4'>Area Four (Overhand Swing)</option>" + 
			"<option value='area_5'>Area Five (Vertical Swing)</option>" + 
			"<option value='area_6'>Area Six (Upward Swing)</option>" + 
			"<option value='area_7'>Area Seven (Arms)</option>";
			break;
		case "piercing":
			document.getElementById("damageArea").innerHTML = 
			"<option value='area_8'>Area Eight (Lower Legs)</option>" + 
			"<option value='area_9'>Area Nine (Upper Legs)</option>" + 
			"<option value='area_10'>Area Ten (Pelvic Region)</option>" + 
			"<option value='area_11'>Area Eleven (Belly)</option>" + 
			"<option value='area_12'>Area Twelve (Chest)</option>" + 
			"<option value='area_13'>Area Thirteen (Head)</option>" + 
			"<option value='area_14'>Area Fourteen (Arms)</option>";
			break;
		case "swung":
			document.getElementById("damageArea").innerHTML = 
			"<option value='area_1'>Area One (Lower Legs)</option>" + 
			"<option value='area_2'>Area Two (Upper Legs)</option>" + 
			"<option value='area_3'>Area Three (Upper Body)</option>" + 
			"<option value='area_4'>Area Four (Overhand Swing)</option>" + 
			"<option value='area_5'>Area Five (Vertical Swing)</option>" + 
			"<option value='area_6'>Area Six (Upward Swing)</option>" + 
			"<option value='area_7'>Area Seven (Arms)</option>";
			break;
	}
}
	
function getDamage(array){
	var sendBack = new damage();
	var gender = document.getElementById("chb_gender").checked;
	var area = document.getElementById("damageArea").value;
	var level = document.getElementById("damageLevel").value;
	var roll = document.getElementById("d6Roll").value;
	
	for(var i = 0; i < array.length; ++i){
		if ((array[i].Area === area) && (array[i].Level === level) && (array[i].D6 === roll)){
			sendBack = array[i];
			
			if(!gender){
				for (var x = i; x < array.length; ++x){
					if ((array[x].Area === area) && (array[x].Level === level) && (array[x].D6 === roll) && (array[x].Gender = "f")){
						sendBack = array[x];
					}
				}
					break;
			}
			break;
		}
	}
	
	return sendBack;
}

function damage(area, level, d6, shock, pain, bloodloss, knockdown, knockout, desc, location, gender, fatal){
	this.Area = area;
	this.Level = level;
	this.D6 = d6;
	
	this.Shock = shock;
	this.Pain = pain;
	this.BloodLoss = bloodloss;
	this.Knockdown = knockdown;
	this.Knockout = knockout;
	
	this.Desc = desc;
	this.Location = location;
	this.Gender = gender;
	this.Fatal = fatal;
}

function updateDamage(){
	var getType = document.getElementById("damageType").value;
	
	switch (getType){
		case "blunt":
			var foundDamage = getDamage(allBlunt);
			break;
		case "cleaving":
			var foundDamage = getDamage(allCleaving);
			break;
		case "piercing":
			var foundDamage = getDamage(allPiercing);
			break;
		case "swung":
			var foundDamage = getDamage(allSwung);
			break;
	}
	
	document.getElementById("Shock").innerHTML = foundDamage.Shock;
	document.getElementById("Pain").innerHTML = foundDamage.Pain;
	document.getElementById("BloodLoss").innerHTML = foundDamage.BloodLoss;
	document.getElementById("Knockdown").innerHTML = foundDamage.Knockdown;
	document.getElementById("Knockout").innerHTML = foundDamage.Knockout;
	document.getElementById("Desc").innerHTML = "<strong>Description: </strong><em>" + foundDamage.Desc + "</em>";
	document.getElementById("Location").innerHTML = "<strong>Location: </strong>" + foundDamage.Location;
	
	if (foundDamage.Fatal){document.getElementById("Desc").style.color = "red";}
	else{document.getElementById("Desc").style.color = "black";}
}

// end hiding script from old browsers -->
