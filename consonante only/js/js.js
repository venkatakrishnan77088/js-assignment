function vovel(b){

a=b;
c=""
for(i=0;i<a.length;i++){
	if(a[i]!='a' && a[i]!='e' && a[i]!='i'  && a[i]!='o'  && a[i]!='u'){
		c+=a[i]
		
}}	
return c
}
p=prompt("enter the string")
y=vovel(p)
console.log(y)