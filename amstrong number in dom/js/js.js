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
   inputButton1.style.width="30%";
   inputButton1.style.height="60px";
   inputButton1.style.border="40px solid #85C1E9";
   inputButton1.style.borderRadius="5px";
   inputButton1.style.marginLeft="37%";
   inputButton1.style.backgroundColor="white"
   document.body.appendChild(inputButton1);
   
  

   
   runButton=document.createElement("Button");
   
   runButton.setAttribute("onclick","run();");
   runButton.style.width="10%"
   runButton.style.marginLeft="5%"
   runButton.style.height="60px"
   

   
   document.body.appendChild(runButton)
   runButton.innerHTML="run";
}
function venkat(s){
	 let a=0
	while(s>0){
		rem=s%10
		a+=1
		s=(s-rem)/10
	}
	return a;
}
  
  
 function run(){
  num1 = Number(document.getElementById("n1").value);

//if (venkat(a)>0){  
z=num1; 
n=venkat(num1); 
                      
	
p=0
while(num1>0){
	digit=num1%10
	digit1=digit**n;
	p+=digit1
	num1=(num1-digit)/10
	//console.log(digit1,a,digit)
}
	//console.log(p,z)
if(z==p){
	document.write("it is amstrong number")
}else{
	document.write("it is not amstrong number")
}
}

