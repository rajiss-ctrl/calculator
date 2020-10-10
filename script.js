//function for displaying result and input numbers/operators
function dis(val){
document.querySelector("#result").value+=val;
}

// function for evaluation
function solve(){
	var x = document.querySelector("#result").value;
	var y = eval(x)
	document.querySelector("#result").value = y
}

// function for deleting or clearing

function clr(){
	document.querySelector("#result").value="";
}