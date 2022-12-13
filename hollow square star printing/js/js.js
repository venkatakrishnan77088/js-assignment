a=parseInt(prompt("enter the row value"))
string= "";
for(i=0;i<5;i++){
	for(j=0;j<5;j++){
		if (j==0 || i==0 ||  i==a-1 || j==a-1){
			string += "*";
	}else{
		string+=" "
	}}
	string+="\n";
	
	
	}
	console.log(string)