<!-- hide script from old browsers

function shift(text, n1, n2){
	var result = "";
	var counter = 0;
  
	for (var i = 0; i < text.length; i++) {
		var shift = parseInt(n2, 10);
		
		if (counter % 2 === 0)  // if we're at an even index, use n1 shift value, else, use the n2 value
			shift = parseInt(n1, 10);
	  
		var c = text.charCodeAt(i);
		
		if (c >= 65 && c <=  90){ // Uppercase
			result += String.fromCharCode((c - 65 + shift) % 26 + 65);
		  	counter++;
	  	}
		else if (c >= 97 && c <= 122){ // Lowercase
			result += String.fromCharCode((c - 97 + shift) % 26 + 97);
			counter++;
		}
		else  // Copy
			result += text.charAt(i);
	}
  
  return result;
}

function shift(text, n){
	var result = "";
	var counter = 0;
  
	for (var i = 0; i < text.length; i++) {
		var shift = parseInt(n, 10);
		
		var c = text.charCodeAt(i);
		
		if (c >= 65 && c <=  90){ // Uppercase
			result += String.fromCharCode((c - 65 + shift) % 26 + 65);
		  	counter++;
	  	}
		else if (c >= 97 && c <= 122){ // Lowercase
			result += String.fromCharCode((c - 97 + shift) % 26 + 97);
			counter++;
		}
		else  // Copy
			result += text.charAt(i);
	}
  
  return result;
}

// end hiding script from old browsers -->
