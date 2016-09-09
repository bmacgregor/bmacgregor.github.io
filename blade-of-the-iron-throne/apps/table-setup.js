<!-- hide script from old browsers

function setupBlunt(){
	// area one values
	allBlunt[0] = new damage("area_1", "level_1", "d6_1", 1, 2, 0, 0, 0, "Strike to Foe's instep", "Foot", "m", false);
	allBlunt[1] = new damage("area_1", "level_1", "d6_2", 1, 2, 0, 0, 0, "Your strike connects weakly", "Shin and Lower Leg", "m", false);
	allBlunt[2] = new damage("area_1", "level_1", "d6_3", 1, 2, 0, 0, 0, "Your strike connects weakly", "Shin and Lower Leg", "m", false);
	allBlunt[3] = new damage("area_1", "level_1", "d6_4", 1, 2, 0, 0, 0, "Your strike connects weakly", "Shin and Lower Leg", "m", false);
	allBlunt[4] = new damage("area_1", "level_1", "d6_5", 2, 3, 0, 0, 0, "Cracks Foe's kneecap", "Knee and Nearby Areas", "m", false);
	allBlunt[5] = new damage("area_1", "level_1", "d6_6", 2, 3, 0, 0, 0, "Cracks Foe's kneecap", "Knee and Nearby Areas", "m", false);
	
	allBlunt[6] = new damage("area_1", "level_2", "d6_1", 4, 4, 0, 1, 0, "Foe recoils as your blow impacts", "Foot", "m", false);
	allBlunt[7] = new damage("area_1", "level_2", "d6_2", 4, 4, 0, 1, 0, "Foe leans to your shield side as you strike", "Shin and Lower Leg", "m", false);
	allBlunt[8] = new damage("area_1", "level_2", "d6_3", 4, 4, 0, 1, 0, "Foe leans to your shield side as you strike", "Shin and Lower Leg", "m", false);
	allBlunt[9] = new damage("area_1", "level_2", "d6_4", 4, 4, 0, 1, 0, "Foe leans to your shield side as you strike", "Shin and Lower Leg", "m", false);
	allBlunt[10] = new damage("area_1", "level_2", "d6_5", 5, 5, 0, 1, 0, "Glancing strike to knee. Foe turns away to avoid the worst of the damage", "Knee and Nearby Areas", "m", false);
	allBlunt[11] = new damage("area_1", "level_2", "d6_6", 5, 5, 0, 1, 0, "Glancing strike to knee. Foe turns away to avoid the worst of the damage", "Knee and Nearby Areas", "m", false);
	
	allBlunt[12] = new damage("area_1", "level_3", "d6_1", 6, 6, 1, 2, 0, "Lightning fast strike leaves Foe limping", "Foot", "m", false);
	allBlunt[13] = new damage("area_1", "level_3", "d6_2", 6, 6, 1, 2, 0, "Shot takes Foe in lower leg", "Shin and Lower Leg", "m", false);
	allBlunt[14] = new damage("area_1", "level_3", "d6_3", 6, 6, 1, 2, 0, "Shot takes Foe in lower leg", "Shin and Lower Leg", "m", false);
	allBlunt[15] = new damage("area_1", "level_3", "d6_4", 6, 6, 1, 2, 0, "Shot takes Foe in lower leg", "Shin and Lower Leg", "m", false);
	allBlunt[16] = new damage("area_1", "level_3", "d6_5", 7, 7, 1, 2, 0, "Your hit leaves a massive bruise", "Knee and Nearby Areas", "m", false);
	allBlunt[17] = new damage("area_1", "level_3", "d6_6", 7, 7, 1, 2, 0, "Your hit leaves a massive bruise", "Knee and Nearby Areas", "m", false);
	
	allBlunt[18] = new damage("area_1", "level_4", "d6_1", 9, 8, 2, 2, 0, "Blow lands with a crack! Foe's eyes roll in pain", "Foot", "m", false);
	allBlunt[19] = new damage("area_1", "level_4", "d6_2", 9, 8, 2, 3, 0, "Foe reels back in agony", "Shin and Lower Leg", "m", false);
	allBlunt[20] = new damage("area_1", "level_4", "d6_3", 9, 8, 2, 3, 0, "Foe reels back in agony", "Shin and Lower Leg", "m", false);
	allBlunt[21] = new damage("area_1", "level_4", "d6_4", 9, 8, 2, 3, 0, "Foe reels back in agony", "Shin and Lower Leg", "m", false);
	allBlunt[22] = new damage("area_1", "level_4", "d6_5", 9, 10, 2, 3, 0, "Foe leaps to avoid a strike to the gut and catches blow full on the knee", "Knee and Nearby Areas", "m", false);
	allBlunt[23] = new damage("area_1", "level_4", "d6_6", 9, 10, 2, 3, 0, "Foe leaps to avoid a strike to the gut and catches blow full on the knee", "Knee and Nearby Areas", "m", false);
	
	allBlunt[24] = new damage("area_1", "level_5", "d6_1", 11, 11, 3, 3, 0, "A forceful swing that crushes toes", "Foot", "m", false);
	allBlunt[25] = new damage("area_1", "level_5", "d6_2", 11, 11, 3, 3, 0, "Masterful strike to shin causes Foe to howl in pain", "Shin and Lower Leg", "m", false);
	allBlunt[26] = new damage("area_1", "level_5", "d6_3", 11, 11, 3, 3, 0, "Masterful strike to shin causes Foe to howl in pain", "Shin and Lower Leg", "m", false);
	allBlunt[27] = new damage("area_1", "level_5", "d6_4", 11, 11, 3, 3, 0, "Masterful strike to shin causes Foe to howl in pain", "Shin and Lower Leg", "m", false);
	allBlunt[28] = new damage("area_1", "level_5", "d6_5", 12, 13, 3, 3, 0, "Massive Strike to Foe's right knee nearly brings him to the ground", "Knee and Nearby Areas", "m", false);
	allBlunt[29] = new damage("area_1", "level_5", "d6_6", 12, 13, 3, 3, 0, "Massive Strike to Foe's right knee nearly brings him to the ground", "Knee and Nearby Areas", "m", false);
	
	allBlunt[30] = new damage("area_1", "level_6", "d6_1", 14, 13, 3, 4, 0, "Strike comes down like a ton of bricks and smashes foot to paste", "Foot", "m", false);
	allBlunt[31] = new damage("area_1", "level_6", "d6_2", 14, 13, 3, 4, 0, "Powerful blow sweeps Foe onto his back. Bones break and muscles tear", "Shin and Lower Leg", "m", false);
	allBlunt[32] = new damage("area_1", "level_6", "d6_3", 14, 13, 3, 4, 0, "Powerful blow sweeps Foe onto his back. Bones break and muscles tear", "Shin and Lower Leg", "m", false);
	allBlunt[33] = new damage("area_1", "level_6", "d6_4", 14, 13, 3, 4, 0, "Powerful blow sweeps Foe onto his back. Bones break and muscles tear", "Shin and Lower Leg", "m", false);
	allBlunt[34] = new damage("area_1", "level_6", "d6_5", 14, 15, 3, 4, 0, "Blow to Foe's kneecap shatters it", "Knee and Nearby Areas", "m", false);
	allBlunt[35] = new damage("area_1", "level_6", "d6_6", 14, 15, 3, 4, 0, "Blow to Foe's kneecap shatters it", "Knee and Nearby Areas", "m", false);
	
	// area two values
	allBlunt[36] = new damage("area_2", "level_1", "d6_1", 2, 3, 0, 0, 0, "Foe evades frantically", "Knee and Nearby Areas", "m", false);
	allBlunt[37] = new damage("area_2", "level_1", "d6_2", 2, 3, 0, 0, 0, "Foe evades frantically", "Knee and Nearby Areas", "m", false);			
	allBlunt[38] = new damage("area_2", "level_1", "d6_3", 2, 2, 0, 0, 0, "Light swing to Foe's thigh leaves a mark", "Thigh", "m", false);
	allBlunt[39] = new damage("area_2", "level_1", "d6_4", 2, 2, 0, 0, 0, "Light swing to Foe's thigh leaves a mark", "Thigh", "m", false);
	allBlunt[40] = new damage("area_2", "level_1", "d6_5", 2, 2, 0, 0, 0, "Light swing to Foe's thigh leaves a mark", "Thigh", "m", false);
	allBlunt[41] = new damage("area_2", "level_1", "d6_6", 2, 2, 0, 0, 0, "Blow causes Foe to backpedal away", "Hip", "m", false);
	
	allBlunt[42] = new damage("area_2", "level_2", "d6_1", 5, 5, 0, 1, 0, "Foe dances away, nearly avoiding the blow", "Knee and Nearby Areas", "m", false);
	allBlunt[43] = new damage("area_2", "level_2", "d6_2", 5, 5, 0, 1, 0, "Foe dances away, nearly avoiding the blow", "Knee and Nearby Areas", "m", false);			
	allBlunt[44] = new damage("area_2", "level_2", "d6_3", 5, 4, 0, 1, 0, "Strike blunted by clothing", "Thigh", "m", false);
	allBlunt[45] = new damage("area_2", "level_2", "d6_4", 5, 4, 0, 1, 0, "Strike blunted by clothing", "Thigh", "m", false);
	allBlunt[46] = new damage("area_2", "level_2", "d6_5", 5, 4, 0, 1, 0, "Strike blunted by clothing", "Thigh", "m", false);
	allBlunt[47] = new damage("area_2", "level_2", "d6_6", 5, 4, 0, 0, 0, "Blow to Foe's left hip spins him", "Hip", "m", false);
	
	allBlunt[48] = new damage("area_2", "level_3", "d6_1", 7, 7, 1, 2, 0, "Blow lands just above knee. Minor fracture", "Knee and Nearby Areas", "m", false);
	allBlunt[49] = new damage("area_2", "level_3", "d6_2", 7, 7, 1, 2, 0, "Blow lands just above knee. Minor fracture", "Knee and Nearby Areas", "m", false);			
	allBlunt[50] = new damage("area_2", "level_3", "d6_3", 7, 6, 0, 2, 0, "No blood, but Foe yells in pain", "Thigh", "m", false);
	allBlunt[51] = new damage("area_2", "level_3", "d6_4", 7, 6, 0, 2, 0, "No blood, but Foe yells in pain", "Thigh", "m", false);
	allBlunt[52] = new damage("area_2", "level_3", "d6_5", 7, 6, 0, 2, 0, "No blood, but Foe yells in pain", "Thigh", "m", false);
	allBlunt[53] = new damage("area_2", "level_3", "d6_6", 7, 7, 1, 1, 0, "Blow to Foe's hip causes his right leg to shake uncontrollably", "Hip", "m", false);
	
	allBlunt[54] = new damage("area_2", "level_4", "d6_1", 9, 10, 2, 3, 0, "Disorient Foe with a tricky shot to the leg", "Knee and Nearby Areas", "m", false);
	allBlunt[55] = new damage("area_2", "level_4", "d6_2", 9, 10, 2, 3, 0, "Disorient Foe with a tricky shot to the leg", "Knee and Nearby Areas", "m", false);			
	allBlunt[56] = new damage("area_2", "level_4", "d6_3", 9, 8, 1, 2, 0, "Strong blow breaks Foe's guard, leaving him unbalanced", "Thigh", "m", false);
	allBlunt[57] = new damage("area_2", "level_4", "d6_4", 9, 8, 1, 2, 0, "Strong blow breaks Foe's guard, leaving him unbalanced", "Thigh", "m", false);
	allBlunt[58] = new damage("area_2", "level_4", "d6_5", 9, 8, 1, 2, 0, "Strong blow breaks Foe's guard, leaving him unbalanced", "Thigh", "m", false);
	allBlunt[59] = new damage("area_2", "level_4", "d6_6", 9, 9, 2, 2, 0, "Strike to side slips down into Foe's hip", "Hip", "m", false);
	
	allBlunt[60] = new damage("area_2", "level_5", "d6_1", 12, 13, 3, 3, 0, "Demolish Foe's knee joint", "Knee and Nearby Areas", "m", false);
	allBlunt[61] = new damage("area_2", "level_5", "d6_2", 12, 13, 3, 3, 0, "Demolish Foe's knee joint", "Knee and Nearby Areas");			
	allBlunt[62] = new damage("area_2", "level_5", "d6_3", 12, 11, 3, 3, 0, "Blow to Foe's right thigh crushes a variety of organs", "Thigh", "m", false);
	allBlunt[63] = new damage("area_2", "level_5", "d6_4", 12, 11, 3, 3, 0, "Blow to Foe's right thigh crushes a variety of organs", "Thigh", "m", false);
	allBlunt[64] = new damage("area_2", "level_5", "d6_5", 12, 11, 3, 3, 0, "Blow to Foe's right thigh crushes a variety of organs", "Thigh", "m", false);
	allBlunt[65] = new damage("area_2", "level_5", "d6_6", 12, 11, 3, 3, 0, "Blow thunders as it connects. Foe's hip contorts horribly", "Hip", "m", false);
	
	allBlunt[66] = new damage("area_2", "level_6", "d6_1", 14, 15, 3, 4, 0, "Foe makes a mistake and pays. You send him crashing to the ground", "Knee and Nearby Areas", "m", false);
	allBlunt[67] = new damage("area_2", "level_6", "d6_2", 14, 15, 3, 4, 0, "Foe makes a mistake and pays. You send him crashing to the ground", "Knee and Nearby Areas", "m", false);			
	allBlunt[68] = new damage("area_2", "level_6", "d6_3", 14, 13, 4, 4, 0, "Massive blow to thigh. Compound fracture severs an artery. Foe goes down hard", "Thigh", "m", false);
	allBlunt[69] = new damage("area_2", "level_6", "d6_4", 14, 13, 4, 4, 0, "Massive blow to thigh. Compound fracture severs an artery. Foe goes down hard", "Thigh", "m", false);
	allBlunt[70] = new damage("area_2", "level_6", "d6_5", 14, 13, 4, 4, 0, "Massive blow to thigh. Compound fracture severs an artery. Foe goes down hard", "Thigh", "m", false);
	allBlunt[71] = new damage("area_2", "level_6", "d6_6", "-", "-", "-", "-", "-", "Titan-like strike turns Foes hip to powder. He collapses and dies", "Hip", "m", true);
	
	// area three values
	allBlunt[72] = new damage("area_3", "level_1", "d6_1", 2, 2, 0, 0, 0, "Foe steps back and out of position", "Hip", "m", false);
	allBlunt[73] = new damage("area_3", "level_1", "d6_2", 3, 2, 0, 0, 0, "Foe dodges away before the full force of your strike connects", "Upper Abdominals", "m", false);			
	allBlunt[74] = new damage("area_3", "level_1", "d6_3", 3, 2, 0, 0, 0, "Foe dodges away before the full force of your strike connects", "Lower Abdominals", "m", false);
	allBlunt[75] = new damage("area_3", "level_1", "d6_4", 3, 2, 0, 0, 0, "Cheap shot to Foe's ribs", "Ribcage", "m", false);
	allBlunt[76] = new damage("area_3", "level_1", "d6_5", 3, 2, 0, 0, 0, "Cheap shot to Foe's ribs", "Ribcage", "m", false);
	allBlunt[77] = new damage("area_3", "level_1", "d6_6", "-", "-", "-", "-", "-", "Go to Arms (Area 7)", "-", "m", false);
	
	allBlunt[78] = new damage("area_3", "level_2", "d6_1", 5, 4, 0, 0, 0, "More noise than impact", "Hip", "m", false);
	allBlunt[79] = new damage("area_3", "level_2", "d6_2", 6, 4, 0, 0, 0, "Precise strike to Foe's abs", "Upper Abdominals", "m", false);			
	allBlunt[80] = new damage("area_3", "level_2", "d6_3", 6, 4, 0, 0, 0, "Precise strike to Foe's abs", "Lower Abdominals", "m", false);
	allBlunt[81] = new damage("area_3", "level_2", "d6_4", 6, 4, 0, 0, 0, "Shot too close to Foe's throat. He dodges away frantically", "Ribcage", "m", false);
	allBlunt[82] = new damage("area_3", "level_2", "d6_5", 4, 4, 0, 0, 0, "Shot too close to Foe's throat. He dodges away frantically", "Ribcage", "m", false);
	allBlunt[83] = new damage("area_3", "level_2", "d6_6", "-", "-", "-", "-", "-", "Go to Arms (Area 7)", "-", "m", false);
	
	allBlunt[84] = new damage("area_3", "level_3", "d6_1", 7, 7, 1, 1, 0, "Blow to Foe's hip causes him to rage", "Hip", "m", false);
	allBlunt[85] = new damage("area_3", "level_3", "d6_2", 9, 7, 1, 0, 0, "Foe walks into your blow, you leave him winded", "Upper Abdominals", "m", false);			
	allBlunt[86] = new damage("area_3", "level_3", "d6_3", 9, 7, 1, 0, 0, "Foe walks into your blow, you leave him winded", "Lower Abdominals", "m", false);
	allBlunt[87] = new damage("area_3", "level_3", "d6_4", 9, 7, 1, 0, 0, "Blow to chest. Foe seeks to regain his wind and survive", "Ribcage", "m", false);
	allBlunt[88] = new damage("area_3", "level_3", "d6_5", 9, 7, 1, 0, 0, "Blow to chest. Foe seeks to regain his wind and survive", "Ribcage", "m", false);
	allBlunt[89] = new damage("area_3", "level_3", "d6_6", "-", "-", "-", "-", "-", "Go to Arms (Area 7)", "-", "m", false);
	
	allBlunt[90] = new damage("area_3", "level_4", "d6_1", 9, 9, 2, 2, 0, "Miss Foe's arm and strike his hip", "Hip", "m", false);
	allBlunt[91] = new damage("area_3", "level_4", "d6_2", 12, 10, 3, 0, 0, "Foe dives away desperately, stumbling across the field", "Upper Abdominals", "m", false);			
	allBlunt[92] = new damage("area_3", "level_4", "d6_3", 12, 10, 3, 0, 0, "Foe dives away desperately, stumbling across the field", "Lower Abdominals", "m", false);
	allBlunt[93] = new damage("area_3", "level_4", "d6_4", 12, 10, 2, 0, 0, "Drive Foe's shield backward into ribs, breaking them", "Ribcage", "m", false);
	allBlunt[94] = new damage("area_3", "level_4", "d6_5", 12, 10, 2, 0, 0, "Drive Foe's shield backward into ribs, breaking them", "Ribcage", "m", false);
	allBlunt[95] = new damage("area_3", "level_4", "d6_6", "-", "-", "-", "-", "-", "Go to Arms (Area 7)", "-", "m", false);
	
	allBlunt[96] = new damage("area_3", "level_5", "d6_1", 12, 11, 3, 3, 0, "Deal Foe an Olympic blow to his left hip. Any one container on your Foe is flattened", "Hip", "m", false);
	allBlunt[97] = new damage("area_3", "level_5", "d6_2", 14, 13, 4, 0, 0, "Catch Foe in mid-swing and disarm him with crushing strike", "Upper Abdominals", "m", false);			
	allBlunt[98] = new damage("area_3", "level_5", "d6_3", 14, 13, 4, 0, 0, "Catch Foe in mid-swing and disarm him with crushing strike", "Lower Abdominals", "m", false);
	allBlunt[99] = new damage("area_3", "level_5", "d6_4", 14, 13, 4, 0, 0, "Strike drops Foe to his knees", "Ribcage", "m", false);
	allBlunt[100] = new damage("area_3", "level_5", "d6_5", 14, 13, 4, 0, 0, "Strike drops Foe to his knees", "Ribcage", "m", false);
	allBlunt[101] = new damage("area_3", "level_5", "d6_6", "-", "-", "-", "-", "-", "Go to Arms (Area 7)", "-", "m", false);

	allBlunt[102] = new damage("area_3", "level_6", "d6_1", "-", "-", "-", "-", "-", "Crush Foe's hip. Staggers to the ground and dies", "Hip", "m", true);
	allBlunt[103] = new damage("area_3", "level_6", "d6_2", "-", "-", "-", "-", "-", "Blast to Foe's abdomen drives a bone into vital organs. Foe dies gasping", "Upper Abdominals", "m", true);			
	allBlunt[104] = new damage("area_3", "level_6", "d6_3", "-", "-", "-", "-", "-", "Blast to Foe's abdomen drives a bone into vital organs. Foe dies gasping", "Lower Abdominals", "m", true);
	allBlunt[105] = new damage("area_3", "level_6", "d6_4", "-", "-", "-", "-", "-", "Demolish Foe's chest cavity. He grips your arm and burbles his last", "Ribcage", "m", true);
	allBlunt[106] = new damage("area_3", "level_6", "d6_5", "-", "-", "-", "-", "-", "Demolish Foe's chest cavity. He grips your arm and burbles his last", "Ribcage", "m", true);
	allBlunt[107] = new damage("area_3", "level_6", "d6_6", "-", "-", "-", "-", "-", "Go to Arms (Area 7)", "-", "m", false);
	
	// area four values
	allBlunt[108] = new damage("area_4", "level_1", "d6_1", 2, 2, 0, 0, 0, "Foe is not sure what you're up to", "Upper Arm and Shoulder", "m", false);
	allBlunt[109] = new damage("area_4", "level_1", "d6_2", 2, 2, 0, 0, 0, "Foe is not sure what you're up to", "Upper Arm and Shoulder", "m", false);			
	allBlunt[110] = new damage("area_4", "level_1", "d6_3", 3, 2, 0, 0, 0, "A sharp tap", "Upper Body", "m", false);
	allBlunt[111] = new damage("area_4", "level_1", "d6_4", 3, 2, 0, 0, 0, "Foe howls with rage", "Neck", "m", false);
	allBlunt[112] = new damage("area_4", "level_1", "d6_5", 4, 2, 0, 0, 0, "Terrific form that misses by a heartbeat", "Head (Lower), including the Face", "m", false);
	allBlunt[113] = new damage("area_4", "level_1", "d6_6", 3, 2, 0, 0, 0, "Light tap to the skull gives Foe a pounding headache", "Head (Upper)", "m", false);
	
	allBlunt[114] = new damage("area_4", "level_2", "d6_1", 5, 4, 0, 0, 0, "Foe sags under your strike", "Upper Arm and Shoulder", "m", false);
	allBlunt[115] = new damage("area_4", "level_2", "d6_2", 5, 4, 0, 0, 0, "Foe sags under your strike", "Upper Arm and Shoulder", "m", false);			
	allBlunt[116] = new damage("area_4", "level_2", "d6_3", 6, 4, 0, 0, 0, "Strike flows past Foe's guard and into his ribs", "Upper Body", "m", false);
	allBlunt[117] = new damage("area_4", "level_2", "d6_4", 6, 4, 0, 0, 0, "Close strike to neck panics Foe", "Neck", "m", false);
	allBlunt[118] = new damage("area_4", "level_2", "d6_5", 7, 4, 0, 1, 1, "Strike splits Foe's nose. His frantic defense saves him for now", "Head (Lower), including the Face", "m", false);
	allBlunt[119] = new damage("area_4", "level_2", "d6_6", 6, 4, 1, 1, 1, "Little blood, but he bellows like a wounded ox", "Head (Upper)", "m", false);
	
	allBlunt[120] = new damage("area_4", "level_3", "d6_1", 7, 6, 1, 0, 0, "Foe raises an arm to block your strike", "Upper Arm and Shoulder", "m", false);
	allBlunt[121] = new damage("area_4", "level_3", "d6_2", 7, 6, 1, 0, 0, "Foe raises an arm to block your strike", "Upper Arm and Shoulder", "m", false);			
	allBlunt[122] = new damage("area_4", "level_3", "d6_3", 9, 7, 1, 0, 0, "Your main effort misses, but you catch Foe on recovery", "Upper Body", "m", false);
	allBlunt[123] = new damage("area_4", "level_3", "d6_4", 8, 6, 1, 1, 0, "Foe's flashy moves earn him a slap to the Adam's Apple", "Neck", "m", false);
	allBlunt[124] = new damage("area_4", "level_3", "d6_5", 9, 5, 1, 2, 2, "Savage attack knocks out Foe's teeth", "Head (Lower), including the Face", "m", false);
	allBlunt[125] = new damage("area_4", "level_3", "d6_6", 8, 6, 1, 2, 3, "Blow to Foe's head pulps an ear", "Head (Upper)", "m", false);
	
	allBlunt[126] = new damage("area_4", "level_4", "d6_1", 9, 8, 3, 0, 0, "Miss Foe's head and strike his arm. He gasps and drops something", "Upper Arm and Shoulder", "m", false);
	allBlunt[127] = new damage("area_4", "level_4", "d6_2", 9, 8, 3, 0, 0, "Miss Foe's head and strike his arm. He gasps and drops something", "Upper Arm and Shoulder", "m", false);			
	allBlunt[128] = new damage("area_4", "level_4", "d6_3", 12, 10, 2, 0, 0, "Foe miscalculates his timing and lurches into your swing", "Upper Body", "m", false);
	allBlunt[129] = new damage("area_4", "level_4", "d6_4", 11, 8, 1, 2, 0, "You smash Foe's neck as he ducks a swing to the chest", "Neck", "m", false);
	allBlunt[130] = new damage("area_4", "level_4", "d6_5", 12, 7, 2, 3, 3, "Break Foe's jaw", "Head (Lower), including the Face", "m", false);
	allBlunt[131] = new damage("area_4", "level_4", "d6_6", 11, 8, 2, 3, 5, "Foe gasps, leans forward, and your strike crushes his face", "Head (Upper)", "m", false);
	
	allBlunt[132] = new damage("area_4", "level_5", "d6_1", 12, 11, 4, 0, 0, "Catch Foe in shoulder blade. Foe drops his guard and reels from your blow", "Upper Arm and Shoulder", "m", false);
	allBlunt[133] = new damage("area_4", "level_5", "d6_2", 12, 11, 4, 0, 0, "Catch Foe in shoulder blade. Foe drops his guard and reels from your blow", "Upper Arm and Shoulder", "m", false);			
	allBlunt[134] = new damage("area_4", "level_5", "d6_3", 14, 13, 4, 0, 0, "Slam Foe with little grace. He coughs blood from cracked lips", "Upper Body", "m", false);
	allBlunt[135] = new damage("area_4", "level_5", "d6_4", "-", "-", "-", "-", "-", "Blow snaps neck. Foe is paralyzed from the shoulders down", "Neck", "m", true);
	allBlunt[136] = new damage("area_4", "level_5", "d6_5", 14, 10, 3, 4, 4, "Strike to Foe's nose drives cartilage back into brain", "Head (Lower), including the Face", "m", false);
	allBlunt[137] = new damage("area_4", "level_5", "d6_6", "-", "-", "-", "-", "-", "Iron-fisted strike to crown of Foe's head drives skull into brain", "Head (Upper)", "m", true);
	
	allBlunt[138] = new damage("area_4", "level_6", "d6_1", 14, 13, 5, 0, 0, "Thunderous blow to shoulder crushes bone", "Upper Arm and Shoulder", "m", false);
	allBlunt[139] = new damage("area_4", "level_6", "d6_2", 14, 13, 5, 0, 0, "Thunderous blow to shoulder crushes bone", "Upper Arm and Shoulder", "m", false);			
	allBlunt[140] = new damage("area_4", "level_6", "d6_3", "-", "-", "-", "-", "-", "Savage blow pulps chest. Foe collapses to the ground", "Upper Body", "m", true);
	allBlunt[141] = new damage("area_4", "level_6", "d6_4", "-", "-", "-", "-", "-", "Foe's head snaps to a crazy angle. He drops like a brained cow, twitching limply", "Neck", "m", true);
	allBlunt[142] = new damage("area_4", "level_6", "d6_5", "-", "-", "-", "-", "-", "Blow to the face. If visored, it's driven into his face, killing him in 2 Limelight rounds. Otherwise, he dies instantly", "Head (Lower), including the Face", "m", true);
	allBlunt[143] = new damage("area_4", "level_6", "d6_6", "-", "-", "-", "-", "-", "Strike to forehead shatters Foe's brain. Instant Death", "Head (Upper)", "m", true);
	
	// area five values
	allBlunt[144] = new damage("area_5", "level_1", "d6_1", 2, 2, 0, 0, 0, "Your strike slides off", "Shoulders", "m", false);
	allBlunt[145] = new damage("area_5", "level_1", "d6_2", 2, 2, 0, 0, 0, "Your strike slides off", "Shoulders", "m", false);			
	allBlunt[146] = new damage("area_5", "level_1", "d6_3", 4, 2, 0, 0, 0, "Foe evades much of your strike's impact", "Head (Lower), including the Face", "m", false);
	allBlunt[147] = new damage("area_5", "level_1", "d6_4", 3, 2, 0, 0, 0, "A stinging blow", "Head (Upper)", "m", false);
	allBlunt[148] = new damage("area_5", "level_1", "d6_5", 3, 2, 0, 0, 0, "A stinging blow", "Head (Upper)", "m", false);
	allBlunt[149] = new damage("area_5", "level_1", "d6_6", 3, 2, 0, 0, 0, "A stinging blow", "Head (Upper)", "m", false);
	
	allBlunt[150] = new damage("area_5", "level_2", "d6_1", 5, 4, 0, 0, 0, "Modest strike to Foe's shield drives edge into shoulder", "Shoulders", "m", false);
	allBlunt[151] = new damage("area_5", "level_2", "d6_2", 5, 4, 0, 0, 0, "Modest strike to Foe's shield drives edge into shoulder", "Shoulders", "m", false);			
	allBlunt[152] = new damage("area_5", "level_2", "d6_3", 7, 4, 0, 1, 1, "Foe dances away from your swing", "Head (Lower), including the Face", "m", false);
	allBlunt[153] = new damage("area_5", "level_2", "d6_4", 6, 4, 1, 1, 1, "Foe slips, escaping the brunt of your attack", "Head (Upper)", "m", false);
	allBlunt[154] = new damage("area_5", "level_2", "d6_5", 6, 4, 1, 1, 1, "Foe slips, escaping the brunt of your attack", "Head (Upper)", "m", false);
	allBlunt[155] = new damage("area_5", "level_2", "d6_6", 6, 4, 1, 1, 1, "Foe slips, escaping the brunt of your attack", "Head (Upper)", "m", false);
	
	allBlunt[156] = new damage("area_5", "level_3", "d6_1", 7, 6, 1, 0, 0, "Foe bobs and weaves desperately to avoid your strike", "Shoulders", "m", false);
	allBlunt[157] = new damage("area_5", "level_3", "d6_2", 7, 6, 1, 0, 0, "Foe bobs and weaves desperately to avoid your strike", "Shoulders", "m", false);			
	allBlunt[158] = new damage("area_5", "level_3", "d6_3", 9, 5, 1, 2, 2, "Foe attempts to disarm you and takes strike to ear for his trouble", "Head (Lower), including the Face", "m", false);
	allBlunt[159] = new damage("area_5", "level_3", "d6_4", 8, 6, 1, 2, 3, "Blow drives Foe's shield back into his eyes", "Head (Upper)", "m", false);
	allBlunt[160] = new damage("area_5", "level_3", "d6_5", 8, 6, 1, 2, 3, "Blow drives Foe's shield back into his eyes", "Head (Upper)", "m", false);
	allBlunt[161] = new damage("area_5", "level_3", "d6_6", 8, 6, 1, 2, 3, "Blow drives Foe's shield back into his eyes", "Head (Upper)", "m", false);
	
	allBlunt[162] = new damage("area_5", "level_4", "d6_1", 9, 8, 3, 0, 0, "You slam Foe's shoulder, leaving him screeching", "Shoulders", "m", false);
	allBlunt[163] = new damage("area_5", "level_4", "d6_2", 9, 8, 3, 0, 0, "You slam Foe's shoulder, leaving him screeching", "Shoulders", "m", false);			
	allBlunt[164] = new damage("area_5", "level_4", "d6_3", 12, 7, 2, 3, 3, "Foe deflects your stroke down into his cheek", "Head (Lower), including the Face", "m", false);
	allBlunt[165] = new damage("area_5", "level_4", "d6_4", 11, 8, 2, 3, 5, "Devastating blow to Foe's head cause his eyes to glaze over", "Head (Upper)", "m", false);
	allBlunt[166] = new damage("area_5", "level_4", "d6_5", 11, 8, 2, 3, 5, "Devastating blow to Foe's head cause his eyes to glaze over", "Head (Upper)", "m", false);
	allBlunt[167] = new damage("area_5", "level_4", "d6_6", 11, 8, 2, 3, 5, "Devastating blow to Foe's head cause his eyes to glaze over", "Head (Upper)", "m", false);
	
	allBlunt[168] = new damage("area_5", "level_5", "d6_1", 12, 11, 4, 0, 0, "Titan-like swing drives Foe's own weapon into shoulder", "Shoulders", "m", false);
	allBlunt[169] = new damage("area_5", "level_5", "d6_2", 12, 11, 4, 0, 0, "Titan-like swing drives Foe's own weapon into shoulder", "Shoulders", "m", false);			
	allBlunt[170] = new damage("area_5", "level_5", "d6_3", 14, 10, 3, 4, 4, "Brilliant blow to chin sends Foe reeling", "Head (Lower), including the Face", "m", false);
	allBlunt[171] = new damage("area_5", "level_5", "d6_4", "-", "-", "-", "-", "-", "Furious stroke pulps both eye and brain. Dead before he hits the ground", "Head (Upper)", "m", true);
	allBlunt[172] = new damage("area_5", "level_5", "d6_5", "-", "-", "-", "-", "-", "Furious stroke pulps both eye and brain. Dead before he hits the ground", "Head (Upper)", "m", true);
	allBlunt[173] = new damage("area_5", "level_5", "d6_6", "-", "-", "-", "-", "-", "Furious stroke pulps both eye and brain. Dead before he hits the ground", "Head (Upper)", "m", true);
	
	allBlunt[174] = new damage("area_5", "level_6", "d6_1", 14, 13, 5, 0, 0, "That does it for him. Strike pulverizes Foe's shoulder blade", "Shoulders", "m", false);
	allBlunt[175] = new damage("area_5", "level_6", "d6_2", 14, 13, 5, 0, 0, "That does it for him. Strike pulverizes Foe's shoulder blade", "Shoulders", "m", false);			
	allBlunt[176] = new damage("area_5", "level_6", "d6_3", "-", "-", "-", "-", "-", "Mangle what was once Foe's face. Foe's nerveless fingers drop his weapon", "Head (Lower), including the Face", "m", true);
	allBlunt[177] = new damage("area_5", "level_6", "d6_4", "-", "-", "-", "-", "-", "Masterful strike to Foe's hairline kills him instantly", "Head (Upper)", "m", true);
	allBlunt[178] = new damage("area_5", "level_6", "d6_5", "-", "-", "-", "-", "-", "Masterful strike to Foe's hairline kills him instantly", "Head (Upper)", "m", true);
	allBlunt[179] = new damage("area_5", "level_6", "d6_6", "-", "-", "-", "-", "-", "Masterful strike to Foe's hairline kills him instantly", "Head (Upper)", "m", true);
	
	// area six values
	allBlunt[180] = new damage("area_6", "level_1", "d6_1", 2, 2, 0, 0, 0, "Foe swears and moves into a defensive posture", "Inner Thigh", "m", false);
	allBlunt[181] = new damage("area_6", "level_1", "d6_2", 2, 2, 0, 0, 0, "Foe swears and moves into a defensive posture", "Inner Thigh", "m", false);			
	allBlunt[182] = new damage("area_6", "level_1", "d6_3", 2, 2, 0, 0, 0, "Foe swears and moves into a defensive posture", "Inner Thigh", "m", false);
	allBlunt[183] = new damage("area_6", "level_1", "d6_4", 5, 6, 0, 0, 0, "Close call that might have been fatal", "Groin (Male)", "m", false);
	allBlunt[184] = new damage("area_6", "level_1", "d6_4", 2, 2, 0, 0, 0, "Close call that might have been fatal", "Groin (Female)", "f", false);
	allBlunt[185] = new damage("area_6", "level_1", "d6_5", 3, 2, 0, 0, 0, "Strike fouled by poor attack angle", "Abdomen", "m", false);
	allBlunt[186] = new damage("area_6", "level_1", "d6_6", 4, 2, 0, 0, 0, "Foe leans far back to evade blow. He is off-balance", "Head (Lower) including the Face", "m", false);
	
	allBlunt[187] = new damage("area_6", "level_2", "d6_1", 5, 4, 0, 1, 0, "Foe steps just out of range, fouling the blow", "Inner Thigh", "m", false);
	allBlunt[188] = new damage("area_6", "level_2", "d6_2", 5, 4, 0, 1, 0, "Foe steps just out of range, fouling the blow", "Inner Thigh", "m", false);			
	allBlunt[189] = new damage("area_6", "level_2", "d6_3", 5, 4, 0, 1, 0, "Foe steps just out of range, fouling the blow", "Inner Thigh", "m", false);
	allBlunt[190] = new damage("area_6", "level_2", "d6_4", 9, 8, 0, 0, 0, "Strike to Foe's groin forces him back five feet", "Groin (Male)", "m", false);
	allBlunt[191] = new damage("area_6", "level_2", "d6_4", 5, 4, 0, 0, 0, "Strike to Foe's groin forces her back five feet", "Groin (Female)", "f", false);
	allBlunt[192] = new damage("area_6", "level_2", "d6_5", 6, 4, 0, 0, 0, "You knock the air from Foe's lungs", "Abdomen", "m", false);
	allBlunt[193] = new damage("area_6", "level_2", "d6_6", 7, 4, 0, 1, 1, "Your swing raps Foe's jaw", "Head (Lower) including the Face", "m", false);
	
	allBlunt[194] = new damage("area_6", "level_3", "d6_1", 7, 6, 0, 2, 0, "Foe howls in pain", "Inner Thigh", "m", false);
	allBlunt[195] = new damage("area_6", "level_3", "d6_2", 7, 6, 0, 2, 0, "Foe howls in pain", "Inner Thigh", "m", false);			
	allBlunt[196] = new damage("area_6", "level_3", "d6_3", 7, 6, 0, 2, 0, "Foe howls in pain", "Inner Thigh", "m", false);
	allBlunt[197] = new damage("area_6", "level_3", "d6_4", 11, 9, 1, 1, 0, "Foe limps away in agony", "Groin (Male)", "m", false);
	allBlunt[198] = new damage("area_6", "level_3", "d6_4", 7, 7, 0, 1, 0, "Foe limps away in agony", "Groin (Female)", "f", false);
	allBlunt[199] = new damage("area_6", "level_3", "d6_5", 9, 7, 1, 0, 0, "Bash to the gut has your Foe spitting blood", "Abdomen", "m", false);
	allBlunt[200] = new damage("area_6", "level_3", "d6_6", 9, 5, 1, 2, 2, "Foe's lips burst from blow's impact", "Head (Lower) including the Face", "m", false);
	
	allBlunt[201] = new damage("area_6", "level_4", "d6_1", 9, 8, 1, 2, 0, "Blow to Foe's thigh makes him stumble to the right", "Inner Thigh", "m", false);
	allBlunt[202] = new damage("area_6", "level_4", "d6_2", 9, 8, 1, 2, 0, "Blow to Foe's thigh makes him stumble to the right", "Inner Thigh", "m", false);			
	allBlunt[203] = new damage("area_6", "level_4", "d6_3", 9, 8, 1, 2, 0, "Blow to Foe's thigh makes him stumble to the right", "Inner Thigh", "m", false);
	allBlunt[204] = new damage("area_6", "level_4", "d6_4", 13, 10, 1, 2, 0, "Foe vomits from the impact", "Groin (Male)", "m", false);
	allBlunt[205] = new damage("area_6", "level_4", "d6_4", 9, 9, 1, 2, 0, "Foe vomits from the impact", "Groin (Female)", "f", false);
	allBlunt[206] = new damage("area_6", "level_4", "d6_5", 12, 10, 3, 0, 0, "Lightning strike to Foe's gut has him gasping. Internal bleeding", "Abdomen", "m", false);
	allBlunt[207] = new damage("area_6", "level_4", "d6_6", 12, 7, 2, 3, 3, "Vicious swing removes Foe's nose and upper lip", "Head (Lower) including the Face", "m", false);
	
	allBlunt[208] = new damage("area_6", "level_5", "d6_1", 12, 11, 3, 3, 0, "Foe arches in agony from your strike", "Inner Thigh", "m", false);
	allBlunt[209] = new damage("area_6", "level_5", "d6_2", 12, 11, 3, 3, 0, "Foe arches in agony from your strike", "Inner Thigh", "m", false);			
	allBlunt[210] = new damage("area_6", "level_5", "d6_3", 12, 11, 3, 3, 0, "Foe arches in agony from your strike", "Inner Thigh", "m", false);
	allBlunt[211] = new damage("area_6", "level_5", "d6_4", 15, 12, 3, 3, 0, "Blow causes Foe to rave with pain", "Groin (Male)", "m", false);
	allBlunt[212] = new damage("area_6", "level_5", "d6_4", 12, 11, 3, 3, 0, "Blow causes Foe to rave with pain", "Groin (Female)", "f", false);
	allBlunt[213] = new damage("area_6", "level_5", "d6_5", 14, 13, 4, 0, 0, "Foe doubles over in agony, spitting blood", "Abdomen", "m", false);
	allBlunt[214] = new damage("area_6", "level_5", "d6_6", 14, 10, 3, 4, 4, "Upward stroke drives Foe's nose cartilage into brain", "Head (Lower) including the Face", "m", false);
	
	allBlunt[215] = new damage("area_6", "level_6", "d6_1", 14, 13, 4, 4, 0, "Foe's leg nearly torn from body", "Inner Thigh", "m", false);
	allBlunt[216] = new damage("area_6", "level_6", "d6_2", 14, 13, 4, 4, 0, "Foe's leg nearly torn from body", "Inner Thigh", "m", false);			
	allBlunt[217] = new damage("area_6", "level_6", "d6_3", 14, 13, 4, 4, 0, "Foe's leg nearly torn from body", "Inner Thigh", "m", false);
	allBlunt[218] = new damage("area_6", "level_6", "d6_4", 17, 14, 4, 4, 0, "Master strike to Foe's groin brings Foe to his knees. Massive internal bleeding", "Groin (Male)", "m", false);
	allBlunt[219] = new damage("area_6", "level_6", "d6_4", 14, 13, 4, 4, 0, "Master strike to Foe's groin brings Foe to his knees. Massive internal bleeding", "Groin (Female)", "f", false);
	allBlunt[220] = new damage("area_6", "level_6", "d6_5", 17, 16, 5, 0, 0, "Savage strike leaves Foe prostrate at your feet", "Abdomen", "m", false);
	allBlunt[221] = new damage("area_6", "level_6", "d6_6", "-", "-", "-", "-", "-", "Foe's face sheared off from force of blow. Foe dances back and collapses dead", "Head (Lower) including the Face", "m", true);
	
	// area seven values
	allBlunt[222] = new damage("area_7", "level_1", "d6_1", 2, 2, 0, 0, 0, "Strike failed to connect properly", "Hand", "m", false);
	allBlunt[223] = new damage("area_7", "level_1", "d6_2", 2, 2, 0, 0, 0, "Strike lands without energy", "Forearm", "m", false);			
	allBlunt[224] = new damage("area_7", "level_1", "d6_3", 2, 2, 0, 0, 0, "Strike lands without energy", "Forearm", "m", false);
	allBlunt[225] = new damage("area_7", "level_1", "d6_4", 2, 2, 0, 0, 0, "Glancing blow caught by Foe's shield", "Elbow", "m", false);
	allBlunt[226] = new damage("area_7", "level_1", "d6_5", 2, 2, 0, 0, 0, "Foe evades and maneuvers for a better position", "Upper Arm and Shoulder", "m", false);
	allBlunt[227] = new damage("area_7", "level_1", "d6_6", 2, 2, 0, 0, 0, "Foe evades and maneuvers for a better position", "Upper Arm and Shoulder", "m", false);
	
	allBlunt[228] = new damage("area_7", "level_2", "d6_1", 5, 4, 0, 0, 0, "Strike raps Foe's knuckles", "Hand", "m", false);
	allBlunt[229] = new damage("area_7", "level_2", "d6_2", 5, 4, 0, 0, 0, "Strike makes Foe flinch", "Forearm", "m", false);			
	allBlunt[230] = new damage("area_7", "level_2", "d6_3", 5, 4, 0, 0, 0, "Strike makes Foe flinch", "Forearm", "m", false);
	allBlunt[231] = new damage("area_7", "level_2", "d6_4", 5, 4, 0, 0, 0, "Foe goes low to evade your attack", "Elbow", "m", false);
	allBlunt[232] = new damage("area_7", "level_2", "d6_5", 5, 4, 0, 0, 0, "Minor shoulder wound staggers Foe", "Upper Arm and Shoulder", "m", false);
	allBlunt[233] = new damage("area_7", "level_2", "d6_6", 5, 4, 0, 0, 0, "Minor shoulder wound staggers Foe", "Upper Arm and Shoulder", "m", false);
	
	allBlunt[234] = new damage("area_7", "level_3", "d6_1", 7, 6, 1, 0, 0, "Strike crosses Foe's hand. If he has a gauntlet it's knocked off", "Hand", "m", false);
	allBlunt[235] = new damage("area_7", "level_3", "d6_2", 7, 6, 1, 0, 0, "Strike numbs Foe's forearm", "Forearm", "m", false);			
	allBlunt[236] = new damage("area_7", "level_3", "d6_3", 7, 6, 1, 0, 0, "Strike numbs Foe's forearm", "Forearm", "m", false);
	allBlunt[237] = new damage("area_7", "level_3", "d6_4", 7, 6, 1, 0, 0, "Strike causes Foe to panic", "Elbow", "m", false);
	allBlunt[238] = new damage("area_7", "level_3", "d6_5", 7, 6, 1, 0, 0, "Strike to upper arm causes for to retreat", "Upper Arm and Shoulder", "m", false);
	allBlunt[239] = new damage("area_7", "level_3", "d6_6", 7, 6, 1, 0, 0, "Strike to upper arm causes for to retreat", "Upper Arm and Shoulder", "m", false);
	
	allBlunt[240] = new damage("area_7", "level_4", "d6_1", 9, 8, 2, 0, 0, "Blow shatters several fingers. Blood streams from wound", "Hand", "m", false);
	allBlunt[241] = new damage("area_7", "level_4", "d6_2", 9, 8, 2, 0, 0, "Solid bash splinters bone", "Forearm", "m", false);			
	allBlunt[242] = new damage("area_7", "level_4", "d6_3", 9, 8, 2, 0, 0, "Solid bash splinters bone", "Forearm", "m", false);
	allBlunt[243] = new damage("area_7", "level_4", "d6_4", 9, 8, 2, 0, 0, "Drive Foe's elbow into his side. Internal bleeding", "Elbow", "m", false);
	allBlunt[244] = new damage("area_7", "level_4", "d6_5", 9, 8, 3, 0, 0, "Strike to Foe's arm elicits howls of pain", "Upper Arm and Shoulder", "m", false);
	allBlunt[245] = new damage("area_7", "level_4", "d6_6", 9, 8, 3, 0, 0, "Strike to Foe's arm elicits howls of pain", "Upper Arm and Shoulder", "m", false);
	
	allBlunt[246] = new damage("area_7", "level_5", "d6_1", 12, 10, 3, 0, 0, "Strike crushes Foe's wrist", "Hand", "m", false);
	allBlunt[247] = new damage("area_7", "level_5", "d6_2", 12, 10, 3, 0, 0, "Foe blocks your strike with his forearm. He drops his weapon", "Forearm", "m", false);			
	allBlunt[248] = new damage("area_7", "level_5", "d6_3", 12, 10, 3, 0, 0, "Foe blocks your strike with his forearm. He drops his weapon", "Forearm", "m", false);
	allBlunt[249] = new damage("area_7", "level_5", "d6_4", 12, 10, 3, 0, 0, "Blow sends bone shards flying", "Elbow", "m", false);
	allBlunt[250] = new damage("area_7", "level_5", "d6_5", 12, 11, 4, 0, 0, "Reach long and catch Foe in his upper arm. His eyes glaze over", "Upper Arm and Shoulder", "m", false);
	allBlunt[251] = new damage("area_7", "level_5", "d6_6", 12, 11, 4, 0, 0, "Reach long and catch Foe in his upper arm. His eyes glaze over", "Upper Arm and Shoulder", "m", false);
	
	allBlunt[252] = new damage("area_7", "level_6", "d6_1", 14, 12, 3, 0, 0, "Crush Foe's hand to pulp with masterful strike", "Hand", "m", false);
	allBlunt[253] = new damage("area_7", "level_6", "d6_2", 14, 12, 3, 0, 0, "Blow destroys Foe's forearm. Arm is useless", "Forearm", "m", false);			
	allBlunt[254] = new damage("area_7", "level_6", "d6_3", 14, 12, 3, 0, 0, "Blow destroys Foe's forearm. Arm is useless", "Forearm", "m", false);
	allBlunt[255] = new damage("area_7", "level_6", "d6_4", 14, 12, 3, 0, 0, "Strike shatters Foe's elbow. Foe screams his head off", "Elbow", "m", false);
	allBlunt[256] = new damage("area_7", "level_6", "d6_5", 14, 13, 5, 0, 0, "Strike Foe in weapon arm, the bone is broken. Arm is useless, artery is open", "Upper Arm and Shoulder", "m", false);
	allBlunt[257] = new damage("area_7", "level_6", "d6_6", 14, 13, 5, 0, 0, "Strike Foe in weapon arm, the bone is broken. Arm is useless, artery is open", "Upper Arm and Shoulder", "m", false);
	
	// area eight values
	allBlunt[258] = new damage("area_8", "level_1", "d6_1", 1, 2, 0, 0, 0, "Foe's deft footwork saves him from the worst", "Foot", "m", false);
	allBlunt[259] = new damage("area_8", "level_1", "d6_2", 1, 2, 0, 0, 0, "Not much weight to your strike, but he yells", "Shin and Lower Leg", "m", false);			
	allBlunt[260] = new damage("area_8", "level_1", "d6_3", 1, 2, 0, 0, 0, "Not much weight to your strike, but he yells", "Shin and Lower Leg", "m", false);
	allBlunt[261] = new damage("area_8", "level_1", "d6_4", 1, 2, 0, 0, 0, "Not much weight to your strike, but he yells", "Shin and Lower Leg", "m", false);
	allBlunt[262] = new damage("area_8", "level_1", "d6_5", 2, 3, 0, 0, 0, "Foe grits his teeth", "Knee and Nearby Areas", "m", false);
	allBlunt[263] = new damage("area_8", "level_1", "d6_6", "-", "-", "-", "-", "-", "Missed the target - better luck next time", "Passed between Legs", "m", false);
	
	allBlunt[264] = new damage("area_8", "level_2", "d6_1", 4, 4, 0, 1, 0, "Foe dances back from your strike", "Foot", "m", false);
	allBlunt[265] = new damage("area_8", "level_2", "d6_2", 4, 4, 0, 1, 0, "Hard crack to the shin-bone", "Shin and Lower Leg", "m", false);			
	allBlunt[266] = new damage("area_8", "level_2", "d6_3", 4, 4, 0, 1, 0, "Hard crack to the shin-bone", "Shin and Lower Leg", "m", false);
	allBlunt[267] = new damage("area_8", "level_2", "d6_4", 4, 4, 0, 1, 0, "Hard crack to the shin-bone", "Shin and Lower Leg", "m", false);
	allBlunt[268] = new damage("area_8", "level_2", "d6_5", 5, 5, 0, 1, 0, "Foe staggers back and assumes a defensive posture", "Knee and Nearby Areas", "m", false);
	allBlunt[269] = new damage("area_8", "level_2", "d6_6", "-", "-", "-", "-", "-", "Missed the target - better luck next time", "Passed between Legs", "m", false);
	
	allBlunt[270] = new damage("area_8", "level_3", "d6_1", 6, 6, 1, 2, 0, "Solid strike to Foe's instep has him cursing", "Foot", "m", false);
	allBlunt[271] = new damage("area_8", "level_3", "d6_2", 6, 6, 1, 2, 0, "As Foe spins away, you blast his calf", "Shin and Lower Leg", "m", false);			
	allBlunt[272] = new damage("area_8", "level_3", "d6_3", 6, 6, 1, 2, 0, "As Foe spins away, you blast his calf", "Shin and Lower Leg", "m", false);
	allBlunt[273] = new damage("area_8", "level_3", "d6_4", 6, 6, 1, 2, 0, "As Foe spins away, you blast his calf", "Shin and Lower Leg", "m", false);
	allBlunt[274] = new damage("area_8", "level_3", "d6_5", 7, 7, 1, 2, 0, "Light swing connects with Foe's kneecap", "Knee and Nearby Areas", "m", false);
	allBlunt[275] = new damage("area_8", "level_3", "d6_6", "-", "-", "-", "-", "-", "Missed the target - better luck next time", "Passed between Legs", "m", false);
	
	allBlunt[276] = new damage("area_8", "level_4", "d6_1", 9, 8, 2, 2, 0, "Authoritative blow delivered to Foe's heel has him gasping in pain", "Foot", "m", false);
	allBlunt[277] = new damage("area_8", "level_4", "d6_2", 9, 8, 2, 3, 0, "Cheap shot to Foe's shin leaves him ashen with pain", "Shin and Lower Leg", "m", false);			
	allBlunt[278] = new damage("area_8", "level_4", "d6_3", 9, 8, 2, 3, 0, "Cheap shot to Foe's shin leaves him ashen with pain", "Shin and Lower Leg", "m", false);
	allBlunt[279] = new damage("area_8", "level_4", "d6_4", 9, 8, 2, 3, 0, "Cheap shot to Foe's shin leaves him ashen with pain", "Shin and Lower Leg", "m", false);
	allBlunt[280] = new damage("area_8", "level_4", "d6_5", 10, 10, 1, 3, 0, "Powerful thrust drives Foe's weapon into his knee", "Knee and Nearby Areas", "m", false);
	allBlunt[281] = new damage("area_8", "level_4", "d6_6", "-", "-", "-", "-", "-", "Missed the target - better luck next time", "Passed between Legs", "m", false);
	
	allBlunt[282] = new damage("area_8", "level_5", "d6_1", 11, 11, 3, 3, 0, "Savage thrust to Foe's instep crushes bone and tears muscle", "Foot", "m", false);
	allBlunt[283] = new damage("area_8", "level_5", "d6_2", 11, 11, 3, 3, 0, "Foe leapt right into your low thrust", "Shin and Lower Leg", "m", false);			
	allBlunt[284] = new damage("area_8", "level_5", "d6_3", 11, 11, 3, 3, 0, "Foe leapt right into your low thrust", "Shin and Lower Leg", "m", false);
	allBlunt[285] = new damage("area_8", "level_5", "d6_4", 11, 11, 3, 3, 0, "Foe leapt right into your low thrust", "Shin and Lower Leg", "m", false);
	allBlunt[286] = new damage("area_8", "level_5", "d6_5", 12, 13, 3, 3, 0, "Foe blocks your thrust to groin with his leg. He raves with pain", "Knee and Nearby Areas", "m", false);
	allBlunt[287] = new damage("area_8", "level_5", "d6_6", "-", "-", "-", "-", "-", "Missed the target - better luck next time", "Passed between Legs", "m", false);
	
	allBlunt[288] = new damage("area_8", "level_6", "d6_1", 14, 13, 3, 4, 0, "Foe tried to kick you. Your response shatters his foot completely", "Foot", "m", false);
	allBlunt[289] = new damage("area_8", "level_6", "d6_2", 14, 13, 3, 4, 0, "Pile-driving strike to shin snaps Foe's leg in half. Foe stunned with pain", "Shin and Lower Leg", "m", false);			
	allBlunt[290] = new damage("area_8", "level_6", "d6_3", 14, 13, 3, 4, 0, "Pile-driving strike to shin snaps Foe's leg in half. Foe stunned with pain", "Shin and Lower Leg", "m", false);
	allBlunt[291] = new damage("area_8", "level_6", "d6_4", 14, 13, 3, 4, 0, "Pile-driving strike to shin snaps Foe's leg in half. Foe stunned with pain", "Shin and Lower Leg", "m", false);
	allBlunt[292] = new damage("area_8", "level_6", "d6_5", 15, 15, 3, 4, 0, "Foe mistimes his attack and plants his leg directly beneath your strike", "Knee and Nearby Areas", "m", false);
	allBlunt[293] = new damage("area_8", "level_6", "d6_6", "-", "-", "-", "-", "-", "Missed the target - better luck next time", "Passed between Legs", "m", false);
	
	// area nine values
	allBlunt[294] = new damage("area_9", "level_1", "d6_1", 2, 3, 0, 0, 0, "Clumsy strike taps the target", "Knee and Nearby Areas", "m", false);
	allBlunt[295] = new damage("area_9", "level_1", "d6_2", 2, 2, 0, 0, 0, "Strike slides off", "Thigh", "m", false);
	allBlunt[296] = new damage("area_9", "level_1", "d6_3", 2, 2, 0, 0, 0, "Strike slides off", "Thigh", "m", false);
	allBlunt[297] = new damage("area_9", "level_1", "d6_4", 2, 2, 0, 0, 0, "Strike slides off", "Thigh", "m", false);
	allBlunt[298] = new damage("area_9", "level_1", "d6_5", 2, 2, 0, 0, 0, "Strike slides off", "Thigh", "m", false);
	allBlunt[299] = new damage("area_9", "level_1", "d6_6", 2, 2, 0, 0, 0, "Foe leans back just in time to save himself", "Hip", "m", false);
	
	allBlunt[300] = new damage("area_9", "level_2", "d6_1", 5, 5, 0, 1, 0, "Foe slips to the left and avoids the brunt of the strike", "Knee and Nearby Areas", "m", false);
	allBlunt[301] = new damage("area_9", "level_2", "d6_2", 5, 4, 0, 1, 0, "Thrust clips Foe", "Thigh", "m", false);
	allBlunt[302] = new damage("area_9", "level_2", "d6_3", 5, 4, 0, 1, 0, "Thrust clips Foe", "Thigh", "m", false);
	allBlunt[303] = new damage("area_9", "level_2", "d6_4", 5, 4, 0, 1, 0, "Thrust clips Foe", "Thigh", "m", false);
	allBlunt[304] = new damage("area_9", "level_2", "d6_5", 5, 4, 0, 1, 0, "Thrust clips Foe", "Thigh", "m", false);
	allBlunt[305] = new damage("area_9", "level_2", "d6_6", 5, 4, 0, 0, 0, "Foe is getting nervous", "Hip", "m", false);
	
	allBlunt[306] = new damage("area_9", "level_3", "d6_1", 7, 7, 1, 2, 0, "Cheap shot to the kneecap forces Foe to give up ground", "Knee and Nearby Areas", "m", false);
	allBlunt[307] = new damage("area_9", "level_3", "d6_2", 7, 6, 0, 2, 0, "Light thrust has Foe off-balance", "Thigh", "m", false);
	allBlunt[308] = new damage("area_9", "level_3", "d6_3", 7, 6, 0, 2, 0, "Light thrust has Foe off-balance", "Thigh", "m", false);
	allBlunt[309] = new damage("area_9", "level_3", "d6_4", 7, 6, 0, 2, 0, "Light thrust has Foe off-balance", "Thigh", "m", false);
	allBlunt[310] = new damage("area_9", "level_3", "d6_5", 7, 6, 0, 2, 0, "Light thrust has Foe off-balance", "Thigh", "m", false);
	allBlunt[311] = new damage("area_9", "level_3", "d6_6", 7, 7, 1, 1, 0, "Foe's clumsy footwork costs him", "Hip", "m", false);
	
	allBlunt[312] = new damage("area_9", "level_4", "d6_1", 10, 10, 2, 3, 0, "You fake Foe into stepping into your swing", "Knee and Nearby Areas", "m", false);
	allBlunt[313] = new damage("area_9", "level_4", "d6_2", 9, 8, 1, 2, 0, "Solid slam to thigh has Foe staggering. Blood pools under his feet", "Thigh", "m", false);
	allBlunt[314] = new damage("area_9", "level_4", "d6_3", 9, 8, 1, 2, 0, "Solid slam to thigh has Foe staggering. Blood pools under his feet", "Thigh", "m", false);
	allBlunt[315] = new damage("area_9", "level_4", "d6_4", 9, 8, 1, 2, 0, "Solid slam to thigh has Foe staggering. Blood pools under his feet", "Thigh", "m", false);
	allBlunt[316] = new damage("area_9", "level_4", "d6_5", 9, 8, 1, 2, 0, "Solid slam to thigh has Foe staggering. Blood pools under his feet", "Thigh", "m", false);
	allBlunt[317] = new damage("area_9", "level_4", "d6_6", 9, 9, 2, 2, 0, "Foe screams as your thrust connects with his hip", "Hip", "m", false);
	
	allBlunt[318] = new damage("area_9", "level_5", "d6_1", 12, 13, 3, 3, 0, "Miss Foe's hip and strike his knee. He gasps and spits up blood", "Knee and Nearby Areas", "m", false);
	allBlunt[319] = new damage("area_9", "level_5", "d6_2", 12, 11, 3, 3, 0, "Blow to Foe's thigh causes his left leg to tremble and shake", "Thigh", "m", false);
	allBlunt[320] = new damage("area_9", "level_5", "d6_3", 12, 11, 3, 3, 0, "Blow to Foe's thigh causes his left leg to tremble and shake", "Thigh", "m", false);
	allBlunt[321] = new damage("area_9", "level_5", "d6_4", 12, 11, 3, 3, 0, "Blow to Foe's thigh causes his left leg to tremble and shake", "Thigh", "m", false);
	allBlunt[322] = new damage("area_9", "level_5", "d6_5", 12, 11, 3, 3, 0, "Blow to Foe's thigh causes his left leg to tremble and shake", "Thigh", "m", false);
	allBlunt[323] = new damage("area_9", "level_5", "d6_6", 12, 11, 3, 3, 0, "Crippling strike strips equipment from left side of Foe's waist", "Hip", "m", false);
	
	allBlunt[324] = new damage("area_9", "level_6", "d6_1", 15, 15, 3, 4, 0, "Your powerful thrust buckles Foe's knee and brings him to the ground", "Knee and Nearby Areas", "m", false);
	allBlunt[325] = new damage("area_9", "level_6", "d6_2", 14, 13, 4, 4, 0, "Foe screeches and babbles something at you before collapsing", "Thigh", "m", false);
	allBlunt[326] = new damage("area_9", "level_6", "d6_3", 14, 13, 4, 4, 0, "Foe screeches and babbles something at you before collapsing", "Thigh", "m", false);
	allBlunt[327] = new damage("area_9", "level_6", "d6_4", 14, 13, 4, 4, 0, "Foe screeches and babbles something at you before collapsing", "Thigh", "m", false);
	allBlunt[328] = new damage("area_9", "level_6", "d6_5", 14, 13, 4, 4, 0, "Foe screeches and babbles something at you before collapsing", "Thigh", "m", false);
	allBlunt[329] = new damage("area_9", "level_6", "d6_6", "-", "-", "-", "-", "-", "Titan smash pulps Foe's hip and sends an enormous spray of blood over you. Foe collapses to the ground", "Hip", "m", true);
	
	// area ten values
	allBlunt[330] = new damage("area_10", "level_1", "d6_1", 3, 2, 0, 0, 0, "Foe parries desperately to avert disaster", "Lower Abdomen", "m", false);
	allBlunt[331] = new damage("area_10", "level_1", "d6_2", 3, 2, 0, 0, 0, "Foe parries desperately to avert disaster", "Lower Abdomen", "m", false);			
	allBlunt[332] = new damage("area_10", "level_1", "d6_3", 5, 6, 0, 0, 0, "Foe twists at the last moment to save himself", "Groin (Male)", "m", false);
	allBlunt[333] = new damage("area_10", "level_1", "d6_4", 5, 6, 0, 0, 0, "Foe twists at the last moment to save himself", "Groin (Male)", "m", false);
	allBlunt[334] = new damage("area_10", "level_1", "d6_3", 3, 2, 0, 0, 0, "Foe parries desperately to avert disaster", "Groin (Female)", "f", false);
	allBlunt[335] = new damage("area_10", "level_1", "d6_4", 2, 2, 0, 0, 0, "Foe rolls away from your blow", "Groin (Female)", "f", false);
	allBlunt[336] = new damage("area_10", "level_1", "d6_5", 2, 2, 0, 0, 0, "Foe rolls away from your blow", "Hip", "m", false);
	allBlunt[337] = new damage("area_10", "level_1", "d6_6", 2, 2, 0, 0, 0, "Foe rolls away from your blow", "Hip", "m", false);
	
	allBlunt[338] = new damage("area_10", "level_2", "d6_1", 6, 4, 0, 0, 0, "Foe's evasion puts him out of position", "Lower Abdomen", "m", false);
	allBlunt[339] = new damage("area_10", "level_2", "d6_2", 6, 4, 0, 0, 0, "Foe's evasion puts him out of position", "Lower Abdomen", "m", false);
	allBlunt[340] = new damage("area_10", "level_2", "d6_3", 9, 8, 0, 0, 0, "Foe goes airborne to avoid your thrust", "Groin (Male)", "m", false);
	allBlunt[341] = new damage("area_10", "level_2", "d6_4", 9, 8, 0, 0, 0, "Foe goes airborne to avoid your thrust", "Groin (Male)", "m", false);
	allBlunt[342] = new damage("area_10", "level_2", "d6_3", 6, 4, 0, 0, 0, "Foe's evasion puts her out of position", "Groin (Female)", "f", false);
	allBlunt[343] = new damage("area_10", "level_2", "d6_4", 5, 4, 0, 0, 0, "Your thrust catches Foe in hip and forces her back", "Groin (Female)", "f", false);
	allBlunt[344] = new damage("area_10", "level_2", "d6_5", 5, 4, 0, 0, 0, "Your thrust catches Foe in hip and forces him back", "Hip", "m", false);
	allBlunt[345] = new damage("area_10", "level_2", "d6_6", 5, 4, 0, 0, 0, "Your thrust catches Foe in hip and forces him back", "Hip", "m", false);
	
	allBlunt[346] = new damage("area_10", "level_3", "d6_1", 9, 7, 1, 0, 0, "Foe quivers from the impact of your assault", "Lower Abdomen", "m", false);
	allBlunt[347] = new damage("area_10", "level_3", "d6_2", 9, 7, 1, 0, 0, "Foe quivers from the impact of your assault", "Lower Abdomen", "m", false);
	allBlunt[348] = new damage("area_10", "level_3", "d6_3", 11, 9, 1, 1, 0, "Foe goes completely pale as your strike lands", "Groin (Male)", "m", false);
	allBlunt[349] = new damage("area_10", "level_3", "d6_4", 11, 9, 1, 1, 0, "Foe goes completely pale as your strike lands", "Groin (Male)", "m", false);
	allBlunt[350] = new damage("area_10", "level_3", "d6_3", 9, 7, 1, 0, 0, "Foe quivers from the impact of your assault", "Groin (Female)", "f", false);
	allBlunt[351] = new damage("area_10", "level_3", "d6_4", 7, 7, 1, 1, 0, "Glancing blow takes skin with it", "Groin (Female)", "f", false);
	allBlunt[352] = new damage("area_10", "level_3", "d6_5", 7, 7, 1, 1, 0, "Glancing blow takes skin with it", "Hip", "m", false);
	allBlunt[353] = new damage("area_10", "level_3", "d6_6", 7, 7, 1, 1, 0, "Glancing blow takes skin with it", "Hip", "m", false);
	
	allBlunt[354] = new damage("area_10", "level_4", "d6_1", 12, 10, 3, 0, 0, "Foe stumbles, coughing wetly", "Lower Abdomen", "m", false);
	allBlunt[355] = new damage("area_10", "level_4", "d6_2", 12, 10, 3, 0, 0, "Foe stumbles, coughing wetly", "Lower Abdomen", "m", false);
	allBlunt[356] = new damage("area_10", "level_4", "d6_3", 13, 10, 1, 2, 0, "Disorient Foe with a canny strike", "Groin (Male)", "m", false);
	allBlunt[357] = new damage("area_10", "level_4", "d6_4", 13, 10, 1, 2, 0, "Disorient Foe with a canny strike", "Groin (Male)", "m", false);
	allBlunt[358] = new damage("area_10", "level_4", "d6_3", 12, 10, 3, 0, 0, "Foe stumbles, coughing wetly", "Groin (Female)", "f", false);
	allBlunt[359] = new damage("area_10", "level_4", "d6_4", 9, 9, 2, 2, 0, "Reckless Foe is panicked by your strike", "Groin (Female)", "f", false);
	allBlunt[360] = new damage("area_10", "level_4", "d6_5", 9, 9, 2, 2, 0, "Reckless Foe is panicked by your strike", "Hip", "m", false);
	allBlunt[361] = new damage("area_10", "level_4", "d6_6", 9, 9, 2, 2, 0, "Reckless Foe is panicked by your strike", "Hip", "m", false);
	
	allBlunt[362] = new damage("area_10", "level_5", "d6_1", 14, 13, 4, 0, 0, "Blow thunders as it connects. Foe's guts are mangled", "Lower Abdomen", "m", false);
	allBlunt[363] = new damage("area_10", "level_5", "d6_2", 14, 13, 4, 0, 0, "Blow thunders as it connects. Foe's guts are mangled", "Lower Abdomen", "m", false);			
	allBlunt[364] = new damage("area_10", "level_5", "d6_3", 15, 12, 3, 3, 0, "Shot to Foe's groin has him down and screaming", "Groin (Male)", "m", false);
	allBlunt[365] = new damage("area_10", "level_5", "d6_4", 15, 12, 3, 3, 0, "Shot to Foe's groin has him down and screaming", "Groin (Male)", "m", false);
	allBlunt[366] = new damage("area_10", "level_5", "d6_3", 14, 13, 4, 0, 0, "Blow thunders as it connects. Foe's guts are mangled", "Groin (Female)", "f", false);
	allBlunt[367] = new damage("area_10", "level_5", "d6_4", 12, 11, 3, 3, 0, "Foe's leg swings loosely. Joint is shattered", "Groin (Female)", "f", false);
	allBlunt[368] = new damage("area_10", "level_5", "d6_5", 12, 11, 3, 3, 0, "Foe's leg swings loosely. Joint is shattered", "Hip", "m", false);
	allBlunt[369] = new damage("area_10", "level_5", "d6_6", 12, 11, 3, 3, 0, "Foe's leg swings loosely. Joint is shattered", "Hip", "m", false);
	
	allBlunt[370] = new damage("area_10", "level_6", "d6_1", "-", "-", "-", "-", "-", "Hellish blow to Foe's abdomen. Strike destroys a variety of organs and kills instantly", "Lower Abdomen", "m", true);
	allBlunt[371] = new damage("area_10", "level_6", "d6_2", "-", "-", "-", "-", "-", "Hellish blow to Foe's abdomen. Strike destroys a variety of organs and kills instantly", "Lower Abdomen", "m", true);			
	allBlunt[372] = new damage("area_10", "level_6", "d6_3", 17, 14, 4, 4, 0, "Crush Foe's groin. He kneels, clutching at his ruined manhood", "Groin (Male)", "m", false);
	allBlunt[373] = new damage("area_10", "level_6", "d6_4", 17, 14, 4, 4, 0, "Crush Foe's groin. He kneels, clutching at his ruined manhood", "Groin (Male)", "m", false);
	allBlunt[374] = new damage("area_10", "level_6", "d6_3", "-", "-", "-", "-", "-", "Hellish blow to Foe's abdomen. Strike destroys a variety of organs and kills instantly", "Groin (Female)", "f", true);
	allBlunt[375] = new damage("area_10", "level_6", "d6_4", "-", "-", "-", "-", "-", "Massive blow to hip. Compound fracture severs major artery. Foe goes down and bleeds out", "Groin (Female)", "f", true);
	allBlunt[376] = new damage("area_10", "level_6", "d6_5", "-", "-", "-", "-", "-", "Massive blow to hip. Compound fracture severs major artery. Foe goes down and bleeds out", "Hip", "m", true);
	allBlunt[377] = new damage("area_10", "level_6", "d6_6", "-", "-", "-", "-", "-", "Massive blow to hip. Compound fracture severs major artery. Foe goes down and bleeds out", "Hip", "m", true);
	
	// area eleven values
	allBlunt[378] = new damage("area_11", "level_1", "d6_1", 3, 2, 0, 0, 0, "Weak attack clips Foe", "Lower Abdomen", "m", false);
	allBlunt[379] = new damage("area_11", "level_1", "d6_2", 3, 2, 0, 0, 0, "Weak attack clips Foe", "Lower Abdomen", "m", false);
	allBlunt[380] = new damage("area_11", "level_1", "d6_3", 3, 2, 0, 0, 0, "Weak attack clips Foe", "Lower Abdomen", "m", false);
	allBlunt[381] = new damage("area_11", "level_1", "d6_4", 3, 2, 0, 0, 0, "Weak attack clips Foe", "Lower Abdomen", "m", false);
	allBlunt[382] = new damage("area_11", "level_1", "d6_5", 3, 2, 0, 0, 0, "Weak attack clips Foe", "Lower Abdomen", "m", false);
	allBlunt[383] = new damage("area_11", "level_1", "d6_6", 3, 2, 0, 0, 0, "Weak attack clips Foe", "Lower Abdomen", "m", false);
	
	allBlunt[384] = new damage("area_11", "level_2", "d6_1", 6, 4, 0, 0, 0, "Foe fakes to the left and spoils your aim", "Lower Abdomen", "m", false);
	allBlunt[385] = new damage("area_11", "level_2", "d6_2", 6, 4, 0, 0, 0, "Foe fakes to the left and spoils your aim", "Lower Abdomen", "m", false);
	allBlunt[386] = new damage("area_11", "level_2", "d6_3", 6, 4, 0, 0, 0, "Foe fakes to the left and spoils your aim", "Lower Abdomen", "m", false);
	allBlunt[387] = new damage("area_11", "level_2", "d6_4", 6, 4, 0, 0, 0, "Foe fakes to the left and spoils your aim", "Lower Abdomen", "m", false);
	allBlunt[388] = new damage("area_11", "level_2", "d6_5", 6, 4, 0, 0, 0, "Foe fakes to the left and spoils your aim", "Lower Abdomen", "m", false);
	allBlunt[389] = new damage("area_11", "level_2", "d6_6", 6, 4, 0, 0, 0, "Foe fakes to the left and spoils your aim", "Lower Abdomen", "m", false);
	
	allBlunt[390] = new damage("area_11", "level_3", "d6_1", 9, 7, 1, 0, 0, "Foe's clever move earns him pain", "Lower Abdomen", "m", false);
	allBlunt[391] = new damage("area_11", "level_3", "d6_2", 9, 7, 1, 0, 0, "Foe's clever move earns him pain", "Lower Abdomen", "m", false);
	allBlunt[392] = new damage("area_11", "level_3", "d6_3", 9, 7, 1, 0, 0, "Foe's clever move earns him pain", "Lower Abdomen", "m", false);
	allBlunt[393] = new damage("area_11", "level_3", "d6_4", 9, 7, 1, 0, 0, "Foe's clever move earns him pain", "Lower Abdomen", "m", false);
	allBlunt[394] = new damage("area_11", "level_3", "d6_5", 9, 7, 1, 0, 0, "Foe's clever move earns him pain", "Lower Abdomen", "m", false);
	allBlunt[395] = new damage("area_11", "level_3", "d6_6", 9, 7, 1, 0, 0, "Foe's clever move earns him pain", "Lower Abdomen", "m", false);
	
	allBlunt[396] = new damage("area_11", "level_4", "d6_1", 12, 10, 3, 0, 0, "Well timed blow delivered to Foe's gut has him reeling in agony", "Lower Abdomen", "m", false);
	allBlunt[397] = new damage("area_11", "level_4", "d6_2", 12, 10, 3, 0, 0, "Well timed blow delivered to Foe's gut has him reeling in agony", "Lower Abdomen", "m", false);
	allBlunt[398] = new damage("area_11", "level_4", "d6_3", 12, 10, 3, 0, 0, "Well timed blow delivered to Foe's gut has him reeling in agony", "Lower Abdomen", "m", false);
	allBlunt[399] = new damage("area_11", "level_4", "d6_4", 12, 10, 3, 0, 0, "Well timed blow delivered to Foe's gut has him reeling in agony", "Lower Abdomen", "m", false);
	allBlunt[400] = new damage("area_11", "level_4", "d6_5", 12, 10, 3, 0, 0, "Well timed blow delivered to Foe's gut has him reeling in agony", "Lower Abdomen", "m", false);
	allBlunt[401] = new damage("area_11", "level_4", "d6_6", 12, 10, 3, 0, 0, "Well timed blow delivered to Foe's gut has him reeling in agony", "Lower Abdomen", "m", false);
	
	allBlunt[402] = new damage("area_11", "level_5", "d6_1", 14, 13, 4, 0, 0, "Foe is lifted from the ground with the force of your attack", "Lower Abdomen", "m", false);
	allBlunt[403] = new damage("area_11", "level_5", "d6_2", 14, 13, 4, 0, 0, "Foe is lifted from the ground with the force of your attack", "Lower Abdomen", "m", false);
	allBlunt[404] = new damage("area_11", "level_5", "d6_3", 14, 13, 4, 0, 0, "Foe is lifted from the ground with the force of your attack", "Lower Abdomen", "m", false);
	allBlunt[405] = new damage("area_11", "level_5", "d6_4", 14, 13, 4, 0, 0, "Foe is lifted from the ground with the force of your attack", "Lower Abdomen", "m", false);
	allBlunt[406] = new damage("area_11", "level_5", "d6_5", 14, 13, 4, 0, 0, "Foe is lifted from the ground with the force of your attack", "Lower Abdomen", "m", false);
	allBlunt[407] = new damage("area_11", "level_5", "d6_6", 14, 13, 4, 0, 0, "Foe is lifted from the ground with the force of your attack", "Lower Abdomen", "m", false);
	
	allBlunt[408] = new damage("area_11", "level_6", "d6_1", "-", "-", "-", "-", "-", "Strike shatters organs. He collapses to the ground moaning his last", "Lower Abdomen", "m", true);
	allBlunt[409] = new damage("area_11", "level_6", "d6_2", "-", "-", "-", "-", "-", "Strike shatters organs. He collapses to the ground moaning his last", "Lower Abdomen", "m", true);
	allBlunt[410] = new damage("area_11", "level_6", "d6_3", "-", "-", "-", "-", "-", "Strike shatters organs. He collapses to the ground moaning his last", "Lower Abdomen", "m", true);
	allBlunt[411] = new damage("area_11", "level_6", "d6_4", "-", "-", "-", "-", "-", "Strike shatters organs. He collapses to the ground moaning his last", "Lower Abdomen", "m", true);
	allBlunt[412] = new damage("area_11", "level_6", "d6_5", "-", "-", "-", "-", "-", "Strike shatters organs. He collapses to the ground moaning his last", "Lower Abdomen", "m", true);
	allBlunt[413] = new damage("area_11", "level_6", "d6_6", "-", "-", "-", "-", "-", "Strike shatters organs. He collapses to the ground moaning his last", "Lower Abdomen", "m", true);
	
	// area twelve values
	allBlunt[414] = new damage("area_12", "level_1", "d6_1", 3, 2, 0, 0, 0, "Foe vaults back five feet", "Under the Ribs (Upper Abdomen)", "m", false);
	allBlunt[415] = new damage("area_12", "level_1", "d6_2", 3, 2, 0, 0, 0, "Foe vaults back five feet", "Under the Ribs (Upper Abdomen)", "m", false);
	allBlunt[416] = new damage("area_12", "level_1", "d6_3", 3, 2, 0, 0, 0, "Strike blunted by Foe's shieldwork", "Chest", "m", false);
	allBlunt[417] = new damage("area_12", "level_1", "d6_4", 3, 2, 0, 0, 0, "Strike blunted by Foe's shieldwork", "Chest", "m", false);
	allBlunt[418] = new damage("area_12", "level_1", "d6_5", 3, 2, 0, 0, 0, "Strike blunted by Foe's shieldwork", "Chest", "m", false);
	allBlunt[419] = new damage("area_12", "level_1", "d6_6", 3, 2, 0, 0, 0, "Strike blunted by Foe's shieldwork", "Chest", "m", false);
	
	allBlunt[420] = new damage("area_12", "level_2", "d6_1", 6, 4, 0, 0, 0, "Foe turns with your strike", "Under the Ribs (Upper Abdomen)", "m", false);
	allBlunt[421] = new damage("area_12", "level_2", "d6_2", 6, 4, 0, 0, 0, "Foe turns with your strike", "Under the Ribs (Upper Abdomen)", "m", false);
	allBlunt[422] = new damage("area_12", "level_2", "d6_3", 6, 4, 0, 0, 0, "Foe dances away and nearly avoids your strike", "Chest", "m", false);
	allBlunt[423] = new damage("area_12", "level_2", "d6_4", 6, 4, 0, 0, 0, "Foe dances away and nearly avoids your strike", "Chest", "m", false);
	allBlunt[424] = new damage("area_12", "level_2", "d6_5", 6, 4, 0, 0, 0, "Foe dances away and nearly avoids your strike", "Chest", "m", false);
	allBlunt[425] = new damage("area_12", "level_2", "d6_6", 6, 4, 0, 0, 0, "Foe dances away and nearly avoids your strike", "Chest", "m", false);
	
	allBlunt[426] = new damage("area_12", "level_3", "d6_1", 9, 7, 1, 0, 0, "Strike Foe under ribs. Muscles and cartilage are damaged", "Under the Ribs (Upper Abdomen)", "m", false);
	allBlunt[427] = new damage("area_12", "level_3", "d6_2", 9, 7, 1, 0, 0, "Strike Foe under ribs. Muscles and cartilage are damaged", "Under the Ribs (Upper Abdomen)", "m", false);
	allBlunt[428] = new damage("area_12", "level_3", "d6_3", 9, 7, 1, 0, 0, "Blow to Foe's ribs. It hurts him to raise his arms. Foe cannot lean over", "Chest", "m", false);
	allBlunt[429] = new damage("area_12", "level_3", "d6_4", 9, 7, 1, 0, 0, "Blow to Foe's ribs. It hurts him to raise his arms. Foe cannot lean over", "Chest", "m", false);
	allBlunt[430] = new damage("area_12", "level_3", "d6_5", 9, 7, 1, 0, 0, "Blow to Foe's ribs. It hurts him to raise his arms. Foe cannot lean over", "Chest", "m", false);
	allBlunt[431] = new damage("area_12", "level_3", "d6_6", 9, 7, 1, 0, 0, "Blow to Foe's ribs. It hurts him to raise his arms. Foe cannot lean over", "Chest", "m", false);
	
	allBlunt[432] = new damage("area_12", "level_4", "d6_1", 12, 10, 3, 0, 0, "Solid strike causes a host of troubles", "Under the Ribs (Upper Abdomen)", "m", false);
	allBlunt[433] = new damage("area_12", "level_4", "d6_2", 12, 10, 3, 0, 0, "Solid strike causes a host of troubles", "Under the Ribs (Upper Abdomen)", "m", false);
	allBlunt[434] = new damage("area_12", "level_4", "d6_3", 12, 10, 2, 0, 0, "Blow to chest. He seeks to regain his wind and survive your onslaught", "Chest", "m", false);
	allBlunt[435] = new damage("area_12", "level_4", "d6_4", 12, 10, 2, 0, 0, "Blow to chest. He seeks to regain his wind and survive your onslaught", "Chest", "m", false);
	allBlunt[436] = new damage("area_12", "level_4", "d6_5", 12, 10, 2, 0, 0, "Blow to chest. He seeks to regain his wind and survive your onslaught", "Chest", "m", false);
	allBlunt[437] = new damage("area_12", "level_4", "d6_6", 12, 10, 2, 0, 0, "Blow to chest. He seeks to regain his wind and survive your onslaught", "Chest", "m", false);
	
	allBlunt[438] = new damage("area_12", "level_5", "d6_1", 14, 13, 4, 0, 0, "Masterful strike up and into ribs shatters bone and rips muscle", "Under the Ribs (Upper Abdomen)", "m", false);
	allBlunt[439] = new damage("area_12", "level_5", "d6_2", 14, 13, 4, 0, 0, "Masterful strike up and into ribs shatters bone and rips muscle", "Under the Ribs (Upper Abdomen)", "m", false);
	allBlunt[440] = new damage("area_12", "level_5", "d6_3", 14, 13, 4, 0, 0, "Strike plunges into chest with deadly effect. Foe completely panics", "Chest", "m", false);
	allBlunt[441] = new damage("area_12", "level_5", "d6_4", 14, 13, 4, 0, 0, "Strike plunges into chest with deadly effect. Foe completely panics", "Chest", "m", false);
	allBlunt[442] = new damage("area_12", "level_5", "d6_5", 14, 13, 4, 0, 0, "Strike plunges into chest with deadly effect. Foe completely panics", "Chest", "m", false);
	allBlunt[443] = new damage("area_12", "level_5", "d6_6", 14, 13, 4, 0, 0, "Strike plunges into chest with deadly effect. Foe completely panics", "Chest", "m", false);
	
	allBlunt[444] = new damage("area_12", "level_6", "d6_1", "-", "-", "-", "-", "-", "Powerful blow flips Foe onto his back. Bones break and muscles tear. He dies", "Under the Ribs (Upper Abdomen)", "m", true);
	allBlunt[445] = new damage("area_12", "level_6", "d6_2", "-", "-", "-", "-", "-", "Powerful blow flips Foe onto his back. Bones break and muscles tear. He dies", "Under the Ribs (Upper Abdomen)", "m", true);
	allBlunt[446] = new damage("area_12", "level_6", "d6_3", "-", "-", "-", "-", "-", "Hideous blow to chest. Foe flung back from your strike and lands sickeningly", "Chest", "m", true);
	allBlunt[447] = new damage("area_12", "level_6", "d6_4", "-", "-", "-", "-", "-", "Hideous blow to chest. Foe flung back from your strike and lands sickeningly", "Chest", "m", true);
	allBlunt[448] = new damage("area_12", "level_6", "d6_5", "-", "-", "-", "-", "-", "Hideous blow to chest. Foe flung back from your strike and lands sickeningly", "Chest", "m", true);
	allBlunt[449] = new damage("area_12", "level_6", "d6_6", "-", "-", "-", "-", "-", "Hideous blow to chest. Foe flung back from your strike and lands sickeningly", "Chest", "m", true);
	
	// area thirteen values
	allBlunt[450] = new damage("area_13", "level_1", "d6_1", 3, 2, 0, 0, 0, "Foe parries too late, but catches most of the force", "Neck", "m", false);
	allBlunt[451] = new damage("area_13", "level_1", "d6_2", 3, 2, 0, 0, 0, "Foe parries too late, but catches most of the force", "Neck", "m", false);
	allBlunt[452] = new damage("area_13", "level_1", "d6_3", 4, 2, 0, 0, 0, "Good form but poor results", "Face and Head (Lower)", "m", false);
	allBlunt[453] = new damage("area_13", "level_1", "d6_4", 4, 2, 0, 0, 0, "Good form but poor results", "Face and Head (Lower)", "m", false);
	allBlunt[454] = new damage("area_13", "level_1", "d6_5", 3, 2, 0, 0, 0, "Strike grazes Foe's head", "Head (Upper)", "m", false);
	allBlunt[455] = new damage("area_13", "level_1", "d6_6", 3, 2, 0, 0, 0, "Strike grazes Foe's head", "Head (Upper)", "m", false);
	
	allBlunt[456] = new damage("area_13", "level_2", "d6_1", 6, 4, 0, 0, 0, "Shot unbalances Foe", "Neck", "m", false);
	allBlunt[457] = new damage("area_13", "level_2", "d6_2", 6, 4, 0, 0, 0, "Shot unbalances Foe", "Neck", "m", false);
	allBlunt[458] = new damage("area_13", "level_2", "d6_3", 7, 4, 0, 1, 1, "Foe is shaken by your attack. He screams", "Face and Head (Lower)", "m", false);
	allBlunt[459] = new damage("area_13", "level_2", "d6_4", 7, 4, 0, 1, 1, "Foe is shaken by your attack. He screams", "Face and Head (Lower)", "m", false);
	allBlunt[460] = new damage("area_13", "level_2", "d6_5", 6, 4, 1, 1, 1, "Foe shakes his head after being tapped", "Head (Upper)", "m", false);
	allBlunt[461] = new damage("area_13", "level_2", "d6_6", 6, 4, 1, 1, 1, "Foe shakes his head after being tapped", "Head (Upper)", "m", false);
	
	allBlunt[462] = new damage("area_13", "level_3", "d6_1", 8, 6, 1, 1, 0, "Foe spins to disarm you and instead gets a strike to his neck", "Neck", "m", false);
	allBlunt[463] = new damage("area_13", "level_3", "d6_2", 8, 6, 1, 1, 0, "Foe spins to disarm you and instead gets a strike to his neck", "Neck", "m", false);
	allBlunt[464] = new damage("area_13", "level_3", "d6_3", 9, 5, 1, 2, 2, "Solid blow to face costs Foe his front teeth. He lisps curses at you", "Face and Head (Lower)", "m", false);
	allBlunt[465] = new damage("area_13", "level_3", "d6_4", 9, 5, 1, 2, 2, "Solid blow to face costs Foe his front teeth. He lisps curses at you", "Face and Head (Lower)", "m", false);
	allBlunt[466] = new damage("area_13", "level_3", "d6_5", 8, 6, 1, 2, 3, "Light blow to Foe's head causes him to stagger back", "Head (Upper)", "m", false);
	allBlunt[467] = new damage("area_13", "level_3", "d6_6", 8, 6, 1, 2, 3, "Light blow to Foe's head causes him to stagger back", "Head (Upper)", "m", false);
	
	allBlunt[468] = new damage("area_13", "level_4", "d6_1", 11, 8, 1, 2, 0, "Blow lands with a crack! Foe's eyes roll in pain", "Neck", "m", false);
	allBlunt[469] = new damage("area_13", "level_4", "d6_2", 11, 8, 1, 2, 0, "Blow lands with a crack! Foe's eyes roll in pain", "Neck", "m", false);
	allBlunt[470] = new damage("area_13", "level_4", "d6_3", 12, 7, 2, 3, 3, "Drive home strike to Foe's cranium. Foe makes a frenzied effort to keep his footing", "Face and Head (Lower)", "m", false);
	allBlunt[471] = new damage("area_13", "level_4", "d6_4", 12, 7, 2, 3, 3, "Drive home strike to Foe's cranium. Foe makes a frenzied effort to keep his footing", "Face and Head (Lower)", "m", false);
	allBlunt[472] = new damage("area_13", "level_4", "d6_5", 11, 8, 2, 3, 5, "Strike to hairline sends helm flying. Foe is spun about", "Head (Upper)", "m", false);
	allBlunt[473] = new damage("area_13", "level_4", "d6_6", 11, 8, 2, 3, 5, "Strike to hairline sends helm flying. Foe is spun about", "Head (Upper)", "m", false);
	
	allBlunt[474] = new damage("area_13", "level_5", "d6_1", "-", "-", "-", "-", "-", "Foe yells out before the impact and is silenced by the blow", "Neck", "m", true);
	allBlunt[475] = new damage("area_13", "level_5", "d6_2", "-", "-", "-", "-", "-", "Foe yells out before the impact and is silenced by the blow", "Neck", "m", true);
	allBlunt[476] = new damage("area_13", "level_5", "d6_3", 14, 10, 3, 4, 4, "Crush Foe's cheek and drive bone into brain", "Face and Head (Lower)", "m", false);
	allBlunt[477] = new damage("area_13", "level_5", "d6_4", 14, 10, 3, 4, 4, "Crush Foe's cheek and drive bone into brain", "Face and Head (Lower)", "m", false);
	allBlunt[478] = new damage("area_13", "level_5", "d6_5", "-", "-", "-", "-", "-", "Strike to brain causes Foe to babble before he dies", "Head (Upper)", "m", true);
	allBlunt[479] = new damage("area_13", "level_5", "d6_6", "-", "-", "-", "-", "-", "Strike to brain causes Foe to babble before he dies", "Head (Upper)", "m", true);
	
	allBlunt[480] = new damage("area_13", "level_6", "d6_1", "-", "-", "-", "-", "-", "Blow to Foe's weapon drives edge back into neck. His eyes bulge with shock before he dies", "Neck", "m", true);
	allBlunt[481] = new damage("area_13", "level_6", "d6_2", "-", "-", "-", "-", "-", "Blow to Foe's weapon drives edge back into neck. His eyes bulge with shock before he dies", "Neck", "m", true);
	allBlunt[482] = new damage("area_13", "level_6", "d6_3", "-", "-", "-", "-", "-", "Face strike shatters bone and destroys eyes. Foe dies at your feet", "Face and Head (Lower)", "m", true);
	allBlunt[483] = new damage("area_13", "level_6", "d6_4", "-", "-", "-", "-", "-", "Face strike shatters bone and destroys eyes. Foe dies at your feet", "Face and Head (Lower)", "m", true);
	allBlunt[484] = new damage("area_13", "level_6", "d6_5", "-", "-", "-", "-", "-", "Catch Foe with massive thrust above the ear. Foe's head nearly explodes", "Head (Upper)", "m", true);
	allBlunt[485] = new damage("area_13", "level_6", "d6_6", "-", "-", "-", "-", "-", "Catch Foe with massive thrust above the ear. Foe's head nearly explodes", "Head (Upper)", "m", true);
	
	// area fourteen values
	allBlunt[486] = new damage("area_14", "level_1", "d6_1", 2, 2, 0, 0, 0, "Light rap to Foe's knuckles", "Hand", "m", false);
	allBlunt[487] = new damage("area_14", "level_1", "d6_2", 2, 2, 0, 0, 0, "Strike clips Foe's forearm", "Forearm", "m", false);
	allBlunt[488] = new damage("area_14", "level_1", "d6_3", 2, 2, 0, 0, 0, "Strike clips Foe's forearm", "Forearm)", "m", false);
	allBlunt[489] = new damage("area_14", "level_1", "d6_4", 2, 2, 0, 0, 0, "Foe leaps away from your main effort", "Elbow", "m", false);
	allBlunt[490] = new damage("area_14", "level_1", "d6_5", 2, 2, 0, 0, 0, "Hard thrust with poor impact. Foe steps clear", "Upper Arm and Shoulder", "m", false);
	allBlunt[491] = new damage("area_14", "level_1", "d6_6", 2, 2, 0, 0, 0, "Hard thrust with poor impact. Foe steps clear", "Upper Arm and Shoulder", "m", false);
	
	allBlunt[492] = new damage("area_14", "level_2", "d6_1", 5, 4, 0, 0, 0, "Cheap shot to Foe's hand causes him to snort in pain", "Hand", "m", false);
	allBlunt[493] = new damage("area_14", "level_2", "d6_2", 5, 4, 0, 0, 0, "You miss with your main effort but hit Foe with your recovery", "Forearm", "m", false);
	allBlunt[494] = new damage("area_14", "level_2", "d6_3", 5, 4, 0, 0, 0, "You miss with your main effort but hit Foe with your recovery", "Forearm", "m", false);
	allBlunt[495] = new damage("area_14", "level_2", "d6_4", 5, 4, 0, 0, 0, "A stinger to Foe's elbow", "Elbow", "m", false);
	allBlunt[496] = new damage("area_14", "level_2", "d6_5", 5, 4, 0, 0, 0, "You force your opponent back. He holds you at bay with wild swings", "Upper Arm and Shoulder", "m", false);
	allBlunt[497] = new damage("area_14", "level_2", "d6_6", 5, 4, 0, 0, 0, "You force your opponent back. He holds you at bay with wild swings", "Upper Arm and Shoulder", "m", false);
	
	allBlunt[498] = new damage("area_14", "level_3", "d6_1", 7, 6, 1, 0, 0, "Foe yelps with pain as you batter his hand", "Hand", "m", false);
	allBlunt[499] = new damage("area_14", "level_3", "d6_2", 7, 6, 1, 0, 0, "A blistering strike makes Foe's forearm jerk awkwardly", "Forearm", "m", false);
	allBlunt[500] = new damage("area_14", "level_3", "d6_3", 7, 6, 1, 0, 0, "A blistering strike makes Foe's forearm jerk awkwardly", "Forearm", "m", false);
	allBlunt[501] = new damage("area_14", "level_3", "d6_4", 7, 6, 1, 0, 0, "Foe yells in pain", "Elbow", "m", false);
	allBlunt[502] = new damage("area_14", "level_3", "d6_5", 7, 6, 1, 0, 0, "Foe dances back from the brunt of your thrust", "Upper Arm and Shoulder", "m", false);
	allBlunt[503] = new damage("area_14", "level_3", "d6_6", 7, 6, 1, 0, 0, "Foe dances back from the brunt of your thrust", "Upper Arm and Shoulder", "m", false);
	
	allBlunt[504] = new damage("area_14", "level_4", "d6_1", 9, 8, 2, 0, 0, "Solid smash to Foe's hand breaks his thumb", "Hand", "m", false);
	allBlunt[505] = new damage("area_14", "level_4", "d6_2", 9, 8, 2, 0, 0, "Thrust to forearm has Foe panting in agony", "Forearm", "m", false);
	allBlunt[506] = new damage("area_14", "level_4", "d6_3", 9, 8, 2, 0, 0, "Thrust to forearm has Foe panting in agony", "Forearm", "m", false);
	allBlunt[507] = new damage("area_14", "level_4", "d6_4", 9, 8, 2, 0, 0, "You crack Foe's elbow with a lightning strike", "Elbow", "m", false);
	allBlunt[508] = new damage("area_14", "level_4", "d6_5", 9, 8, 3, 0, 0, "Foe's sluggish form gives you the opening you've been waiting for", "Upper Arm and Shoulder", "m", false);
	allBlunt[509] = new damage("area_14", "level_4", "d6_6", 9, 8, 3, 0, 0, "Foe's sluggish form gives you the opening you've been waiting for", "Upper Arm and Shoulder", "m", false);
	
	allBlunt[510] = new damage("area_14", "level_5", "d6_1", 12, 10, 3, 0, 0, "Foe foolishly blocks your strike with his hand and pays the price", "Hand", "m", false);
	allBlunt[511] = new damage("area_14", "level_5", "d6_2", 12, 10, 3, 0, 0, "Blow thunders as it connects. Foe's forearm mangled", "Forearm", "m", false);
	allBlunt[512] = new damage("area_14", "level_5", "d6_3", 12, 10, 3, 0, 0, "Blow thunders as it connects. Foe's forearm mangled", "Forearm", "m", false);
	allBlunt[513] = new damage("area_14", "level_5", "d6_4", 12, 10, 3, 0, 0, "Crush Foe's elbow against his side", "Elbow", "m", false);
	allBlunt[514] = new damage("area_14", "level_5", "d6_5", 12, 11, 4, 0, 0, "Strike into the shield shoulder of Foe. Joint shatters", "Upper Arm and Shoulder", "m", false);
	allBlunt[515] = new damage("area_14", "level_5", "d6_6", 12, 11, 4, 0, 0, "Strike into the shield shoulder of Foe. Joint shatters", "Upper Arm and Shoulder", "m", false);
	
	allBlunt[516] = new damage("area_14", "level_6", "d6_1", 14, 12, 3, 0, 0, "Lucky strike shatters every bone in Foe's hand. He looks as though he may faint", "Hand", "m", false);
	allBlunt[517] = new damage("area_14", "level_6", "d6_2", 14, 12, 3, 0, 0, "Shatter Foe's forearm. He's out of his mind with pain", "Forearm", "m", false);
	allBlunt[518] = new damage("area_14", "level_6", "d6_3", 14, 12, 3, 0, 0, "Shatter Foe's forearm. He's out of his mind with pain", "Forearm", "m", false);
	allBlunt[519] = new damage("area_14", "level_6", "d6_4", 14, 12, 3, 0, 0, "Power blow to elbow destroys both muscle and bone. Foe rages at you weakly", "Elbow", "m", false);
	allBlunt[520] = new damage("area_14", "level_6", "d6_5", 14, 13, 5, 0, 0, "Blow breaks Foe's weapon arm. Slings Foe's weapon to the right five feet. Tendon damage", "Upper Arm and Shoulder", "m", false);
	allBlunt[521] = new damage("area_14", "level_6", "d6_6", 14, 13, 5, 0, 0, "Blow breaks Foe's weapon arm. Slings Foe's weapon to the right five feet. Tendon damage", "Upper Arm and Shoulder", "m", false);
}

function setupCleaving(){
	// area one values
	allCleaving[0] = new damage("area_1", "level_1", "d6_1", 0, 3, 0, 0, 0, "Weak strike", "Foot", "m", false);
	allCleaving[1] = new damage("area_1", "level_1", "d6_2", 0, 2, 0, 0, 0, "Feeble strike taps the Foe", "Shin and Lower Leg", "m", false);
	allCleaving[2] = new damage("area_1", "level_1", "d6_3", 0, 2, 0, 0, 0, "Feeble strike taps the Foe", "Shin and Lower Leg", "m", false);
	allCleaving[3] = new damage("area_1", "level_1", "d6_4", 0, 2, 0, 0, 0, "Feeble strike taps the Foe", "Shin and Lower Leg", "m", false);
	allCleaving[4] = new damage("area_1", "level_1", "d6_5", 1, 3, 0, 0, 0, "Unbalanced Foe", "Knee and Nearby Areas", "m", false);
	allCleaving[5] = new damage("area_1", "level_1", "d6_6", 1, 3, 0, 0, 0, "Unbalanced Foe", "Knee and Nearby Areas", "m", false);
	
	allCleaving[6] = new damage("area_1", "level_2", "d6_1", 2, 5, 1, 0, 0, "Struck Foe with more force than edge", "Foot", "m", false);
	allCleaving[7] = new damage("area_1", "level_2", "d6_2", 3, 4, 1, 1, 0, "An opening appears; you smack the Foe lightly", "Shin and Lower Leg", "m", false);
	allCleaving[8] = new damage("area_1", "level_2", "d6_3", 3, 4, 1, 1, 0, "An opening appears; you smack the Foe lightly", "Shin and Lower Leg", "m", false);
	allCleaving[9] = new damage("area_1", "level_2", "d6_4", 3, 4, 1, 1, 0, "An opening appears; you smack the Foe lightly", "Shin and Lower Leg", "m", false);
	allCleaving[10] = new damage("area_1", "level_2", "d6_5", 4, 5, 1, 1, 0, "You strike Foe's knee while recovering from a lunge", "Knee and Nearby Areas", "m", false);
	allCleaving[11] = new damage("area_1", "level_2", "d6_6", 4, 5, 1, 1, 0, "You strike Foe's knee while recovering from a lunge", "Knee and Nearby Areas", "m", false);
	
	allCleaving[12] = new damage("area_1", "level_3", "d6_1", 5, 7, 2, 1, 0, "Foe steps quickly out of your reach", "Foot", "m", false);
	allCleaving[13] = new damage("area_1", "level_3", "d6_2", 5, 6, 2, 1, 0, "Foe avoids your main effort, but you nick him on the recovery", "Shin and Lower Leg", "m", false);
	allCleaving[14] = new damage("area_1", "level_3", "d6_3", 5, 6, 2, 1, 0, "Foe avoids your main effort, but you nick him on the recovery", "Shin and Lower Leg", "m", false);
	allCleaving[15] = new damage("area_1", "level_3", "d6_4", 5, 6, 2, 1, 0, "Foe avoids your main effort, but you nick him on the recovery", "Shin and Lower Leg", "m", false);
	allCleaving[16] = new damage("area_1", "level_3", "d6_5", 6, 8, 2, 1, 0, "Nick Foe above knee. Wound bleeds strongly", "Knee and Nearby Areas", "m", false);
	allCleaving[17] = new damage("area_1", "level_3", "d6_6", 6, 8, 2, 1, 0, "Nick Foe above knee. Wound bleeds strongly", "Knee and Nearby Areas", "m", false);
	
	allCleaving[18] = new damage("area_1", "level_4", "d6_1", 8, 9, 3, 2, 0, "Foe stumbles, quality strike", "Foot", "m", false);
	allCleaving[19] = new damage("area_1", "level_4", "d6_2", 8, 9, 3, 2, 0, "Blow lands solidly on Foe's shin. You get some slashing action, but no mortal wound", "Shin and Lower Leg", "m", false);
	allCleaving[20] = new damage("area_1", "level_4", "d6_3", 8, 9, 3, 2, 0, "Blow lands solidly on Foe's shin. You get some slashing action, but no mortal wound", "Shin and Lower Leg", "m", false);
	allCleaving[21] = new damage("area_1", "level_4", "d6_4", 8, 9, 3, 2, 0, "Blow lands solidly on Foe's shin. You get some slashing action, but no mortal wound", "Shin and Lower Leg", "m", false);
	allCleaving[22] = new damage("area_1", "level_4", "d6_5", 9, 10, 3, 2, 0, "Blow lands solidly on Foe's knee", "Knee and Nearby Areas", "m", false);
	allCleaving[23] = new damage("area_1", "level_4", "d6_6", 9, 10, 3, 2, 0, "Blow lands solidly on Foe's knee", "Knee and Nearby Areas", "m", false);
	
	allCleaving[24] = new damage("area_1", "level_5", "d6_1", 10, 12, 4, 3, 0, "Foe dances right into your swing", "Foot", "m", false);
	allCleaving[25] = new damage("area_1", "level_5", "d6_2", 10, 12, 4, 3, 0, "Reached long and caught Foe in lower leg. He twists out of it, but is unbalanced", "Shin and Lower Leg", "m", false);
	allCleaving[26] = new damage("area_1", "level_5", "d6_3", 10, 12, 4, 3, 0, "Reached long and caught Foe in lower leg. He twists out of it, but is unbalanced", "Shin and Lower Leg", "m", false);
	allCleaving[27] = new damage("area_1", "level_5", "d6_4", 10, 12, 4, 3, 0, "Reached long and caught Foe in lower leg. He twists out of it, but is unbalanced", "Shin and Lower Leg", "m", false);
	allCleaving[28] = new damage("area_1", "level_5", "d6_5", 11, 13, 4, 3, 0, "Foe mistakenly brings his leg in line with your attack. Severed tendons", "Knee and Nearby Areas", "m", false);
	allCleaving[29] = new damage("area_1", "level_5", "d6_6", 11, 13, 4, 3, 0, "Foe mistakenly brings his leg in line with your attack. Severed tendons", "Knee and Nearby Areas", "m", false);
	
	allCleaving[30] = new damage("area_1", "level_6", "d6_1", 13, 14, 5, 4, 0, "Opens up a terrible wound. Blood everywhere", "Foot", "m", false);
	allCleaving[31] = new damage("area_1", "level_6", "d6_2", 13, 14, 5, 4, 0, "Slashed muscle and tendons in lower leg. Foe stumbles forward into you with his guard down", "Shin and Lower Leg", "m", false);
	allCleaving[32] = new damage("area_1", "level_6", "d6_3", 13, 14, 5, 4, 0, "Slashed muscle and tendons in lower leg. Foe stumbles forward into you with his guard down", "Shin and Lower Leg", "m", false);
	allCleaving[33] = new damage("area_1", "level_6", "d6_4", 13, 14, 5, 4, 0, "Slashed muscle and tendons in lower leg. Foe stumbles forward into you with his guard down", "Shin and Lower Leg", "m", false);
	allCleaving[34] = new damage("area_1", "level_6", "d6_5", 14, 15, 5, 4, 0, "Your weapon slices through Foe's calf. Foe is instantly pale from the pain", "Knee and Nearby Areas", "m", false);
	allCleaving[35] = new damage("area_1", "level_6", "d6_6", 14, 15, 5, 4, 0, "Your weapon slices through Foe's calf. Foe is instantly pale from the pain", "Knee and Nearby Areas", "m", false);
	
	// area two values
	allCleaving[36] = new damage("area_2", "level_1", "d6_1", 1, 3, 0, 0, 0, "Foe's evasion puts him out of an aggressive posture", "Knee and Nearby Areas", "m", false);
	allCleaving[37] = new damage("area_2", "level_1", "d6_2", 1, 3, 0, 0, 0, "Foe's evasion puts him out of an aggressive posture", "Knee and Nearby Areas", "m", false);			
	allCleaving[38] = new damage("area_2", "level_1", "d6_3", 1, 2, 1, 0, 0, "Foe evades frantically", "Thigh", "m", false);
	allCleaving[39] = new damage("area_2", "level_1", "d6_4", 1, 2, 1, 0, 0, "Foe evades frantically", "Thigh", "m", false);
	allCleaving[40] = new damage("area_2", "level_1", "d6_5", 1, 2, 1, 0, 0, "Foe evades frantically", "Thigh", "m", false);
	allCleaving[41] = new damage("area_2", "level_1", "d6_6", 1, 2, 0, 0, 0, "Foe backpedals five feet", "Hip", "m", false);
	
	allCleaving[42] = new damage("area_2", "level_2", "d6_1", 4, 5, 1, 0, 0, "The blow does nothing more than open a wide shallow cut", "Knee and Nearby Areas", "m", false);
	allCleaving[43] = new damage("area_2", "level_2", "d6_2", 4, 5, 1, 0, 0, "The blow does nothing more than open a wide shallow cut", "Knee and Nearby Areas", "m", false);			
	allCleaving[44] = new damage("area_2", "level_2", "d6_3", 4, 4, 2, 0, 0, "Foe goes airborne to evade your strike", "Thigh", "m", false);
	allCleaving[45] = new damage("area_2", "level_2", "d6_4", 4, 4, 2, 0, 0, "Foe goes airborne to evade your strike", "Thigh", "m", false);
	allCleaving[46] = new damage("area_2", "level_2", "d6_5", 4, 4, 2, 0, 0, "Foe goes airborne to evade your strike", "Thigh", "m", false);
	allCleaving[47] = new damage("area_2", "level_2", "d6_6", 4, 4, 1, 0, 0, "Strike passes across left hip and grazes right", "Hip", "m", false);
	
	allCleaving[48] = new damage("area_2", "level_3", "d6_1", 6, 8, 2, 1, 0, "Slight leg wound", "Knee and Nearby Areas", "m", false);
	allCleaving[49] = new damage("area_2", "level_3", "d6_2", 6, 8, 2, 1, 0, "Slight leg wound", "Knee and Nearby Areas", "m", false);			
	allCleaving[50] = new damage("area_2", "level_3", "d6_3", 6, 6, 3, 1, 0, "Slash to Foe's thigh sends a piece of equipment flying", "Thigh", "m", false);
	allCleaving[51] = new damage("area_2", "level_3", "d6_4", 6, 6, 3, 1, 0, "Slash to Foe's thigh sends a piece of equipment flying", "Thigh", "m", false);
	allCleaving[52] = new damage("area_2", "level_3", "d6_5", 6, 6, 3, 1, 0, "Slash to Foe's thigh sends a piece of equipment flying", "Thigh", "m", false);
	allCleaving[53] = new damage("area_2", "level_3", "d6_6", 6, 7, 2, 0, 0, "Miss Foe's arm and strike his hip. He drops something", "Hip", "m", false); // double check this value
	
	allCleaving[54] = new damage("area_2", "level_4", "d6_1", 9, 10, 3, 2, 0, "Foe leaps back, but you catch his thigh", "Knee and Nearby Areas", "m", false);
	allCleaving[55] = new damage("area_2", "level_4", "d6_2", 9, 10, 3, 2, 0, "Foe leaps back, but you catch his thigh", "Knee and Nearby Areas", "m", false);			
	allCleaving[56] = new damage("area_2", "level_4", "d6_3", 9, 10, 4, 2, 0, "The blow delivers significant impact", "Thigh", "m", false);
	allCleaving[57] = new damage("area_2", "level_4", "d6_4", 9, 10, 4, 2, 0, "The blow delivers significant impact", "Thigh", "m", false);
	allCleaving[58] = new damage("area_2", "level_4", "d6_5", 9, 10, 4, 2, 0, "The blow delivers significant impact", "Thigh", "m", false);
	allCleaving[59] = new damage("area_2", "level_4", "d6_6", 9, 10, 3, 2, 0, "You extend on your slashing arc and deliver a crushing strike", "Hip", "m", false);
	
	allCleaving[60] = new damage("area_2", "level_5", "d6_1", 11, 13, 4, 3, 0, "Slash Foe's knee. Your strike tears garments and armor off", "Knee and Nearby Areas", "m", false);
	allCleaving[61] = new damage("area_2", "level_5", "d6_2", 11, 13, 4, 3, 0, "Slash Foe's knee. Your strike tears garments and armor off", "Knee and Nearby Areas", "m", false);			
	allCleaving[62] = new damage("area_2", "level_5", "d6_3", 11, 10, 5, 3, 0, "Wound falls open and Foe is in agony. His guard is somehow still up", "Thigh", "m", false);
	allCleaving[63] = new damage("area_2", "level_5", "d6_4", 11, 10, 5, 3, 0, "Wound falls open and Foe is in agony. His guard is somehow still up", "Thigh", "m", false);
	allCleaving[64] = new damage("area_2", "level_5", "d6_5", 11, 10, 5, 3, 0, "Wound falls open and Foe is in agony. His guard is somehow still up", "Thigh", "m", false);
	allCleaving[65] = new damage("area_2", "level_5", "d6_6", 11, 13, 5, 3, 0, "Catch part of Foe's hip. You make an ugly wound", "Hip", "m", false);
	
	allCleaving[66] = new damage("area_2", "level_6", "d6_1", 14, 15, 5, 4, 0, "Strong blow to Foe's leg. Foe drops his guard and almost his weapon", "Knee and Nearby Areas", "m", false);
	allCleaving[67] = new damage("area_2", "level_6", "d6_2", 14, 15, 5, 4, 0, "Strong blow to Foe's leg. Foe drops his guard and almost his weapon", "Knee and Nearby Areas", "m", false);			
	allCleaving[68] = new damage("area_2", "level_6", "d6_3", 14, 12, 6, 4, 0, "Foe blocks your attack with his thigh; blood everywhere", "Thigh", "m", false);
	allCleaving[69] = new damage("area_2", "level_6", "d6_4", 14, 12, 6, 4, 0, "Foe blocks your attack with his thigh; blood everywhere", "Thigh", "m", false);
	allCleaving[70] = new damage("area_2", "level_6", "d6_5", 14, 12, 6, 4, 0, "Foe blocks your attack with his thigh; blood everywhere", "Thigh", "m", false);
	allCleaving[71] = new damage("area_2", "level_6", "d6_6", "-", "-", "-", "-", "-", "Your blade gets stuck in Foe's hip. Lots of screaming before he dies", "Hip", "m", true);
	
	// area three values
	allCleaving[72] = new damage("area_3", "level_1", "d6_1", 1, 2, 0, 0, 0, "Foe evades much of your swing", "Hip", "m", false);
	allCleaving[73] = new damage("area_3", "level_1", "d6_2", 2, 2, 0, 0, 0, "Your grip fails you", "Upper Abdominals", "m", false);			
	allCleaving[74] = new damage("area_3", "level_1", "d6_3", 2, 2, 0, 0, 0, "Your grip fails you", "Lower Abdominals", "m", false);
	allCleaving[75] = new damage("area_3", "level_1", "d6_4", 2, 2, 0, 0, 0, "Foe steps right then left, almost evading your blow", "Ribcage", "m", false);
	allCleaving[76] = new damage("area_3", "level_1", "d6_5", 2, 2, 0, 0, 0, "Foe steps right then left, almost evading your blow", "Ribcage", "m", false);
	allCleaving[77] = new damage("area_3", "level_1", "d6_6", "-", "-", "-", "-", "-", "Go to Arms (Area 7)", "-", "m", false);
	
	allCleaving[78] = new damage("area_3", "level_2", "d6_1", 4, 4, 1, 0, 0, "You should have swung harder", "Hip", "m", false);
	allCleaving[79] = new damage("area_3", "level_2", "d6_2", 5, 5, 1, 0, 0, "Glancing blow takes skin with it", "Upper Abdominals", "m", false);			
	allCleaving[80] = new damage("area_3", "level_2", "d6_3", 5, 5, 1, 0, 0, "Glancing blow takes skin with it", "Lower Abdominals", "m", false);
	allCleaving[81] = new damage("area_3", "level_2", "d6_4", 5, 4, 1, 0, 0, "Destroy one of Foe's silly decorations", "Ribcage", "m", false);
	allCleaving[82] = new damage("area_3", "level_2", "d6_5", 5, 4, 1, 0, 0, "Destroy one of Foe's silly decorations", "Ribcage", "m", false);
	allCleaving[83] = new damage("area_3", "level_2", "d6_6", "-", "-", "-", "-", "-", "Go to Arms (Area 7)", "-", "m", false);
	
	allCleaving[84] = new damage("area_3", "level_3", "d6_1", 6, 7, 2, 0, 0, "Blow to Foe's hip causes his right leg to falter for a moment", "Hip", "m", false);
	allCleaving[85] = new damage("area_3", "level_3", "d6_2", 7, 8, 3, 0, 0, "Strike blunted by clothing", "Upper Abdominals", "m", false);			
	allCleaving[86] = new damage("area_3", "level_3", "d6_3", 7, 8, 3, 0, 0, "Strike blunted by clothing", "Lower Abdominals", "m", false);
	allCleaving[87] = new damage("area_3", "level_3", "d6_4", 7, 7, 2, 0, 0, "Blow is forceful, not hard", "Ribcage", "m", false);
	allCleaving[88] = new damage("area_3", "level_3", "d6_5", 7, 7, 2, 0, 0, "Blow is forceful, not hard", "Ribcage", "m", false);
	allCleaving[89] = new damage("area_3", "level_3", "d6_6", "-", "-", "-", "-", "-", "Go to Arms (Area 7)", "-", "m", false);
	
	allCleaving[90] = new damage("area_3", "level_4", "d6_1", 9, 10, 3, 2, 0, "Disorient Foe with a clever strike to the hip", "Hip", "m", false);
	allCleaving[91] = new damage("area_3", "level_4", "d6_2", 10, 11, 5, 0, 0, "Solid strike to Foe's shield side", "Upper Abdominals", "m", false);			
	allCleaving[92] = new damage("area_3", "level_4", "d6_3", 10, 11, 5, 0, 0, "Solid strike to Foe's shield side", "Lower Abdominals", "m", false);
	allCleaving[93] = new damage("area_3", "level_4", "d6_4", 10, 10, 3, 0, 0, "Strong blow breaks Foe's guard. He is unbalanced", "Ribcage", "m", false);
	allCleaving[94] = new damage("area_3", "level_4", "d6_5", 10, 10, 3, 0, 0, "Strong blow breaks Foe's guard. He is unbalanced", "Ribcage", "m", false);
	allCleaving[95] = new damage("area_3", "level_4", "d6_6", "-", "-", "-", "-", "-", "Go to Arms (Area 7)", "-", "m", false);
	
	allCleaving[96] = new damage("area_3", "level_5", "d6_1", 11, 13, 5, 3, 0, "Catch Foe with devastating hit. A terrible howl erupts from him", "Hip", "m", false);
	allCleaving[97] = new damage("area_3", "level_5", "d6_2", 12, 14, 7, 0, 0, "Masterful strike to Foe's chest", "Upper Abdominals", "m", false);			
	allCleaving[98] = new damage("area_3", "level_5", "d6_3", 12, 14, 7, 0, 0, "Masterful strike to Foe's chest", "Lower Abdominals", "m", false);
	allCleaving[99] = new damage("area_3", "level_5", "d6_4", 12, 13, 5, 0, 0, "Foe yells out before the impact and is silenced by the blow. Ribs crackle", "Ribcage", "m", false);
	allCleaving[100] = new damage("area_3", "level_5", "d6_5", 12, 13, 5, 0, 0, "Foe yells out before the impact and is silenced by the blow. Ribs crackle", "Ribcage", "m", false);
	allCleaving[101] = new damage("area_3", "level_5", "d6_6", "-", "-", "-", "-", "-", "Go to Arms (Area 7)", "-", "m", false);
	
	allCleaving[102] = new damage("area_3", "level_6", "d6_1", "-", "-", "-", "-", "-", "Foe dies from your brutal assault", "Hip", "m", true);
	allCleaving[103] = new damage("area_3", "level_6", "d6_2", "-", "-", "-", "-", "-", "You strike Foe's abdomen with stunning effect. He's dead", "Upper Abdominals", "m", true);			
	allCleaving[104] = new damage("area_3", "level_6", "d6_3", "-", "-", "-", "-", "-", "You strike Foe's abdomen with stunning effect. He's dead", "Lower Abdominals", "m", true);
	allCleaving[105] = new damage("area_3", "level_6", "d6_4", "-", "-", "-", "-", "-", "Blow thunders as it connects. Foe's ribs shatter. Heart destroyed", "Ribcage", "m", true);
	allCleaving[106] = new damage("area_3", "level_6", "d6_5", "-", "-", "-", "-", "-", "Blow thunders as it connects. Foe's ribs shatter. Heart destroyed", "Ribcage", "m", true);
	allCleaving[107] = new damage("area_3", "level_6", "d6_6", "-", "-", "-", "-", "-", "Go to Arms (Area 7)", "-", "m", false);
	
	// area four values
	allCleaving[108] = new damage("area_4", "level_1", "d6_1", 1, 2, 0, 0, 0, "Good form, but it disappoints", "Upper Arm and Shoulder", "m", false);
	allCleaving[109] = new damage("area_4", "level_1", "d6_2", 1, 2, 0, 0, 0, "Good form, but it disappoints", "Upper Arm and Shoulder", "m", false);			
	allCleaving[110] = new damage("area_4", "level_1", "d6_3", 2, 2, 0, 0, 0, "Strike lands poorly", "Chest Crosscut", "m", false);
	allCleaving[111] = new damage("area_4", "level_1", "d6_4", 2, 2, 1, 0, 0, "Foe is shaken by your attack. He screams", "Neck", "m", false);
	allCleaving[112] = new damage("area_4", "level_1", "d6_5", 3, 4, 1, 0, 0, "Blade misses Foe's eye by inches", "Head (Lower), including the Face", "m", false);
	allCleaving[113] = new damage("area_4", "level_1", "d6_6", 2, 2, 1, 0, 0, "You force your opponent back. He keeps you at bay with wild swings", "Head (Upper)", "m", false);
	
	allCleaving[114] = new damage("area_4", "level_2", "d6_1", 4, 4, 1, 0, 0, "Hard strike with no edge. Foe steps clear before you sort it out", "Upper Arm and Shoulder", "m", false);
	allCleaving[115] = new damage("area_4", "level_2", "d6_2", 4, 4, 1, 0, 0, "Hard strike with no edge. Foe steps clear before you sort it out", "Upper Arm and Shoulder", "m", false);			
	allCleaving[116] = new damage("area_4", "level_2", "d6_3", 5, 4, 1, 0, 0, "Strike passes under Foe's arm and fails to bite. He recoils", "Chest Crosscut", "m", false);
	allCleaving[117] = new damage("area_4", "level_2", "d6_4", 5, 4, 3, 0, 0, "Blow opens shallow but bloody cut in neck", "Neck", "m", false);
	allCleaving[118] = new damage("area_4", "level_2", "d6_5", 6, 5, 2, 0, 0, "Foe defends energetically to avoid disaster", "Head (Lower), including the Face", "m", false);
	allCleaving[119] = new damage("area_4", "level_2", "d6_6", 5, 4, 2, 0, 0, "Your strike lands weakly", "Head (Upper)", "m", false);
	
	allCleaving[120] = new damage("area_4", "level_3", "d6_1", 6, 6, 3, 0, 0, "You push aside Foe's weapon and force him back", "Upper Arm and Shoulder", "m", false);
	allCleaving[121] = new damage("area_4", "level_3", "d6_2", 6, 6, 3, 0, 0, "You push aside Foe's weapon and force him back", "Upper Arm and Shoulder", "m", false);			
	allCleaving[122] = new damage("area_4", "level_3", "d6_3", 7, 7, 2, 0, 0, "Foe twists awkwardly and takes a strike to the chest", "Chest Crosscut", "m", false);
	allCleaving[123] = new damage("area_4", "level_3", "d6_4", 7, 6, 5, 0, 0, "Strike lands against Foe's neck. Foe is horrified", "Neck", "m", false);
	allCleaving[124] = new damage("area_4", "level_3", "d6_5", 8, 7, 3, 1, 1, "Foe is shaken by your blow. His defensive measures look clumsy", "Head (Lower), including the Face", "m", false);
	allCleaving[125] = new damage("area_4", "level_3", "d6_6", 7, 6, 3, 1, 2, "Foe staggers back, blood running down his face", "Head (Upper)", "m", false);
	
	allCleaving[126] = new damage("area_4", "level_4", "d6_1", 9, 8, 4, 0, 0, "You strike Foe's shoulder and slash muscles", "Upper Arm and Shoulder", "m", false);
	allCleaving[127] = new damage("area_4", "level_4", "d6_2", 9, 8, 4, 0, 0, "You strike Foe's shoulder and slash muscles", "Upper Arm and Shoulder", "m", false);			
	allCleaving[128] = new damage("area_4", "level_4", "d6_3", 10, 10, 3, 0, 0, "You crack Foe's rib with a lightning strike", "Chest Crosscut", "m", false);
	allCleaving[129] = new damage("area_4", "level_4", "d6_4", 10, 8, 7, 1, 0, "Foe tries to disarm you and pays with a massive chop to the neck", "Neck", "m", false);
	allCleaving[130] = new damage("area_4", "level_4", "d6_5", 11, 9, 4, 2, 2, "Foe twists oddly to avoid your attack. Blow strikes Foe's chin", "Head (Lower), including the Face", "m", false);
	allCleaving[131] = new damage("area_4", "level_4", "d6_6", 10, 9, 4, 2, 4, "Foe sobs as an ear is removed", "Head (Upper)", "m", false);
	
	allCleaving[132] = new damage("area_4", "level_5", "d6_1", 11, 10, 5, 0, 0, "Foe mistakenly brings his weapon arm across your blade's path", "Upper Arm and Shoulder", "m", false);
	allCleaving[133] = new damage("area_4", "level_5", "d6_2", 11, 10, 5, 0, 0, "Foe mistakenly brings his weapon arm across your blade's path", "Upper Arm and Shoulder", "m", false);			
	allCleaving[134] = new damage("area_4", "level_5", "d6_3", 12, 13, 5, 0, 0, "Vicious Slash to Foe's chest. Massive internal organ damage", "Chest Crosscut", "m", false);
	allCleaving[135] = new damage("area_4", "level_5", "d6_4", "-", "-", "-", "-", "-", "Your edge bites half its width into Foes throat. He dies", "Neck", "m", true);
	allCleaving[136] = new damage("area_4", "level_5", "d6_5", 13, 11, 5, 3, 3, "Foe moves his shield arm too slowly and takes a slash to the face", "Head (Lower), including the Face", "m", false);
	allCleaving[137] = new damage("area_4", "level_5", "d6_6", "-", "-", "-", "-", "-", "Strike to Foe's head cracks skull and causes massive brain damage. He gibbers and dies", "Head (Upper)", "m", true);
	
	allCleaving[138] = new damage("area_4", "level_6", "d6_1", 14, 12, 6, 0, 0, "You bury your sword into Foe's shoulder", "Upper Arm and Shoulder", "m", false);
	allCleaving[139] = new damage("area_4", "level_6", "d6_2", 14, 12, 6, 0, 0, "You bury your sword into Foe's shoulder", "Upper Arm and Shoulder", "m", false);			
	allCleaving[140] = new damage("area_4", "level_6", "d6_3", "-", "-", "-", "-", "-", "Strike cleaves through lungs and buries your blade near Foe's heart. Instant death", "Chest Crosscut", "m", true);
	allCleaving[141] = new damage("area_4", "level_6", "d6_4", "-", "-", "-", "-", "-", "Meat chopping strike severs Foe's head", "Neck", "m", true);
	allCleaving[142] = new damage("area_4", "level_6", "d6_5", "-", "-", "-", "-", "-", "Foe turns out and away from your swing. You catch his face and destroy his head", "Head (Lower), including the Face", "m", true);
	allCleaving[143] = new damage("area_4", "level_6", "d6_6", "-", "-", "-", "-", "-", "Strike down, in, and across Foe's forehead. Destroy Foe's eyes. He drops dead in his tracks", "Head (Upper)", "m", true);
	
	// area five values
	allCleaving[144] = new damage("area_5", "level_1", "d6_1", 2, 2, 1, 0, 0, "Your strike slides off", "Head (Upper)", "m", false);
	allCleaving[145] = new damage("area_5", "level_1", "d6_2", 2, 2, 1, 0, 0, "Your strike slides off", "Head (Upper)", "m", false);			
	allCleaving[146] = new damage("area_5", "level_1", "d6_3", 2, 2, 1, 0, 0, "Your strike slides off", "Head (Upper)", "m", false);
	allCleaving[147] = new damage("area_5", "level_1", "d6_4", 3, 3, 1, 0, 0, "Your strike lands flatly", "Head (Lower), including the Face", "m", false);
	allCleaving[148] = new damage("area_5", "level_1", "d6_5", 1, 2, 0, 0, 0, "A glancing blow", "Shoulders", "m", false);
	allCleaving[149] = new damage("area_5", "level_1", "d6_6", 1, 2, 0, 0, 0, "A glancing blow", "Shoulders", "m", false);
	
	allCleaving[150] = new damage("area_5", "level_2", "d6_1", 5, 4, 2, 0, 0, "You clip your Foe across the forehead", "Head (Upper)", "m", false);
	allCleaving[151] = new damage("area_5", "level_2", "d6_2", 5, 4, 2, 0, 0, "You clip your Foe across the forehead", "Head (Upper)", "m", false);			
	allCleaving[152] = new damage("area_5", "level_2", "d6_3", 5, 4, 2, 0, 0, "You clip your Foe across the forehead", "Head (Upper)", "m", false);
	allCleaving[153] = new damage("area_5", "level_2", "d6_4", 6, 5, 2, 0, 0, "Your strike unbalaces the Foe", "Head (Lower), including the Face", "m", false);
	allCleaving[154] = new damage("area_5", "level_2", "d6_5", 4, 4, 1, 0, 0, "Strike failed to connect well", "Shoulders", "m", false);
	allCleaving[155] = new damage("area_5", "level_2", "d6_6", 4, 4, 1, 0, 0, "Strike failed to connect well", "Shoulders", "m", false);
	
	allCleaving[156] = new damage("area_5", "level_3", "d6_1", 7, 6, 3, 1, 2, "Your blade wickers out, slicing off Foe's ear", "Head (Upper)", "m", false);
	allCleaving[157] = new damage("area_5", "level_3", "d6_2", 7, 6, 3, 1, 2, "Your blade wickers out, slicing off Foe's ear", "Head (Upper)", "m", false);			
	allCleaving[158] = new damage("area_5", "level_3", "d6_3", 7, 6, 3, 1, 2, "Your blade wickers out, slicing off Foe's ear", "Head (Upper)", "m", false);
	allCleaving[159] = new damage("area_5", "level_3", "d6_4", 8, 7, 3, 1, 1, "Catch Foe in the cheek. He drops his guard and stumbles away from you", "Head (Lower), including the Face", "m", false);
	allCleaving[160] = new damage("area_5", "level_3", "d6_5", 6, 6, 2, 0, 0, "Foe dances clear of the worst", "Shoulders", "m", false);
	allCleaving[161] = new damage("area_5", "level_3", "d6_6", 6, 6, 2, 0, 0, "Foe dances clear of the worst", "Shoulders", "m", false);
	
	allCleaving[162] = new damage("area_5", "level_4", "d6_1", 10, 9, 4, 2, 4, "Strike to brain sends Foe sprawling", "Head (Upper)", "m", false);
	allCleaving[163] = new damage("area_5", "level_4", "d6_2", 10, 9, 4, 2, 4, "Strike to brain sends Foe sprawling", "Head (Upper)", "m", false);			
	allCleaving[164] = new damage("area_5", "level_4", "d6_3", 10, 9, 4, 2, 4, "Strike to brain sends Foe sprawling", "Head (Upper)", "m", false);
	allCleaving[165] = new damage("area_5", "level_4", "d6_4", 11, 9, 4, 2, 2, "Strike along Foe's neck. Foe is frantic to escape death", "Head (Lower), including the Face", "m", false);
	allCleaving[166] = new damage("area_5", "level_4", "d6_5", 9, 9, 4, 0, 0, "Foe staggers away from your onslaught", "Shoulders", "m", false);
	allCleaving[167] = new damage("area_5", "level_4", "d6_6", 9, 9, 4, 0, 0, "Foe staggers away from your onslaught", "Shoulders", "m", false);
	
	allCleaving[168] = new damage("area_5", "level_5", "d6_1", "-", "-", "-", "-", "-", "Devastating strike through Foe's cranium. He falls to the left, dead", "Head (Upper)", "m", true);
	allCleaving[169] = new damage("area_5", "level_5", "d6_2", "-", "-", "-", "-", "-", "Devastating strike through Foe's cranium. He falls to the left, dead", "Head (Upper)", "m", true);			
	allCleaving[170] = new damage("area_5", "level_5", "d6_3", "-", "-", "-", "-", "-", "Devastating strike through Foe's cranium. He falls to the left, dead", "Head (Upper)", "m", true);
	allCleaving[171] = new damage("area_5", "level_5", "d6_4", 13, 11, 5, 3, 3, "Slice through Foe's cheek and into the throat", "Head (Lower), including the Face", "m", false);
	allCleaving[172] = new damage("area_5", "level_5", "d6_5", 11, 12, 5, 0, 0, "Tear open Foe's shoulder in a graphic display of violence", "Shoulders", "m", false);
	allCleaving[173] = new damage("area_5", "level_5", "d6_6", 11, 12, 5, 0, 0, "Tear open Foe's shoulder in a graphic display of violence", "Shoulders", "m", false);
	
	allCleaving[174] = new damage("area_5", "level_6", "d6_1", "-", "-", "-", "-", "-", "Your weapon slices through Foe's head and out the other side. Foe drops and dies", "Head (Upper)", "m", true);
	allCleaving[175] = new damage("area_5", "level_6", "d6_2", "-", "-", "-", "-", "-", "Your weapon slices through Foe's head and out the other side. Foe drops and dies", "Head (Upper)", "m", true);			
	allCleaving[176] = new damage("area_5", "level_6", "d6_3", "-", "-", "-", "-", "-", "Your weapon slices through Foe's head and out the other side. Foe drops and dies", "Head (Upper)", "m", true);
	allCleaving[177] = new damage("area_5", "level_6", "d6_4", "-", "-", "-", "-", "-", "Destroys Foe's jaw. Drives bone through brain. Foe dies instantly", "Head (Lower), including the Face", "m", true);
	allCleaving[178] = new damage("area_5", "level_6", "d6_5", "-", "-", "-", "-", "-", "Strike to Foe's shoulder severs an artery. Foe drops to his knees and dies", "Shoulders", "m", true);
	allCleaving[179] = new damage("area_5", "level_6", "d6_6", "-", "-", "-", "-", "-", "Strike to Foe's shoulder severs an artery. Foe drops to his knees and dies", "Shoulders", "m", true);
	
	// area six values
	allCleaving[180] = new damage("area_6", "level_1", "d6_1", 1, 2, 1, 0, 0, "Foe is concerned with his own preservation. He steps back five feet", "Inner Thigh", "m", false);
	allCleaving[181] = new damage("area_6", "level_1", "d6_2", 1, 2, 1, 0, 0, "Foe is concerned with his own preservation. He steps back five feet", "Inner Thigh", "m", false);			
	allCleaving[182] = new damage("area_6", "level_1", "d6_3", 1, 2, 1, 0, 0, "Foe is concerned with his own preservation. He steps back five feet", "Inner Thigh", "m", false);
	allCleaving[183] = new damage("area_6", "level_1", "d6_4", 4, 5, 1, 0, 0, "Your swing falls short when Foe leaps back", "Groin (Male)", "m", false);
	allCleaving[184] = new damage("area_6", "level_1", "d6_4", 1, 2, 0, 0, 0, "Your swing falls short when Foe leaps back", "Groin (Female)", "f", false);
	allCleaving[185] = new damage("area_6", "level_1", "d6_5", 2, 2, 0, 0, 0, "Good form but ineffectual", "Abdomen", "m", false);
	allCleaving[186] = new damage("area_6", "level_1", "d6_6", 2, 2, 0, 0, 0, "Foe rears back just in time to save his hide", "Chest", "m", false);
	
	allCleaving[187] = new damage("area_6", "level_2", "d6_1", 4, 4, 2, 0, 0, "Good attack angle but poor follow up", "Inner Thigh", "m", false);
	allCleaving[188] = new damage("area_6", "level_2", "d6_2", 4, 4, 2, 0, 0, "Good attack angle but poor follow up", "Inner Thigh", "m", false);			
	allCleaving[189] = new damage("area_6", "level_2", "d6_3", 4, 4, 2, 0, 0, "Good attack angle but poor follow up", "Inner Thigh", "m", false);
	allCleaving[190] = new damage("area_6", "level_2", "d6_4", 8, 7, 2, 0, 0, "Light swing to Foe's groin nicks Foe", "Groin (Male)", "m", false);
	allCleaving[191] = new damage("area_6", "level_2", "d6_4", 4, 4, 1, 0, 0, "Light swing to Foe's groin nicks Foe", "Groin (Female)", "f", false);
	allCleaving[192] = new damage("area_6", "level_2", "d6_5", 5, 5, 1, 0, 0, "Your weapon stings Foe, but nothing solid", "Abdomen", "m", false);
	allCleaving[193] = new damage("area_6", "level_2", "d6_6", 5, 4, 1, 0, 0, "Foe's fancy move earns him the tip of your blade", "Chest", "m", false);
	
	allCleaving[194] = new damage("area_6", "level_3", "d6_1", 6, 6, 3, 1, 0, "Foe jumps in the wrong direction and gets clipped", "Inner Thigh", "m", false);
	allCleaving[195] = new damage("area_6", "level_3", "d6_2", 6, 6, 3, 1, 0, "Foe jumps in the wrong direction and gets clipped", "Inner Thigh", "m", false);			
	allCleaving[196] = new damage("area_6", "level_3", "d6_3", 6, 6, 3, 1, 0, "Foe jumps in the wrong direction and gets clipped", "Inner Thigh", "m", false);
	allCleaving[197] = new damage("area_6", "level_3", "d6_4", 10, 9, 3, 0, 0, "Glancing blow takes skin with it", "Groin (Male)", "m", false);
	allCleaving[198] = new damage("area_6", "level_3", "d6_4", 6, 7, 2, 0, 0, "Glancing blow takes skin with it", "Groin (Female)", "f", false);
	allCleaving[199] = new damage("area_6", "level_3", "d6_5", 8, 8, 3, 0, 0, "Great finesse but low power", "Abdomen", "m", false);
	allCleaving[200] = new damage("area_6", "level_3", "d6_6", 8, 7, 2, 0, 0, "Your blow, though minor, causes Foe to drop back five feet", "Chest", "m", false);
	
	allCleaving[201] = new damage("area_6", "level_4", "d6_1", 9, 8, 4, 2, 0, "Foe loses resolve from your solid strike", "Inner Thigh", "m", false);
	allCleaving[202] = new damage("area_6", "level_4", "d6_2", 9, 8, 4, 2, 0, "Foe loses resolve from your solid strike", "Inner Thigh", "m", false);			
	allCleaving[203] = new damage("area_6", "level_4", "d6_3", 9, 8, 4, 2, 0, "Foe loses resolve from your solid strike", "Inner Thigh", "m", false);
	allCleaving[204] = new damage("area_6", "level_4", "d6_4", 12, 11, 4, 2, 0, "Solid blow to Foe's groint", "Groin (Male)", "m", false);
	allCleaving[205] = new damage("area_6", "level_4", "d6_4", 10, 9, 3, 2, 0, "Solid blow to Foe's groin", "Groin (Female)", "f", false);
	allCleaving[206] = new damage("area_6", "level_4", "d6_5", 11, 11, 5, 0, 0, "Solid strike sends Foe into defensive frenzy", "Abdomen", "m", false);
	allCleaving[207] = new damage("area_6", "level_4", "d6_6", 11, 10, 3, 0, 0, "A hard blow that leaves your Foe gasping for breath", "Chest", "m", false);
	
	allCleaving[208] = new damage("area_6", "level_5", "d6_1", 11, 10, 6, 3, 0, "Strike to side slips down into Foe's thigh. Foe reels away in agony", "Inner Thigh", "m", false);
	allCleaving[209] = new damage("area_6", "level_5", "d6_2", 11, 10, 6, 3, 0, "Strike to side slips down into Foe's thigh. Foe reels away in agony", "Inner Thigh", "m", false);			
	allCleaving[210] = new damage("area_6", "level_5", "d6_3", 11, 10, 6, 3, 0, "Strike to side slips down into Foe's thigh. Foe reels away in agony", "Inner Thigh", "m", false);
	allCleaving[211] = new damage("area_6", "level_5", "d6_4", 14, 13, 5, 3, 0, "Strike destroys Foe's vital organs", "Groin (Male)", "m", false);
	allCleaving[212] = new damage("area_6", "level_5", "d6_4", 11, 13, 5, 3, 0, "Strike destroys Foe's vital organs", "Groin (Female)", "f", false);
	allCleaving[213] = new damage("area_6", "level_5", "d6_5", 14, 14, 7, 0, 0, "Your weapon rips into Foe's stomach. Major abdominal wound", "Abdomen", "m", false);
	allCleaving[214] = new damage("area_6", "level_5", "d6_6", 14, 13, 5, 0, 0, "Upward swing gets hung up in Foe's ribs. Screaming, he tears himself away from your blade", "Chest", "m", false);
	
	allCleaving[215] = new damage("area_6", "level_6", "d6_1", 14, 12, 7, 4, 0, "Blow to Foe's thigh. Screaming, Foe twists out of it", "Inner Thigh", "m", false);
	allCleaving[216] = new damage("area_6", "level_6", "d6_2", 14, 12, 7, 4, 0, "Blow to Foe's thigh. Screaming, Foe twists out of it", "Inner Thigh", "m", false);			
	allCleaving[217] = new damage("area_6", "level_6", "d6_3", 14, 12, 7, 4, 0, "Blow to Foe's thigh. Screaming, Foe twists out of it", "Inner Thigh", "m", false);
	allCleaving[218] = new damage("area_6", "level_6", "d6_4", "-", "-", "-", "-", "-", "Chop through the top of Foe's groin and sever Foe's leg. Foe drops and dies", "Groin (Male)", "m", true);
	allCleaving[219] = new damage("area_6", "level_6", "d6_4", "-", "-", "-", "-", "-", "Chop through the top of Foe's groin and sever Foe's leg. Foe drops and dies", "Groin (Female)", "f", true);
	allCleaving[220] = new damage("area_6", "level_6", "d6_5", "-", "-", "-", "-", "-", "Disembowel Foe, killing him instantly", "Abdomen", "m", true);
	allCleaving[221] = new damage("area_6", "level_6", "d6_6", "-", "-", "-", "-", "-", "Upward slash through Foe's heart. Foe dies instantly", "Chest", "m", true);
	
	// area seven values
	allCleaving[222] = new damage("area_7", "level_1", "d6_1", 1, 2, 0, 0, 0, "A weak strike", "Hand", "m", false);
	allCleaving[223] = new damage("area_7", "level_1", "d6_2", 1, 2, 0, 0, 0, "Strike lands poorly", "Forearm", "m", false);			
	allCleaving[224] = new damage("area_7", "level_1", "d6_3", 1, 2, 0, 0, 0, "Strike lands poorly", "Forearm", "m", false);
	allCleaving[225] = new damage("area_7", "level_1", "d6_4", 1, 3, 0, 0, 0, "The worst of your attack is caught by Foe's shield", "Elbow", "m", false);
	allCleaving[226] = new damage("area_7", "level_1", "d6_5", 1, 2, 0, 0, 0, "Foe steps out of your reach", "Upper Arm and Shoulder", "m", false);
	allCleaving[227] = new damage("area_7", "level_1", "d6_6", 1, 2, 0, 0, 0, "Foe steps out of your reach", "Upper Arm and Shoulder", "m", false);
	
	allCleaving[228] = new damage("area_7", "level_2", "d6_1", 4, 4, 1, 0, 0, "Foe's evasion puts him on the defensive", "Hand", "m", false);
	allCleaving[229] = new damage("area_7", "level_2", "d6_2", 4, 4, 1, 0, 0, "Foe reels away from the worst of your attack", "Forearm", "m", false);			
	allCleaving[230] = new damage("area_7", "level_2", "d6_3", 4, 4, 1, 0, 0, "Foe reels away from the worst of your attack", "Forearm", "m", false);
	allCleaving[231] = new damage("area_7", "level_2", "d6_4", 4, 5, 1, 0, 0, "Point of your blade makes Foe yelp", "Elbow", "m", false);
	allCleaving[232] = new damage("area_7", "level_2", "d6_5", 4, 4, 1, 0, 0, "Your assault catches Foe in bicep and forces him back five feet", "Upper Arm and Shoulder", "m", false);
	allCleaving[233] = new damage("area_7", "level_2", "d6_6", 4, 4, 1, 0, 0, "Your assault catches Foe in bicep and forces him back five feet", "Upper Arm and Shoulder", "m", false);
	
	allCleaving[234] = new damage("area_7", "level_3", "d6_1", 6, 6, 2, 0, 0, "Foe's knuckles are laid bare defending against your strike", "Hand", "m", false);
	allCleaving[235] = new damage("area_7", "level_3", "d6_2", 6, 6, 2, 0, 0, "You make a long slice in Foe's weapon arm", "Forearm", "m", false);			
	allCleaving[236] = new damage("area_7", "level_3", "d6_3", 6, 6, 2, 0, 0, "You make a long slice in Foe's weapon arm", "Forearm", "m", false);
	allCleaving[237] = new damage("area_7", "level_3", "d6_4", 6, 7, 2, 0, 0, "Strike to Foe's elbow sends his shield into his teeth", "Elbow", "m", false);
	allCleaving[238] = new damage("area_7", "level_3", "d6_5", 6, 6, 3, 0, 0, "Your great form makes Foe cautious", "Upper Arm and Shoulder", "m", false);
	allCleaving[239] = new damage("area_7", "level_3", "d6_6", 6, 6, 3, 0, 0, "Your great form makes Foe cautious", "Upper Arm and Shoulder", "m", false);
	
	allCleaving[240] = new damage("area_7", "level_4", "d6_1", 9, 8, 3, 0, 0, "Foe tries to disarm you and pays with fingers", "Hand", "m", false);
	allCleaving[241] = new damage("area_7", "level_4", "d6_2", 9, 8, 3, 0, 0, "You are lucky to strike Foe's forearm while recovering from a lunge", "Forearm", "m", false);			
	allCleaving[242] = new damage("area_7", "level_4", "d6_3", 9, 8, 3, 0, 0, "You are lucky to strike Foe's forearm while recovering from a lunge", "Forearm", "m", false);
	allCleaving[243] = new damage("area_7", "level_4", "d6_4", 9, 9, 3, 0, 0, "Foe's clumsy shield work costs him", "Elbow", "m", false);
	allCleaving[244] = new damage("area_7", "level_4", "d6_5", 9, 8, 4, 0, 0, "Foe's awkward parry gives you the opening you've been waiting for", "Upper Arm and Shoulder", "m", false);
	allCleaving[245] = new damage("area_7", "level_4", "d6_6", 9, 8, 4, 0, 0, "Foe's awkward parry gives you the opening you've been waiting for", "Upper Arm and Shoulder", "m", false);
	
	allCleaving[246] = new damage("area_7", "level_5", "d6_1", 11, 11, 4, 0, 0, "Butcher chop to hand freezes Foe in agony", "Hand", "m", false);
	allCleaving[247] = new damage("area_7", "level_5", "d6_2", 11, 11, 4, 0, 0, "Your blow cuts deep and severs an important vein", "Forearm", "m", false);			
	allCleaving[248] = new damage("area_7", "level_5", "d6_3", 11, 11, 4, 0, 0, "Your blow cuts deep and severs an important vein", "Forearm", "m", false);
	allCleaving[249] = new damage("area_7", "level_5", "d6_4", 11, 11, 4, 0, 0, "Your strike opens Foe's elbow to the bone", "Elbow", "m", false);
	allCleaving[250] = new damage("area_7", "level_5", "d6_5", 11, 10, 5, 0, 0, "Blow to shoulder has Foe panting in pain", "Upper Arm and Shoulder", "m", false);
	allCleaving[251] = new damage("area_7", "level_5", "d6_6", 11, 10, 5, 0, 0, "Blow to shoulder has Foe panting in pain", "Upper Arm and Shoulder", "m", false);
	
	allCleaving[252] = new damage("area_7", "level_6", "d6_1", 14, 13, 5, 0, 0, "Foe screams as severed hand lands behind him", "Hand", "m", false);
	allCleaving[253] = new damage("area_7", "level_6", "d6_2", 14, 13, 5, 0, 0, "Block Foe's weapon arm away and nearly sever it", "Forearm", "m", false);			
	allCleaving[254] = new damage("area_7", "level_6", "d6_3", 14, 13, 5, 0, 0, "Block Foe's weapon arm away and nearly sever it", "Forearm", "m", false);
	allCleaving[255] = new damage("area_7", "level_6", "d6_4", 14, 13, 5, 0, 0, "Foe dances away in shock, pulling free of your blade", "Elbow", "m", false);
	allCleaving[256] = new damage("area_7", "level_6", "d6_5", 14, 12, 6, 0, 0, "Massive wound to upper arm causes Foe to howl in agony", "Upper Arm and Shoulder", "m", false);
	allCleaving[257] = new damage("area_7", "level_6", "d6_6", 14, 12, 6, 0, 0, "Massive wound to upper arm causes Foe to howl in agony", "Upper Arm and Shoulder", "m", false);
}

function setupPiercing(){
	// area eight values
	allPiercing[0] = new damage("area_8", "level_1", "d6_1", 0, 2, 0, 0, 0, "Strike lands without energy", "Foot", "m", false);
	allPiercing[1] = new damage("area_8", "level_1", "d6_2", 0, 2, 0, 0, 0, "Your thrust nicks Foe's calf", "Shin and Lower Leg", "m", false);
	allPiercing[2] = new damage("area_8", "level_1", "d6_3", 0, 2, 0, 0, 0, "Your thrust nicks Foe's calf", "Shin and Lower Leg", "m", false);
	allPiercing[3] = new damage("area_8", "level_1", "d6_4", 0, 2, 0, 0, 0, "Your thrust nicks Foe's calf", "Shin and Lower Leg", "m", false);
	allPiercing[4] = new damage("area_8", "level_1", "d6_5", 0, 2, 0, 0, 0, "Foe questions his resolve", "Knee and Nearby Areas", "m", false);
	allPiercing[5] = new damage("area_8", "level_1", "d6_6", "-", "-", "-", "-", "-", "Missed the target - better luck next time", "Passed between Legs", "m", false);
	
	allPiercing[6] = new damage("area_8", "level_2", "d6_1", 1, 4, 0, 0, 0, "Foe's evasion puts him out of position", "Foot", "m", false);
	allPiercing[7] = new damage("area_8", "level_2", "d6_2", 1, 4, 1, 0, 0, "Strike lands oddly", "Shin and Lower Leg", "m", false);
	allPiercing[8] = new damage("area_8", "level_2", "d6_3", 1, 4, 1, 0, 0, "Strike lands oddly", "Shin and Lower Leg", "m", false);
	allPiercing[9] = new damage("area_8", "level_2", "d6_4", 1, 4, 1, 0, 0, "Strike lands oddly", "Shin and Lower Leg", "m", false);
	allPiercing[10] = new damage("area_8", "level_2", "d6_5", 2, 4, 1, 0, 0, "Cheap shot to Foe's knee", "Knee and Nearby Areas", "m", false);
	allPiercing[11] = new damage("area_8", "level_2", "d6_6", "-", "-", "-", "-", "-", "Missed the target - better luck next time", "Passed between Legs", "m", false);
	
	allPiercing[12] = new damage("area_8", "level_3", "d6_1", 3, 6, 1, 1, 0, "Foe panics", "Foot", "m", false);
	allPiercing[13] = new damage("area_8", "level_3", "d6_2", 3, 6, 2, 1, 0, "Foe is fearful of your skill and steps back from your onslaught", "Shin and Lower Leg", "m", false);
	allPiercing[14] = new damage("area_8", "level_3", "d6_3", 3, 6, 2, 1, 0, "Foe is fearful of your skill and steps back from your onslaught", "Shin and Lower Leg", "m", false);
	allPiercing[15] = new damage("area_8", "level_3", "d6_4", 3, 6, 2, 1, 0, "Foe is fearful of your skill and steps back from your onslaught", "Shin and Lower Leg", "m", false);
	allPiercing[16] = new damage("area_8", "level_3", "d6_5", 4, 7, 2, 1, 0, "Foe steps back defensively", "Knee and Nearby Areas", "m", false);
	allPiercing[17] = new damage("area_8", "level_3", "d6_6", "-", "-", "-", "-", "-", "Missed the target - better luck next time", "Passed between Legs", "m", false);
	
	allPiercing[18] = new damage("area_8", "level_4", "d6_1", 6, 8, 2, 1, 0, "Foe staggers from the impact", "Foot", "m", false);
	allPiercing[19] = new damage("area_8", "level_4", "d6_2", 6, 8, 3, 2, 0, "Deal Foe a measurable blow to his leg. Any low hanging container on your Foe is sliced open", "Shin and Lower Leg", "m", false);
	allPiercing[20] = new damage("area_8", "level_4", "d6_3", 6, 8, 3, 2, 0, "Deal Foe a measurable blow to his leg. Any low hanging container on your Foe is sliced open", "Shin and Lower Leg", "m", false);
	allPiercing[21] = new damage("area_8", "level_4", "d6_4", 6, 8, 3, 2, 0, "Deal Foe a measurable blow to his leg. Any low hanging container on your Foe is sliced open", "Shin and Lower Leg", "m", false);
	allPiercing[22] = new damage("area_8", "level_4", "d6_5", 7, 9, 3, 2, 0, "Catch Foe's leg, opening a wounds below the knee", "Knee and Nearby Areas", "m", false);
	allPiercing[23] = new damage("area_8", "level_4", "d6_6", "-", "-", "-", "-", "-", "Missed the target - better luck next time", "Passed between Legs", "m", false);
	
	allPiercing[24] = new damage("area_8", "level_5", "d6_1", 8, 10, 3, 2, 0, "Massive thrust to foot. If Foe has shoe, the blow rips it off", "Foot", "m", false);
	allPiercing[25] = new damage("area_8", "level_5", "d6_2", 8, 10, 3, 2, 0, "Foe is too late to leap away from your thrust", "Shin and Lower Leg", "m", false);
	allPiercing[26] = new damage("area_8", "level_5", "d6_3", 8, 10, 3, 2, 0, "Foe is too late to leap away from your thrust", "Shin and Lower Leg", "m", false);
	allPiercing[27] = new damage("area_8", "level_5", "d6_4", 8, 10, 3, 2, 0, "Foe is too late to leap away from your thrust", "Shin and Lower Leg", "m", false);
	allPiercing[28] = new damage("area_8", "level_5", "d6_5", 9, 11, 3, 2, 0, "Strike plunges into leg with deadly effect. Foe panics", "Knee and Nearby Areas", "m", false);
	allPiercing[29] = new damage("area_8", "level_5", "d6_6", "-", "-", "-", "-", "-", "Missed the target - better luck next time", "Passed between Legs", "m", false);
	
	allPiercing[30] = new damage("area_8", "level_6", "d6_1", 11, 12, 3, 3, 0, "Your strike pins Foe's foot to the floor", "Foot", "m", false);
	allPiercing[31] = new damage("area_8", "level_6", "d6_2", 11, 12, 4, 3, 0, "Agonizing blow to Foe's leg. He stumbles five feet to your left", "Shin and Lower Leg", "m", false);
	allPiercing[32] = new damage("area_8", "level_6", "d6_3", 11, 12, 4, 3, 0, "Agonizing blow to Foe's leg. He stumbles five feet to your left", "Shin and Lower Leg", "m", false);
	allPiercing[33] = new damage("area_8", "level_6", "d6_4", 11, 12, 4, 3, 0, "Agonizing blow to Foe's leg. He stumbles five feet to your left", "Shin and Lower Leg", "m", false);
	allPiercing[34] = new damage("area_8", "level_6", "d6_5", 12, 13, 4, 3, 0, "Strike pierces both of Foe's legs. He moans in agony", "Knee and Nearby Areas", "m", false);
	allPiercing[35] = new damage("area_8", "level_6", "d6_6", "-", "-", "-", "-", "-", "Missed the target - better luck next time", "Passed between Legs", "m", false);
	
	// area nine values
	allPiercing[36] = new damage("area_9", "level_1", "d6_1", 0, 2, 0, 0, 0, "Glancing blow to Foe's upper leg", "Knee and Nearby Areas", "m", false);
	allPiercing[37] = new damage("area_9", "level_1", "d6_2", 0, 2, 0, 0, 0, "Foe twitches away; slight damage", "Thigh", "m", false);
	allPiercing[38] = new damage("area_9", "level_1", "d6_3", 0, 2, 0, 0, 0, "Foe twitches away; slight damage", "Thigh", "m", false);
	allPiercing[39] = new damage("area_9", "level_1", "d6_4", 0, 2, 0, 0, 0, "Foe twitches away; slight damage", "Thigh", "m", false);
	allPiercing[40] = new damage("area_9", "level_1", "d6_5", 0, 2, 0, 0, 0, "Foe twitches away; slight damage", "Thigh", "m", false);
	allPiercing[41] = new damage("area_9", "level_1", "d6_6", 0, 2, 0, 0, 0, "Foe steps back and avoids the worst", "Hip", "m", false);
	
	allPiercing[42] = new damage("area_9", "level_2", "d6_1", 2, 4, 1, 0, 0, "Strike to Foe's leg causes his stride to falter", "Knee and Nearby Areas", "m", false);
	allPiercing[43] = new damage("area_9", "level_2", "d6_2", 2, 4, 1, 0, 0, "Foe's evasion lowers his guard", "Thigh", "m", false);
	allPiercing[44] = new damage("area_9", "level_2", "d6_3", 2, 4, 1, 0, 0, "Foe's evasion lowers his guard", "Thigh", "m", false);
	allPiercing[45] = new damage("area_9", "level_2", "d6_4", 2, 4, 1, 0, 0, "Foe's evasion lowers his guard", "Thigh", "m", false);
	allPiercing[46] = new damage("area_9", "level_2", "d6_5", 2, 4, 1, 0, 0, "Foe's evasion lowers his guard", "Thigh", "m", false);
	allPiercing[47] = new damage("area_9", "level_2", "d6_6", 2, 4, 1, 0, 0, "Hip strike leaves Foe shaken and trying to recover", "Hip", "m", false);
	
	allPiercing[48] = new damage("area_9", "level_3", "d6_1", 4, 7, 2, 1, 0, "Strike Foe in upper leg, blade grinds against bone", "Knee and Nearby Areas", "m", false);
	allPiercing[49] = new damage("area_9", "level_3", "d6_2", 4, 6, 2, 1, 0, "Deep wound in Foe's thigh", "Thigh", "m", false);
	allPiercing[50] = new damage("area_9", "level_3", "d6_3", 4, 6, 2, 1, 0, "Deep wound in Foe's thigh", "Thigh", "m", false);
	allPiercing[51] = new damage("area_9", "level_3", "d6_4", 4, 6, 2, 1, 0, "Deep wound in Foe's thigh", "Thigh", "m", false);
	allPiercing[52] = new damage("area_9", "level_3", "d6_5", 4, 6, 2, 1, 0, "Deep wound in Foe's thigh", "Thigh", "m", false);
	allPiercing[53] = new damage("area_9", "level_3", "d6_6", 4, 6, 2, 0, 0, "Strike bites into Foe's hip. The impact sounds terrible", "Hip", "m", false); // double check this value
	
	allPiercing[54] = new damage("area_9", "level_4", "d6_1", 7, 9, 3, 2, 0, "Excellent attack to knee slides deeply and punctures muscle", "Knee and Nearby Areas", "m", false);
	allPiercing[55] = new damage("area_9", "level_4", "d6_2", 7, 8, 3, 1, 0, "Strike to Foe's thigh slashes muscle. Foe spins off-balance", "Thigh", "m", false);
	allPiercing[56] = new damage("area_9", "level_4", "d6_3", 7, 8, 3, 1, 0, "Strike to Foe's thigh slashes muscle. Foe spins off-balance", "Thigh", "m", false);
	allPiercing[57] = new damage("area_9", "level_4", "d6_4", 7, 8, 3, 1, 0, "Strike to Foe's thigh slashes muscle. Foe spins off-balance", "Thigh", "m", false);
	allPiercing[58] = new damage("area_9", "level_4", "d6_5", 7, 8, 3, 1, 0, "Strike to Foe's thigh slashes muscle. Foe spins off-balance", "Thigh", "m", false);
	allPiercing[59] = new damage("area_9", "level_4", "d6_6", 7, 9, 3, 1, 0, "Solid blow to Foe's hip leaves his side numb and bloody", "Hip", "m", false);
	
	allPiercing[60] = new damage("area_9", "level_5", "d6_1", 9, 11, 3, 2, 0, "Savage strike to kneecap has Foe shrieking in agony", "Knee and Nearby Areas", "m", false);
	allPiercing[61] = new damage("area_9", "level_5", "d6_2", 9, 10, 4, 2, 0, "Strike pierces cleanly and tears free in a bloody finish", "Thigh", "m", false);
	allPiercing[62] = new damage("area_9", "level_5", "d6_3", 9, 10, 4, 2, 0, "Strike pierces cleanly and tears free in a bloody finish", "Thigh", "m", false);
	allPiercing[63] = new damage("area_9", "level_5", "d6_4", 9, 10, 4, 2, 0, "Strike pierces cleanly and tears free in a bloody finish", "Thigh", "m", false);
	allPiercing[64] = new damage("area_9", "level_5", "d6_5", 9, 10, 4, 2, 0, "Strike pierces cleanly and tears free in a bloody finish", "Thigh", "m", false);
	allPiercing[65] = new damage("area_9", "level_5", "d6_6", 9, 12, 4, 2, 0, "Foe is run through the hip. His eyes glaze over", "Hip", "m", false);
	
	allPiercing[66] = new damage("area_9", "level_6", "d6_1", 12, 13, 4, 3, 0, "Amazing strike to knee area. If Foe has armor it is ripped away", "Knee and Nearby Areas", "m", false);
	allPiercing[67] = new damage("area_9", "level_6", "d6_2", 12, 12, 5, 4, 0, "Foe runs up half the length of your blade", "Thigh", "m", false);
	allPiercing[68] = new damage("area_9", "level_6", "d6_3", 12, 12, 5, 4, 0, "Foe runs up half the length of your blade", "Thigh", "m", false);
	allPiercing[69] = new damage("area_9", "level_6", "d6_4", 12, 12, 5, 4, 0, "Foe runs up half the length of your blade", "Thigh", "m", false);
	allPiercing[70] = new damage("area_9", "level_6", "d6_5", 12, 12, 5, 4, 0, "Foe runs up half the length of your blade", "Thigh", "m", false);
	allPiercing[71] = new damage("area_9", "level_6", "d6_6", 12, 14, 6, 3, 0, "Foe's sloppy footwork gets him stuck on your blade", "Hip", "m", false);
	
	// area ten values
	allPiercing[72] = new damage("area_10", "level_1", "d6_1", 2, 2, 0, 0, 0, "Strike fails to pierce", "Hip", "m", false);
	allPiercing[73] = new damage("area_10", "level_1", "d6_2", 2, 2, 0, 0, 0, "Strike fails to pierce", "Hip", "m", false);
	allPiercing[74] = new damage("area_10", "level_1", "d6_3", 2, 5, 1, 0, 0, "Close call has him sweating", "Groin (Male)", "m", false);
	allPiercing[75] = new damage("area_10", "level_1", "d6_4", 2, 5, 1, 0, 0, "Close call has him sweating", "Groin (Male)", "m", false);
	allPiercing[76] = new damage("area_10", "level_1", "d6_3", 0, 2, 0, 0, 0, "Foe is fearful of your skill and leaps back from your flashing blade", "Groin (Female)", "f", false);
	allPiercing[77] = new damage("area_10", "level_1", "d6_4", 2, 2, 0, 0, 0, "Strike fails to pierce", "Groin (Female)", "f", false);
	allPiercing[78] = new damage("area_10", "level_1", "d6_5", 0, 2, 0, 0, 0, "Foe is fearful of your skill and leaps back from your flashing blade", "Lower Abdomen", "m", false);
	allPiercing[79] = new damage("area_10", "level_1", "d6_6", 0, 2, 0, 0, 0, "Foe is fearful of your skill and leaps back from your flashing blade", "Lower Abdomen", "m", false);
	
	allPiercing[80] = new damage("area_10", "level_2", "d6_1", 2, 4, 1, 0, 0, "Thrust slices into Foe's hip. He yells as though burned", "Hip", "m", false);
	allPiercing[81] = new damage("area_10", "level_2", "d6_2", 2, 4, 1, 0, 0, "Thrust slices into Foe's hip. He yells as though burned", "Hip", "m", false);
	allPiercing[82] = new damage("area_10", "level_2", "d6_3", 6, 7, 2, 0, 0, "Foe dances clear of the worst", "Groin (Male)", "m", false);
	allPiercing[83] = new damage("area_10", "level_2", "d6_4", 6, 7, 2, 0, 0, "Foe dances clear of the worst", "Groin (Male)", "m", false);
	allPiercing[84] = new damage("area_10", "level_2", "d6_3", 3, 5, 2, 0, 0, "Foe evades and maneuvers for a better position", "Groin (Female)", "f", false);
	allPiercing[85] = new damage("area_10", "level_2", "d6_4", 2, 4, 1, 0, 0, "Thrust slices into Foe's hip. She yells as though burned", "Groin (Female)", "f", false);
	allPiercing[86] = new damage("area_10", "level_2", "d6_5", 3, 5, 2, 0, 0, "Foe evades and maneuvers for a better position", "Lower Abdomen", "m", false);
	allPiercing[87] = new damage("area_10", "level_2", "d6_6", 3, 5, 2, 0, 0, "Foe evades and maneuvers for a better position", "Lower Abdomen", "m", false);
	
	allPiercing[88] = new damage("area_10", "level_3", "d6_1", 4, 6, 2, 0, 0, "Probing strike makes Foe cautious", "Hip", "m", false);
	allPiercing[89] = new damage("area_10", "level_3", "d6_2", 4, 6, 2, 0, 0, "Probing strike makes Foe cautious", "Hip", "m", false);
	allPiercing[90] = new damage("area_10", "level_3", "d6_3", 8, 9, 3, 0, 0, "Foe reels back from blow", "Groin (Male)", "m", false);
	allPiercing[91] = new damage("area_10", "level_3", "d6_4", 8, 9, 3, 0, 0, "Foe reels back from blow", "Groin (Male)", "m", false);
	allPiercing[92] = new damage("area_10", "level_3", "d6_3", 5, 8, 4, 0, 0, "Strike through Foe's bladder has her frantic to escape", "Groin (Female)", "f", false);
	allPiercing[93] = new damage("area_10", "level_3", "d6_4", 4, 6, 2, 0, 0, "Probing strike makes Foe cautious", "Groin (Female)", "f", false);
	allPiercing[94] = new damage("area_10", "level_3", "d6_5", 5, 8, 4, 0, 0, "Strike through Foe's bladder has him frantic to escape", "Lower Abdomen", "m", false);
	allPiercing[95] = new damage("area_10", "level_3", "d6_6", 5, 8, 4, 0, 0, "Strike through Foe's bladder has him frantic to escape", "Lower Abdomen", "m", false);
	
	allPiercing[96] = new damage("area_10", "level_4", "d6_1", 7, 9, 3, 1, 0, "Foe's sluggish defense gives you the opening you’ve waited for", "Hip", "m", false);
	allPiercing[97] = new damage("area_10", "level_4", "d6_2", 7, 9, 3, 1, 0, "Foe's sluggish defense gives you the opening you’ve waited for", "Hip", "m", false);
	allPiercing[98] = new damage("area_10", "level_4", "d6_3", 10, 11, 4, 1, 0, "Foe screeches in pain from your vicious attack", "Groin (Male)", "m", false);
	allPiercing[99] = new damage("area_10", "level_4", "d6_4", 10, 11, 4, 1, 0, "Foe screeches in pain from your vicious attack", "Groin (Male)", "m", false);
	allPiercing[100] = new damage("area_10", "level_4", "d6_3", 8, 10, 5, 0, 0, "Strike up and through Foe's kidney", "Groin (Female)", "f", false);
	allPiercing[101] = new damage("area_10", "level_4", "d6_4", 7, 9, 3, 1, 0, "Foe's sluggish defense gives you the opening you’ve waited for", "Groin (Female)", "f", false);
	allPiercing[102] = new damage("area_10", "level_4", "d6_5", 8, 10, 5, 0, 0, "Strike up and through Foe's kidney", "Lower Abdomen", "m", false);
	allPiercing[103] = new damage("area_10", "level_4", "d6_6", 8, 10, 5, 0, 0, "Strike up and through Foe's kidney", "Lower Abdomen", "m", false);
	
	allPiercing[104] = new damage("area_10", "level_5", "d6_1", 9, 12, 4, 2, 0, "Savage strike rips equipment from right side of Foe's waist", "Hip", "m", false);
	allPiercing[105] = new damage("area_10", "level_5", "d6_2", 9, 12, 4, 2, 0, "Savage strike rips equipment from right side of Foe's waist", "Hip", "m", false);
	allPiercing[106] = new damage("area_10", "level_5", "d6_3", 12, 13, 5, 2, 0, "Foe stumbles free, tearing himself off of your point. He is having trouble breathing", "Groin (Male)", "m", false);
	allPiercing[107] = new damage("area_10", "level_5", "d6_4", 12, 13, 5, 2, 0, "Foe stumbles free, tearing himself off of your point. He is having trouble breathing", "Groin (Male)", "m", false);
	allPiercing[108] = new damage("area_10", "level_5", "d6_3", 10, 12, 6, 0, 0, "Major abdominal wound. Blood pours out in frightening quantities", "Groin (Female)", "f", false);
	allPiercing[109] = new damage("area_10", "level_5", "d6_4", 9, 12, 4, 2, 0, "Savage strike rips equipment from right side of Foe's waist", "Groin (Female)", "f", false);
	allPiercing[110] = new damage("area_10", "level_5", "d6_5", 10, 12, 6, 0, 0, "Major abdominal wound. Blood pours out in frightening quantities", "m", false);
	allPiercing[111] = new damage("area_10", "level_5", "d6_6", 10, 12, 6, 0, 0, "Major abdominal wound. Blood pours out in frightening quantities", "m", false);
	
	allPiercing[112] = new damage("area_10", "level_6", "d6_1", 12, 14, 6, 3, 0, "Authoritative thrust briefly pins Foe's weapon hand to his hip", "Hip", "m", false);
	allPiercing[113] = new damage("area_10", "level_6", "d6_2", 12, 14, 6, 3, 0, "Authoritative thrust briefly pins Foe's weapon hand to his hip", "Hip", "m", false);
	allPiercing[114] = new damage("area_10", "level_6", "d6_3", 14, 15, 7, 3, 0, "Rip Foe's groin wide open with twisting strike that leaves him horrified", "Groin (Male)", "m", false);
	allPiercing[115] = new damage("area_10", "level_6", "d6_4", 14, 15, 7, 3, 0, "Rip Foe's groin wide open with twisting strike that leaves him horrified", "Groin (Male)", "m", false);
	allPiercing[116] = new damage("area_10", "level_6", "d6_3", "-", "-", "-", "-", "-", "Tear out Foe's guts in a graphic display of violence", "Groin (Female)", "f", true);
	allPiercing[117] = new damage("area_10", "level_6", "d6_4", 12, 14, 6, 3, 0, "Authoritative thrust briefly pins Foe's weapon hand to her hip", "Groin (Female)", "f", false);
	allPiercing[118] = new damage("area_10", "level_6", "d6_5", "-", "-", "-", "-", "-", "Tear out Foe's guts in a graphic display of violence", "Lower Abdomen", "m", true);
	allPiercing[119] = new damage("area_10", "level_6", "d6_6", "-", "-", "-", "-", "-", "Tear out Foe's guts in a graphic display of violence", "Lower Abdomen", "m", true);
	
	// area eleven values
	allPiercing[120] = new damage("area_11", "level_1", "d6_1", 0, 2, 0, 0, 0, "Your thrust falls short when Foe leaps back", "Lower Abdomen", "m", false);
	allPiercing[121] = new damage("area_11", "level_1", "d6_2", 0, 2, 0, 0, 0, "Your thrust falls short when Foe leaps back", "Lower Abdomen", "m", false);
	allPiercing[122] = new damage("area_11", "level_1", "d6_3", 0, 2, 0, 0, 0, "Your thrust falls short when Foe leaps back", "Lower Abdomen", "m", false);
	allPiercing[123] = new damage("area_11", "level_1", "d6_4", 0, 2, 0, 0, 0, "Your thrust falls short when Foe leaps back", "Lower Abdomen", "m", false);
	allPiercing[124] = new damage("area_11", "level_1", "d6_5", 0, 2, 0, 0, 0, "Your thrust falls short when Foe leaps back", "Lower Abdomen", "m", false);
	allPiercing[125] = new damage("area_11", "level_1", "d6_6", "Level +1", "Level +2", 1, 0, 0, "Pierced body without hitting any major organs, mostly just flesh and muscles. It hurts and bleeds, but probably isn’t lethal", "Flesh to the Side", "m", false);
	
	allPiercing[126] = new damage("area_11", "level_2", "d6_1", 3, 5, 2, 0, 0, "Thrust catches Foe lightly as he spins away", "Lower Abdomen", "m", false);
	allPiercing[127] = new damage("area_11", "level_2", "d6_2", 3, 5, 2, 0, 0, "Thrust catches Foe lightly as he spins away", "Lower Abdomen", "m", false);
	allPiercing[128] = new damage("area_11", "level_2", "d6_3", 3, 5, 2, 0, 0, "Thrust catches Foe lightly as he spins away", "Lower Abdomen", "m", false);
	allPiercing[129] = new damage("area_11", "level_2", "d6_4", 3, 5, 2, 0, 0, "Thrust catches Foe lightly as he spins away", "Lower Abdomen", "m", false);
	allPiercing[130] = new damage("area_11", "level_2", "d6_5", 3, 5, 2, 0, 0, "Thrust catches Foe lightly as he spins away", "Lower Abdomen", "m", false);
	allPiercing[131] = new damage("area_11", "level_2", "d6_6", "Level +1", "Level +2", 1, 0, 0, "Pierced body without hitting any major organs, mostly just flesh and muscles. It hurts and bleeds, but probably isn’t lethal", "Flesh to the Side", "m", false);
	
	allPiercing[132] = new damage("area_11", "level_3", "d6_1", 5, 8, 4, 0, 0, "Foe staggers away from the worst of your strike", "Lower Abdomen", "m", false);
	allPiercing[133] = new damage("area_11", "level_3", "d6_2", 5, 8, 4, 0, 0, "Foe staggers away from the worst of your strike", "Lower Abdomen", "m", false);
	allPiercing[134] = new damage("area_11", "level_3", "d6_3", 5, 8, 4, 0, 0, "Foe staggers away from the worst of your strike", "Lower Abdomen", "m", false);
	allPiercing[135] = new damage("area_11", "level_3", "d6_4", 5, 8, 4, 0, 0, "Foe staggers away from the worst of your strike", "Lower Abdomen", "m", false);
	allPiercing[136] = new damage("area_11", "level_3", "d6_5", 5, 8, 4, 0, 0, "Foe staggers away from the worst of your strike", "Lower Abdomen", "m", false);
	allPiercing[137] = new damage("area_11", "level_3", "d6_6", "Level +1", "Level +2", 1, 0, 0, "Pierced body without hitting any major organs, mostly just flesh and muscles. It hurts and bleeds, but probably isn’t lethal", "Flesh to the Side", "m", false);
	
	allPiercing[138] = new damage("area_11", "level_4", "d6_1", 8, 10, 5, 0, 0, "Plunge through Foe's guts with impressive follow-through", "Lower Abdomen", "m", false);
	allPiercing[139] = new damage("area_11", "level_4", "d6_2", 8, 10, 5, 0, 0, "Plunge through Foe's guts with impressive follow-through", "Lower Abdomen", "m", false);
	allPiercing[140] = new damage("area_11", "level_4", "d6_3", 8, 10, 5, 0, 0, "Plunge through Foe's guts with impressive follow-through", "Lower Abdomen", "m", false);
	allPiercing[141] = new damage("area_11", "level_4", "d6_4", 8, 10, 5, 0, 0, "Plunge through Foe's guts with impressive follow-through", "Lower Abdomen", "m", false);
	allPiercing[142] = new damage("area_11", "level_4", "d6_5", 8, 10, 5, 0, 0, "Plunge through Foe's guts with impressive follow-through", "Lower Abdomen", "m", false);
	allPiercing[143] = new damage("area_11", "level_4", "d6_6", "Level +1", "Level +2", 1, 0, 0, "Pierced body without hitting any major organs, mostly just flesh and muscles. It hurts and bleeds, but probably isn’t lethal", "Flesh to the Side", "m", false);
	
	allPiercing[144] = new damage("area_11", "level_5", "d6_1", 10, 12, 6, 0, 0, "Strike tears in just below Foe's belt. He's frozen in pain", "Lower Abdomen", "m", false);
	allPiercing[145] = new damage("area_11", "level_5", "d6_2", 10, 12, 6, 0, 0, "Strike tears in just below Foe's belt. He's frozen in pain", "Lower Abdomen", "m", false);
	allPiercing[146] = new damage("area_11", "level_5", "d6_3", 10, 12, 6, 0, 0, "Strike tears in just below Foe's belt. He's frozen in pain", "Lower Abdomen", "m", false);
	allPiercing[147] = new damage("area_11", "level_5", "d6_4", 10, 12, 6, 0, 0, "Strike tears in just below Foe's belt. He's frozen in pain", "Lower Abdomen", "m", false);
	allPiercing[148] = new damage("area_11", "level_5", "d6_5", 10, 12, 6, 0, 0, "Strike tears in just below Foe's belt. He's frozen in pain", "Lower Abdomen", "m", false);
	allPiercing[149] = new damage("area_11", "level_5", "d6_6", "Level +1", "Level +2", 1, 0, 0, "Pierced body without hitting any major organs, mostly just flesh and muscles. It hurts and bleeds, but probably isn’t lethal", "Flesh to the Side", "m", false);
	
	allPiercing[150] = new damage("area_11", "level_6", "d6_1", "-", "-", "-", "-", "-", "Strike through Foe's belly spills his guts to the floor. He's dead", "Lower Abdomen", "m", true);
	allPiercing[151] = new damage("area_11", "level_6", "d6_2", "-", "-", "-", "-", "-", "Strike through Foe's belly spills his guts to the floor. He's dead", "Lower Abdomen", "m", true);
	allPiercing[152] = new damage("area_11", "level_6", "d6_3", "-", "-", "-", "-", "-", "Strike through Foe's belly spills his guts to the floor. He's dead", "Lower Abdomen", "m", true);
	allPiercing[153] = new damage("area_11", "level_6", "d6_4", "-", "-", "-", "-", "-", "Strike through Foe's belly spills his guts to the floor. He's dead", "Lower Abdomen", "m", true);
	allPiercing[154] = new damage("area_11", "level_6", "d6_5", "-", "-", "-", "-", "-", "Strike through Foe's belly spills his guts to the floor. He's dead", "Lower Abdomen", "m", true);
	allPiercing[155] = new damage("area_11", "level_6", "d6_6", "Level +1", "Level +2", 1, 0, 0, "Pierced body without hitting any major organs, mostly just flesh and muscles. It hurts and bleeds, but probably isn’t lethal", "Flesh to the Side", "m", false);
	
	// area twelve values
	allPiercing[156] = new damage("area_12", "level_1", "d6_1", 0, 2, 0, 0, 0, "Catch Foe in ribs. He drops his guard and leaps back", "Under the Ribs (Upper Abdomen)", "m", false);
	allPiercing[157] = new damage("area_12", "level_1", "d6_2", 0, 2, 0, 0, 0, "Catch Foe in ribs. He drops his guard and leaps back", "Under the Ribs (Upper Abdomen)", "m", false);
	allPiercing[158] = new damage("area_12", "level_1", "d6_3", 0, 3, 0, 0, 0, "Minor chest wound. It could have been much better", "Chest", "m", false);
	allPiercing[159] = new damage("area_12", "level_1", "d6_4", 0, 3, 0, 0, 0, "Minor chest wound. It could have been much better", "Chest", "m", false);
	allPiercing[160] = new damage("area_12", "level_1", "d6_5", 0, 3, 0, 0, 0, "Minor chest wound. It could have been much better", "Chest", "m", false);
	allPiercing[161] = new damage("area_12", "level_1", "d6_6", 0, 3, 0, 0, 0, "Minor chest wound. It could have been much better", "Chest", "m", false);
	
	allPiercing[162] = new damage("area_12", "level_2", "d6_1", 3, 5, 2, 0, 0, "Foe mostly deflects your attack", "Under the Ribs (Upper Abdomen)", "m", false);
	allPiercing[163] = new damage("area_12", "level_2", "d6_2", 3, 5, 2, 0, 0, "Foe mostly deflects your attack", "Under the Ribs (Upper Abdomen)", "m", false);
	allPiercing[164] = new damage("area_12", "level_2", "d6_3", 3, 5, 2, 0, 0, "Foe's attempt at daring riposte costs him", "Chest", "m", false);
	allPiercing[165] = new damage("area_12", "level_2", "d6_4", 3, 5, 2, 0, 0, "Foe's attempt at daring riposte costs him", "Chest", "m", false);
	allPiercing[166] = new damage("area_12", "level_2", "d6_5", 3, 5, 2, 0, 0, "Foe's attempt at daring riposte costs him", "Chest", "m", false);
	allPiercing[167] = new damage("area_12", "level_2", "d6_6", 3, 5, 2, 0, 0, "Foe's attempt at daring riposte costs him", "Chest", "m", false);
	
	allPiercing[168] = new damage("area_12", "level_3", "d6_1", 5, 8, 4, 0, 0, "Foe's evasion puts him out of position", "Under the Ribs (Upper Abdomen)", "m", false);
	allPiercing[169] = new damage("area_12", "level_3", "d6_2", 5, 8, 4, 0, 0, "Foe's evasion puts him out of position", "Under the Ribs (Upper Abdomen)", "m", false);
	allPiercing[170] = new damage("area_12", "level_3", "d6_3", 6, 7, 4, 0, 0, "Minor chest wound numbs Foe", "Chest", "m", false);
	allPiercing[171] = new damage("area_12", "level_3", "d6_4", 6, 7, 4, 0, 0, "Minor chest wound numbs Foe", "Chest", "m", false);
	allPiercing[172] = new damage("area_12", "level_3", "d6_5", 6, 7, 4, 0, 0, "Minor chest wound numbs Foe", "Chest", "m", false);
	allPiercing[173] = new damage("area_12", "level_3", "d6_6", 6, 7, 4, 0, 0, "Minor chest wound numbs Foe", "Chest", "m", false);
	
	allPiercing[174] = new damage("area_12", "level_4", "d6_1", 8, 10, 5, 0, 0, "Solid thrust to Foe's abdomen has blood spraying everywhere", "Under the Ribs (Upper Abdomen)", "m", false);
	allPiercing[175] = new damage("area_12", "level_4", "d6_2", 8, 10, 5, 0, 0, "Solid thrust to Foe's abdomen has blood spraying everywhere", "Under the Ribs (Upper Abdomen)", "m", false);
	allPiercing[176] = new damage("area_12", "level_4", "d6_3", 9, 9, 5, 0, 0, "Foe whirls left into your strike", "Chest", "m", false);
	allPiercing[177] = new damage("area_12", "level_4", "d6_4", 9, 9, 5, 0, 0, "Foe whirls left into your strike", "Chest", "m", false);
	allPiercing[178] = new damage("area_12", "level_4", "d6_5", 9, 9, 5, 0, 0, "Foe whirls left into your strike", "Chest", "m", false);
	allPiercing[179] = new damage("area_12", "level_4", "d6_6", 9, 9, 5, 0, 0, "Foe whirls left into your strike", "Chest", "m", false);
	
	allPiercing[180] = new damage("area_12", "level_5", "d6_1", 10, 12, 6, 0, 0, "Lightning strike up and through ribs staggers Foe back and off your blade", "Under the Ribs (Upper Abdomen)", "m", false);
	allPiercing[181] = new damage("area_12", "level_5", "d6_2", 10, 12, 6, 0, 0, "Lightning strike up and through ribs staggers Foe back and off your blade", "Under the Ribs (Upper Abdomen)", "m", false);
	allPiercing[182] = new damage("area_12", "level_5", "d6_3", 12, 11, 6, 0, 0, "Strike plunges into Foe's chest and emerges from the other side", "Chest", "m", false);
	allPiercing[183] = new damage("area_12", "level_5", "d6_4", 12, 11, 6, 0, 0, "Strike plunges into Foe's chest and emerges from the other side", "Chest", "m", false);
	allPiercing[184] = new damage("area_12", "level_5", "d6_5", 12, 11, 6, 0, 0, "Strike plunges into Foe's chest and emerges from the other side", "Chest", "m", false);
	allPiercing[185] = new damage("area_12", "level_5", "d6_6", 12, 11, 6, 0, 0, "Strike plunges into Foe's chest and emerges from the other side", "Chest", "m", false);
	
	allPiercing[186] = new damage("area_12", "level_6", "d6_1", "-", "-", "-", "-", "-", "Strike through both lungs. Foe drops and passes out. He dies during the next Limelight", "Under the Ribs (Upper Abdomen)", "m", true);
	allPiercing[187] = new damage("area_12", "level_6", "d6_2", "-", "-", "-", "-", "-", "Strike through both lungs. Foe drops and passes out. He dies during the next Limelight", "Under the Ribs (Upper Abdomen)", "m", true);
	allPiercing[188] = new damage("area_12", "level_6", "d6_3", "-", "-", "-", "-", "-", "Shot through heart sends Foe reeling back ten feet to a place suitable for death", "Chest", "m", true);
	allPiercing[189] = new damage("area_12", "level_6", "d6_4", "-", "-", "-", "-", "-", "Shot through heart sends Foe reeling back ten feet to a place suitable for death", "Chest", "m", true);
	allPiercing[190] = new damage("area_12", "level_6", "d6_5", "-", "-", "-", "-", "-", "Shot through heart sends Foe reeling back ten feet to a place suitable for death", "Chest", "m", true);
	allPiercing[191] = new damage("area_12", "level_6", "d6_6", "-", "-", "-", "-", "-", "Shot through heart sends Foe reeling back ten feet to a place suitable for death", "Chest", "m", true);
	
	// area thirteen values
	allPiercing[192] = new damage("area_13", "level_1", "d6_1", 0, 2, 1, 0, 0, "Foe dodges with vigor to avoid the worst of your assault", "Collar and Throat", "m", false);
	allPiercing[193] = new damage("area_13", "level_1", "d6_2", 0, 2, 1, 0, 0, "Foe dodges with vigor to avoid the worst of your assault", "Collar and Throat", "m", false);
	allPiercing[194] = new damage("area_13", "level_1", "d6_3", 1, 2, 1, 0, 0, "Foe slips, narrowly escaping", "Face", "m", false);
	allPiercing[195] = new damage("area_13", "level_1", "d6_4", 1, 2, 1, 0, 0, "Foe slips, narrowly escaping", "Face", "m", false);
	allPiercing[196] = new damage("area_13", "level_1", "d6_5", 1, 2, 1, 0, 0, "Foe slips, narrowly escaping", "Face", "m", false);
	allPiercing[197] = new damage("area_13", "level_1", "d6_6", 1, 2, 1, 0, 0, "Foe slips, narrowly escaping", "Face", "m", false);
	
	allPiercing[198] = new damage("area_13", "level_2", "d6_1", 3, 4, 3, 0, 0, "Foe deflects the weight of your strike at the last moment", "Collar and Throat", "m", false);
	allPiercing[199] = new damage("area_13", "level_2", "d6_2", 3, 4, 3, 0, 0, "Foe deflects the weight of your strike at the last moment", "Collar and Throat", "m", false);
	allPiercing[200] = new damage("area_13", "level_2", "d6_3", 4, 4, 1, 0, 0, "Foe's defense earns him a momentary reprieve", "Face", "m", false);
	allPiercing[201] = new damage("area_13", "level_2", "d6_4", 4, 4, 1, 0, 0, "Foe's defense earns him a momentary reprieve", "Face", "m", false);
	allPiercing[202] = new damage("area_13", "level_2", "d6_5", 4, 4, 1, 0, 0, "Foe's defense earns him a momentary reprieve", "Face", "m", false);
	allPiercing[203] = new damage("area_13", "level_2", "d6_6", 4, 4, 1, 0, 0, "Foe's defense earns him a momentary reprieve", "Face", "m", false);
	
	allPiercing[204] = new damage("area_13", "level_3", "d6_1", 6, 6, 5, 0, 0, "Shot caroms off Foe's shoulder and up into throat", "Collar and Throat", "m", false);
	allPiercing[205] = new damage("area_13", "level_3", "d6_2", 6, 6, 5, 0, 0, "Shot caroms off Foe's shoulder and up into throat", "Collar and Throat", "m", false);
	allPiercing[206] = new damage("area_13", "level_3", "d6_3", 6, 6, 3, 0, 0, "Thrust slips through lips and jaw", "Face", "m", false);
	allPiercing[207] = new damage("area_13", "level_3", "d6_4", 6, 6, 3, 0, 0, "Thrust slips through lips and jaw", "Face", "m", false);
	allPiercing[208] = new damage("area_13", "level_3", "d6_5", 6, 6, 3, 0, 0, "Thrust slips through lips and jaw", "Face", "m", false);
	allPiercing[209] = new damage("area_13", "level_3", "d6_6", 6, 6, 3, 0, 0, "Thrust slips through lips and jaw", "Face", "m", false);
	
	allPiercing[210] = new damage("area_13", "level_4", "d6_1", 9, 8, 6, 0, 0, "Excellent strike to collar slices through muscle and tendon", "Collar and Throat", "m", false);
	allPiercing[211] = new damage("area_13", "level_4", "d6_2", 9, 8, 6, 0, 0, "Excellent strike to collar slices through muscle and tendon", "Collar and Throat", "m", false);
	allPiercing[212] = new damage("area_13", "level_4", "d6_3", 9, 8, 4, 1, 0, "Strike through nose. Foe's eyes cross momentarily", "Face", "m", false);
	allPiercing[213] = new damage("area_13", "level_4", "d6_4", 9, 8, 4, 1, 0, "Strike through nose. Foe's eyes cross momentarily", "Face", "m", false);
	allPiercing[214] = new damage("area_13", "level_4", "d6_5", 9, 8, 4, 1, 0, "Strike through nose. Foe's eyes cross momentarily", "Face", "m", false);
	allPiercing[215] = new damage("area_13", "level_4", "d6_6", 9, 8, 4, 1, 0, "Strike through nose. Foe's eyes cross momentarily", "Face", "m", false);
	
	allPiercing[216] = new damage("area_13", "level_5", "d6_1", 12, 10, 7, 1, 0, "Strike through throat mangles veins and arteries. Foe can't breathe", "Collar and Throat", "m", false);
	allPiercing[217] = new damage("area_13", "level_5", "d6_2", 12, 10, 7, 1, 0, "Strike through throat mangles veins and arteries. Foe can't breathe", "Collar and Throat", "m", false);
	allPiercing[218] = new damage("area_13", "level_5", "d6_3", "-", "-", "-", "-", "-", "Strike plunges through Foe's eye. Instant death", "Face", "m", true);
	allPiercing[219] = new damage("area_13", "level_5", "d6_4", "-", "-", "-", "-", "-", "Strike plunges through Foe's eye. Instant death", "Face", "m", true);
	allPiercing[220] = new damage("area_13", "level_5", "d6_5", "-", "-", "-", "-", "-", "Strike plunges through Foe's eye. Instant death", "Face", "m", true);
	allPiercing[221] = new damage("area_13", "level_5", "d6_6", "-", "-", "-", "-", "-", "Strike plunges through Foe's eye. Instant death", "Face", "m", true);
	
	allPiercing[222] = new damage("area_13", "level_6", "d6_1", "-", "-", "-", "-", "-", "Piercing strike up through Adam's Apple. Foe dies instantly", "Collar and Throat", "m", true);
	allPiercing[223] = new damage("area_13", "level_6", "d6_2", "-", "-", "-", "-", "-", "Piercing strike up through Adam's Apple. Foe dies instantly", "Collar and Throat", "m", true);
	allPiercing[224] = new damage("area_13", "level_6", "d6_3", "-", "-", "-", "-", "-", "Thrust goes through both ears. Foe drops dead", "Face", "m", true);
	allPiercing[225] = new damage("area_13", "level_6", "d6_4", "-", "-", "-", "-", "-", "Thrust goes through both ears. Foe drops dead", "Face", "m", true);
	allPiercing[226] = new damage("area_13", "level_6", "d6_5", "-", "-", "-", "-", "-", "Thrust goes through both ears. Foe drops dead", "Face", "m", true);
	allPiercing[227] = new damage("area_13", "level_6", "d6_6", "-", "-", "-", "-", "-", "Thrust goes through both ears. Foe drops dead", "Face", "m", true);
	
	// area fourteen values
	allPiercing[228] = new damage("area_14", "level_1", "d6_1", 0, 2, 0, 0, 0, "Foe evades, maneuvering for a better position", "Hand", "m", false);
	allPiercing[229] = new damage("area_14", "level_1", "d6_2", 0, 2, 0, 0, 0, "Strike lands without energy", "Forearm", "m", false);
	allPiercing[230] = new damage("area_14", "level_1", "d6_3", 0, 2, 0, 0, 0, "Strike lands without energy", "Forearm", "m", false);
	allPiercing[231] = new damage("area_14", "level_1", "d6_4", 0, 2, 0, 0, 0, "Strike prods Foe back", "Elbow", "m", false);
	allPiercing[232] = new damage("area_14", "level_1", "d6_5", 0, 2, 0, 0, 0, "Foe veers away and avoids all but the tip of your blade", "Upper Arm", "m", false);
	allPiercing[233] = new damage("area_14", "level_1", "d6_6", 0, 2, 0, 0, 0, "Foe veers away and avoids all but the tip of your blade", "Upper Arm", "m", false);
	
	allPiercing[234] = new damage("area_14", "level_2", "d6_1", 2, 3, 0, 0, 0, "Strike twists as it lands, blunting the attack", "Hand", "m", false);
	allPiercing[235] = new damage("area_14", "level_2", "d6_2", 2, 3, 1, 0, 0, "Slice Foe's forearm with long follow-through", "Forearm", "m", false);
	allPiercing[236] = new damage("area_14", "level_2", "d6_3", 2, 3, 1, 0, 0, "Slice Foe's forearm with long follow-through", "Forearm", "m", false);
	allPiercing[237] = new damage("area_14", "level_2", "d6_4", 2, 4, 1, 0, 0, "Strike pierces flesh of Foe's elbow", "Elbow", "m", false);
	allPiercing[238] = new damage("area_14", "level_2", "d6_5", 2, 4, 1, 0, 0, "Strike costs Foe", "Upper Arm", "m", false);
	allPiercing[239] = new damage("area_14", "level_2", "d6_6", 2, 4, 1, 0, 0, "Strike costs Foe", "Upper Arm", "m", false);
	
	allPiercing[240] = new damage("area_14", "level_3", "d6_1", 4, 5, 1, 0, 0, "Stinging thrust through fleshy web of Foe's hand", "Hand", "m", false);
	allPiercing[241] = new damage("area_14", "level_3", "d6_2", 4, 5, 2, 0, 0, "Strike along Foe's arm. The damage takes a moment to show", "Forearm", "m", false);
	allPiercing[242] = new damage("area_14", "level_3", "d6_3", 4, 5, 2, 0, 0, "Strike along Foe's arm. The damage takes a moment to show", "Forearm", "m", false);
	allPiercing[243] = new damage("area_14", "level_3", "d6_4", 4, 6, 2, 0, 0, "Foe catches your attack on his elbow", "Elbow", "m", false);
	allPiercing[244] = new damage("area_14", "level_3", "d6_5", 4, 5, 2, 0, 0, "Stinging shot through Foe's bicep", "Upper Arm", "m", false);
	allPiercing[245] = new damage("area_14", "level_3", "d6_6", 4, 5, 2, 0, 0, "Stinging shot through Foe's bicep", "Upper Arm", "m", false);
	
	allPiercing[246] = new damage("area_14", "level_4", "d6_1", 7, 7, 2, 0, 0, "Artful attack claims a digit", "Hand", "m", false);
	allPiercing[247] = new damage("area_14", "level_4", "d6_2", 7, 7, 3, 0, 0, "Deep wound to Foe's arm bleeds fiercly", "Forearm", "m", false);
	allPiercing[248] = new damage("area_14", "level_4", "d6_3", 7, 7, 3, 0, 0, "Deep wound to Foe's arm bleeds fiercly", "Forearm", "m", false);
	allPiercing[249] = new damage("area_14", "level_4", "d6_4", 7, 9, 3, 0, 0, "Foe's leap sends your point through the flesh of his elbow. He pulls free", "Elbow", "m", false);
	allPiercing[250] = new damage("area_14", "level_4", "d6_5", 7, 7, 3, 0, 0, "Solid strike pierces flesh and digs into bone", "Upper Arm", "m", false);
	allPiercing[251] = new damage("area_14", "level_4", "d6_6", 7, 7, 3, 0, 0, "Solid strike pierces flesh and digs into bone", "Upper Arm", "m", false);
	
	allPiercing[252] = new damage("area_14", "level_5", "d6_1", 9, 9, 3, 0, 0, "Strike and flick leaves two fingers hanging by threads", "Hand", "m", false);
	allPiercing[253] = new damage("area_14", "level_5", "d6_2", 9, 9, 3, 0, 0, "Savage stab to Foe's arm makes him hiss with pain", "Forearm", "m", false);
	allPiercing[254] = new damage("area_14", "level_5", "d6_3", 9, 9, 3, 0, 0, "Savage stab to Foe's arm makes him hiss with pain", "Forearm", "m", false);
	allPiercing[255] = new damage("area_14", "level_5", "d6_4", 9, 11, 3, 0, 0, "Foe is stunned when his flurry ends with your steel buried in him", "Elbow", "m", false);
	allPiercing[256] = new damage("area_14", "level_5", "d6_5", 9, 9, 4, 0, 0, "Foe loses concentration long enough for your thrust to connect", "Upper Arm", "m", false);
	allPiercing[257] = new damage("area_14", "level_5", "d6_6", 9, 9, 4, 0, 0, "Foe loses concentration long enough for your thrust to connect", "Upper Arm", "m", false);

	allPiercing[258] = new damage("area_14", "level_6", "d6_1", 11, 11, 4, 0, 0, "Brutal thrust pierces Foe's hand", "Hand", "m", false);
	allPiercing[259] = new damage("area_14", "level_6", "d6_2", 11, 11, 4, 0, 0, "Strike ricochets through muscle in shield arm. If Foe has shield, he drops it", "Forearm", "m", false);
	allPiercing[260] = new damage("area_14", "level_6", "d6_3", 11, 11, 4, 0, 0, "Strike ricochets through muscle in shield arm. If Foe has shield, he drops it", "Forearm", "m", false);
	allPiercing[261] = new damage("area_14", "level_6", "d6_4", 11, 13, 4, 0, 0, "Strike plunges into doomed Foe's elbow and rips out through other side", "Elbow", "m", false);
	allPiercing[262] = new damage("area_14", "level_6", "d6_5", 11, 11, 5, 0, 0, "Savage strike pins Foe's arm briefly to his side", "Upper Arm", "m", false);
	allPiercing[263] = new damage("area_14", "level_6", "d6_6", 11, 11, 5, 0, 0, "Savage strike pins Foe's arm briefly to his side", "Upper Arm", "m", false);
}
	
function setupSwung(){}

// end hiding script from old browsers -->
