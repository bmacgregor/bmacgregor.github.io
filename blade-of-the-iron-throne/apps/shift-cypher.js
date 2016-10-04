<!-- hide script from old browsers

function shift(text, n1, n2){
  var result = "";
  
  for (var i = 0; i < text.length; i++) {
    var shift = n2;
    
    if (n1 % 2 === 1)
      shift = n1;
      
		var c = text.charCodeAt(i);
		if      (c >= 65 && c <=  90) result += String.fromCharCode((c - 65 + shift) % 26 + 65);  // Uppercase
		else if (c >= 97 && c <= 122) result += String.fromCharCode((c - 97 + shift) % 26 + 97);  // Lowercase
		else                          result += text.charAt(i);  // Copy
	}
  
  return result;
}

// end hiding script from old browsers -->
