n = 5; 

string = "";

for( i = 0; i < n; i++) { 
  for( j = 0; j < n; j++) { 
    string += "*";
  }
  
  string += "\n";
}

console.log(string);