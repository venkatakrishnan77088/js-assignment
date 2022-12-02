 function getAdd(){
	  num1 = Number(document.getElementById("val1").value);
         
        // Fetch the value of input with id val2
       num2 = Number(document.getElementById("val2").value);
        for(i=1;i<=num2;i++){
			m=num1*i
			console.log(m)
         
        // Displays the result in paragraph using dom
        document.getElementById("result").innerHTML = "multiple of 3: " + m;
         
        // Changes the color of paragraph tag with red
        //document.getElementById("result").style.color = "red";
		}
 }