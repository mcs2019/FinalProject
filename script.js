function Currency(){
		y = document.getElementById("converter").value;
		return y;
	}
 
function Calculate(){
	y = Currency();
 
	x = document.getElementById("value1").value;
 
	if(x == ""){
		document.getElementById("value2").value = "";
	}else{
		switch(y){
			case "Dollar":
				document.getElementById("value2").value = x * 4.09;
			break;
 
			case "Euro":
				document.getElementById("value2").value =(x * 4.56).toFixed(2);
			break;
 
		}
	}
};

function Temperature(){
		y = document.getElementById("temp").value;
		return y;
	}
 
function CalculateTemp(){
	y = Temperature();
 
	x = document.getElementById("t1").value;
 
	if(x == ""){
		document.getElementById("t2").value = "";
	}else{
		switch(y){
			case "Celsius":
				document.getElementById("t2").value =((x - 32) * 5/9).toFixed(2);
        
        
			break;
 
			case "Fahrenheit":
				document.getElementById("t2").value =((x - 32) * 5/9).toFixed(2);
			break;
 
		}
	}
}