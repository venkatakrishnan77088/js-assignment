function add(a,b){
	
	return a+b;
}


function sub(a,b){
	
	return a-b;
}


function mul(a,b){
	return a*b;
}

function div(a,b){
	
	return a/b;
}

data1=parseInt(prompt("enter the first input"))
data2=parseInt(prompt("enter the second input"))
ac=prompt("enter what action you perfom enter 1 for addtion,enter 2 for sub,enter 3 for multiplication,enter 4 for divition")

if(1==ac){
	console.log(add(data1,data2))
}
else if(2==ac){
	console.log(sub(data1,data2))
}
else if(3==ac){
	console.log(mul(data1,data2))
}
else if(4==ac){
	console.log(div(data1,data2))
}
	
	
	
	
	
	
