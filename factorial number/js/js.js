Button=document.createElement("Button")
Button.setAttribute("onclick","start();");
Button.innerHTML="click Me"
document.body.appendChild(Button);
r=document.write("<br> <br>")
document.body.appendChild(r);


function start(){
	var inputButton1 = document.createElement("INPUT");
    inputButton1.setAttribute("type", "text");
    inputButton1.setAttribute("placeholder", "enter the number:");
   inputButton1.setAttribute("id","n1");
   
   inputButton1.style.backgroundColor="white";
inputButton1.style.border="10px solid #F0B27A";
inputButton1.style.marginLeft="10%";
inputButton1.style.width="20%";
inputButton1.style.padding="10px";


document.write("<br>");
   document.write("<br>");
   document.write("<br>");
   document.body.appendChild(inputButton1);
   
   
   
    runButton=document.createElement("Button");
   runButton.setAttribute("onclick","run();");
   runButton.style.marginLeft="10%";
   runButton.style.width="10%";
runButton.style.padding="10px";
runButton.style.backgroundColor="#E6B0AA";

   document.write("<br>");
   document.write("<br>");
   document.write("<br>");
   document.body.appendChild(runButton)
   runButton.innerHTML="run";
   output=document.createElement("div")
   output.style.marginLeft="12%"
   output.style.marginTop="10px";
   runButton.style.borderRadius="5px"
   document.body.appendChild(output)
   
}
function run(){
  num1 = Number(document.getElementById("n1").value);
  
 
 s=1
 for(i=1;i<=num1;i++){
	 s*=i
 }
 output.innerHTML=s;
 
}