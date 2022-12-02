var x=createElement("form");
 
 
 function getAdd(){
	  const num1 = Number(document.getElementById("val1").value);
         
        // Fetch the value of input with id val2
        const num2 = Number(document.getElementById("val2").value);
        for(i=num1;num1<=num2;i=i*3){
         
        // Displays the result in paragraph using dom
        document.getElementById("result").innerHTML = "multiple of 3: " + i;
         
        // Changes the color of paragraph tag with red
        document.getElementById("result").style.color = "red";
		}
 }