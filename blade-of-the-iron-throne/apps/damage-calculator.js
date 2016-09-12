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

function getFeedback(result){
	var feedback = "";
	
	if (result.Pain !== "-"){
	if (result.Shock > 0 || result.Shock === "Level +1"){
		feedback = "<hr/><strong>Shock: </strong>Shock is only applied once for each wound, but deducts dice from all " +
		"three dice pools (Melee, Archery, and Sorcery) the moment the Character is struck by the blow. If the " +
		"received Shock exceeds a Character’s total current Melee Pool for his very next action, the remainder of " +
		"the Shock penalty is instead added to the aggressor's Melee Pool for the next Combat Round or Exchange. " +
		"Such bonus dice are only usable against the Shocked opponent.<br/><br/>Shock is cumulative as long as it " +
		"is applied to different zones. Should one attack the same area multiple times, the highest shock penalty " +
		"— new or old — is applied (or re-applied) to the wounded party.";
	}
	if (result.Pain > 0 || result.Pain === "Level +2"){
		feedback += "<hr/><strong>Pain: </strong>Pain is deducted from each of the three pools at the beginning of each " +
		"Combat Round, starting with the one following the Combat Round in which Shock from the wound was applied. " +
		"Pain is reduced by one’s Tenacity. For the purposes of wound healing, where Pain is important, record the " +
		"unreduced Pain rating of every wound, but apply only Pain in excess of the character’s Tenacity as a " +
		"penalty to her pools.<br/><br/>Tenacity is applied in full to Pain with every single wound; do not total " +
		"up Pain from several wounds first and then apply the Tenacity score. Instead, apply Tenacity to every " +
		"single wound and then add up the reduced Pain ratings to determine the penalty to die pools. Pain " +
		"is cumulative as long as it is applied to different zones. Should one attack the same area multiple times, " +
		"the highest shock penalty — new or old — is applied (or re-applied) to the wounded party.";
	}
	if (result.BloodLoss > 0){
		feedback += "<hr/><strong>Blood Loss: </strong>Blood Loss ratings of all wounds sustained are cumulative " +
		"provided they come from different parts of the body. Each limb, the entire torso, and the head each count " +
		"as individual locations. If a body part already sports a wound with an attendant Blood Loss rating and is " +
		"wounded again in a way to indicate further Blood Loss, only the higher of the two ratings comes (or stays) " +
		"in effect. At the very end of the Limelight in which the Character first acquired Blood Loss, and at the " +
		"end of each subsequent Limelight, she must check Brawn. This Check must yield Successes equal to or " +
		"surpassing the current Blood Loss number. If it doesn’t, the Character suffers a two die penalty to her " +
		"Melee, Archery, and Spell Pools. In addition, her Attribute and Skill Checks will need an additional " +
		"Success per full four dice penalty. The Brawn Check to avoid further Blood Loss is exempt from this " +
		"requirement for additional Successes. These penalties represent dizziness or weakness from loss of blood, " +
		"and accumulate from failed Brawn Check to failed Brawn Check.<br/><br/>Once accumulated " +
		"penalties from failed Blood Loss Checks equal or exceed the character’s Brawn, the Character passes out " +
		"from blood loss, and will likely die without quick medical attention. Thereafter, a Blood Loss Check is " +
		"made for the unconscious Character at the end of each subsequent Round of Limelights. If any Check fails, " +
		"the Character has bled to death. Blood Loss Checks made while the bleeding Character is at rest (no more " +
		"strenuous activity than walking very slowly) require one less Success than indicated by the current Blood " +
		"Loss rating to be successful. This includes Characters' unconscious from Blood Loss.";
	}
	if (result.Knockdown > 0){
		feedback += "<hr/><strong>Knockdown: </strong>Knockdown can be the result of some wounds, especially (but not " +
		"exclusively) those to the legs. With such wounds, the description will include a Knockdown number which " +
		"denotes the number of Successes needed on a Knockdown Check to avoid falling prone. The Challenge Rating " +
		"of this Check will be set at Challenging (two successes) if the Character’s Melee Pool is reduced to " +
		"below –5, or simply Average (one success) in other cases. If the wound which caused the initial Shock " +
		"reduced the Melee Pool to zero or below and also calls for a Check, only the more difficult of the two " +
		"Checks need be made, but the Challenge Rating of the Check is increased by 1.<br/><br/>A prone Character " +
		"can use only half of their Melee Pool while fighting from the ground. The number of dice used is halved " +
		"after all other modifiers (Shock, Pain, Blood Loss, etc.) have been applied. If he is knocked down during " +
		"an ongoing Combat Round, he immediately loses a number of dice from his Melee Pool equal to the " +
		"difference between his Melee Pool at the beginning of the Round and half that number.";
	}
	if (result.Knockout > 0){
		feedback += "<hr/><strong>Knockout: </strong>Knockout can be a consequence of blows to the head. If the " +
		"description of a wound contains a Knockout number, this is the Challenge Level the wounded Character needs " +
		"to pass on an immediate Check of her Knockout Attribute. Failure on this check indicates unconsciousness. " +
		"Optionally, any blow to the head that fails to cause a wound will still call for a Knockout Check " +
		"nonetheless, unless the hit was received from a thrust Piercing or thrust Cleaving attack.<br/><br/>The " +
		"Challenge Level of this Check is Average (one success) if a swung Piercing attack, Challenging (two " +
		"successes) if a swung Cleaving or thrusting Blunt attack, and Difficult (three successes) if a swung Blunt " +
		"attack, but may be under no circumstances higher than half the attack’s Quality of Success.";
	}
	}
	
	return feedback;
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
	
	var feedbackString = getFeedback(foundDamage);
	
	document.getElementById("feedback").innerHTML = feedbackString;
	
	if (foundDamage.Fatal){document.getElementById("Desc").style.color = "red";}
	else{document.getElementById("Desc").style.color = "black";}
}

// end hiding script from old browsers -->
