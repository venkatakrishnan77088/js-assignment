a=parseInt(prompt("enter the value"))
string= "";
for(i=0;i<a;i++){
	for(j=0;j<a;j++){
		if (j==0 || i==0 ||  i==a-1 || j==a-1){
			string += "*";
	}else{
		string+=" "
	}}
	string+="\n";
	
	
	}
console.log(string)