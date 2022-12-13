/*n = 5; 

string = "";

for( i = 0; i < n; i++) { 
  for( j = 0; j < n; j++) { 
    string += "*";
  }
  
  string += "\n";
}

console.log(string);*/
string= "";
for(i=0;i<5;i++){
	for(j=0;j<5;j++){
		if (j==0 || i==0 ||  i==4 || j==4){
			string += "*";
	}else{
		string+=" "
	}}
	string+="\n";
	
	
	}
	console.log(string)