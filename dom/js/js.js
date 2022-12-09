Button=document.createElement("Button")
Button.setAttribute("onclick","start();");
Button.innerHTML="click Me1"
//document.div.appendChild(Button);
z=document.createElement("span")
z.setAttribute("id","one")
document.body.appendChild(z);
sp=document.getElementById("one")
sp.appendChild(Button);
//u=document.getElementById("op")
//u.appendChild(Button)
//z.setAttribute("id","one")
//i=document.getElementById("one")
//i.appendChild(Button)

//z=document.getElementsByName("div")
//document.

//document.body.background-color="#00FFFF";




body.setAttribute("id","f2")
body.setAttribute("background-color","#00FFFF")
function start(){
   startButton=document.createElement("Button");
   startButton.setAttribute("onclick","multipleof3();"); 
   startButton.innerHTML="start";
   document.body.appendChild(startButton)
  
 
}
 function multipleof3(){
    var inputButton1 = document.createElement("INPUT");
    inputButton1.setAttribute("type", "text");
    inputButton1.setAttribute("placeholder", "enter the number:");
	inputButton1.setAttribute("style","background-color:white")
    inputButton1.style.border="10px solid #48C9B0";
	inputButton1.style.width="30%"
	inputButton1.style.borderRadius="5px"
	inputButton1.style.height="70px"
	inputButton1.style.marginLeft="35%"
    inputButton1.setAttribute("id","n1");
	document.write("<br>");
document.write("<br>");
document.write("<br>");
  
   var inputButton2 = document.createElement("INPUT");
   inputButton2.setAttribute("type", "text");
   
   inputButton2.setAttribute("placeholder", "enter the range:");
   inputButton2.setAttribute("id","n2");
   inputButton2.setAttribute("style","background-color:white")
 
   
   document.body.appendChild(inputButton1);
   document.write("<br>");
   document.write("<br>");
   document.write("<br>");
   inputButton2.style.width="30%"
   inputButton2.style.height="70px"
   inputButton2.style.borderRadius="5px"
   inputButton2.style.marginLeft="35%"
   inputButton2.style.border="10px solid #F8C471";
   document.body.appendChild(inputButton2);
   runButton=document.createElement("Button");
   runButton.setAttribute("onclick","run();");
   runButton.style.marginLeft="35%"
   runButton.style.height="70px"
   runButton.style.width="20%"
   runButton.style.borderRadius="5px"
   runButton.style.backgroundColor="#F5CBA7"
   document.write("<br>");
   document.write("<br>");
   document.write("<br>");
   document.body.appendChild(runButton)
   runButton.innerHTML="run";
 div1=document.createElement("div")
 div1.style.marginLeft="37%"
 div1.style.marginTop="10px"
 document.body.appendChild(div1);
  
 }
 
 function run(){
  num1 = Number(document.getElementById("n1").value);
         
        // Fetch the value of input with id val2
  num2 = Number(document.getElementById("n2").value);
        for(i=1;i<=num2;i++){
			m=num1*i
			console.log(m)
			
			//document.write(m+"</br>");
             div1.innerHTML+=m+"</br>"
        // Displays the result in paragraph using dom
       
         
}
 
}