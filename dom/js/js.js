f=document.createElement("Button")
f.setAttribute("onclick","start();");
f.innerHTML="click Me"
document.body.appendChild(f);
w=document.createElement("div");


function start(){
   p=document.createElement("Button");
   p.setAttribute("onclick","multipleof3();"); 
   p.innerHTML="start";
   document.body.appendChild(p)
   q=document.createElement("Button");
   q.setAttribute("onclick","run();");
   document.body.appendChild(q)
   q.innerHTML="run";
 
}
 
 
 
 
 
 
 
 function multipleof3(){
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("placeholder", "enter the number:");
  
    x.setAttribute("id","n1");
  
   var y = document.createElement("INPUT");
   y.setAttribute("type", "text");
   y.setAttribute("placeholder", "enter the range:");
   y.setAttribute("id","n2");
   document.body.appendChild(x);
   document.body.appendChild(y);
  
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