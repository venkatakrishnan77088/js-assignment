Button=document.createElement("Button")
Button.setAttribute("onclick","start();");
Button.innerHTML="click Me"
document.body.appendChild(Button);
//w=document.createElement("div");


function start(){
   startButton=document.createElement("Button");
   startButton.setAttribute("onclick","multipleof3();"); 
   startButton.innerHTML="start";
   document.body.appendChild(startButton)
  /* q=document.createElement("Button");
   q.setAttribute("onclick","run();");
   document.body.appendChild(q)
   q.innerHTML="run";*/
 
}
 function multipleof3(){
    var inputButton1 = document.createElement("INPUT");
    inputButton1.setAttribute("type", "text");
    inputButton1.setAttribute("placeholder", "enter the number:");
  
    inputButton1.setAttribute("id","n1");
  
   var inputButton2 = document.createElement("INPUT");
   inputButton2.setAttribute("type", "text");
   inputButton2.setAttribute("placeholder", "enter the range:");
   inputButton2.setAttribute("id","n2");
   document.body.appendChild(inputButton1);
   document.body.appendChild(inputButton2);
   runButton=document.createElement("Button");
   runButton.setAttribute("onclick","run();");
   document.body.appendChild(runButton)
   runButton.innerHTML="run";
 
  
 }
 function run(){
  num1 = Number(document.getElementById("n1").value);
         
        // Fetch the value of input with id val2
  num2 = Number(document.getElementById("n2").value);
        for(i=1;i<=num2;i++){
			m=num1*i
			console.log(m)
			document.write(m+"</br>");
         
        // Displays the result in paragraph using dom
       
         
}
 
}