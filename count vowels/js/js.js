function vovel(b){
//a=prompt("enter the word")
//console.log(a.length)
a=b;
c=0
for(i=0;i<a.length;i++){
	if(a[i]=='a' || a[i]=='e' || a[i]=='i'  || a[i]=='o'  || a[i]=='u'){
		c+=1
}}	
return c
}

z=prompt("enter the first string")    //venkat
v=prompt("enter the second string")   //adhi
if(vovel(z)>vovel(v))
{
	console.log(z)
}
else if(vovel(z)<vovel(v)){
	console.log(v)
}
else{
	console.log("two string are same")
}
//console.log(n)


/*
*/