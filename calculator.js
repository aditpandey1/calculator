var buttons=document.getElementsByTagName('button');
var disp=document.getElementById('display1');
var exp=[];
var count=0;
var as=false;
disp.innerText='';
function func(){
 var value=this.innerText;
if(value=='+'||value=='*'||value=='/'||value=='-'||value=='%'){
 exp[count]=disp.innerText;
 count++;
 disp.innerText=value;
}
else if(value=='='){
	 exp[count]=disp.innerText;
     count++;
   var str='';
   for(var i=0;i<count;i++){
   	str=str+exp[i];
   } 
   var result=eval(str);
   disp.innerText=result;
   count=0;
   as=true;
	

}
else if(value=='AC'){
	disp.innerText='';
	count=0;

}
else if(value=='+/-'){
	var temp=parseFloat(disp.innerText);
	disp.innerText=temp*(-1);
}
else{
	if(count==0&&as){
		disp.innerText='';
		as=false;
	}
	if(disp.innerText=='+'||disp.innerText=='*'||disp.innerText=='-'||disp.innerText=='/'||disp.innerText=='%'){
		exp[count]=disp.innerText;
		count++;
		disp.innerText=value;
	}
	else{
		disp.innerText=disp.innerText+value;
	}
}
}

function func1(event){
 var value=String.fromCharCode(event.keyCode);
 console.log(event.keyCode);
if(value=='+'||value=='*'||value=='/'||value=='-'||value=='%'){
 exp[count]=disp.innerText;
 count++;
 disp.innerText=value;
}
else if(value=='='||event.keyCode==13){
	 exp[count]=disp.innerText;
     count++;
   var str='';
   for(var i=0;i<count;i++){
   	str=str+exp[i];
   } 
   var result=eval(str);
   disp.innerText=result;
   count=0;
   as=true;
	

}
else if(value=='AC'){
	disp.innerText='';
	count=0;

}
else if(value=='+/-'){
	var temp=parseFloat(disp.innerText);
	disp.innerText=temp*(-1);
}
else{
	if(count==0&&as){
		disp.innerText='';
		as=false;
	}
	if(disp.innerText=='+'||disp.innerText=='*'||disp.innerText=='-'||disp.innerText=='/'||disp.innerText=='%'){
		exp[count]=disp.innerText;
		count++;
		disp.innerText=value;
	}
	else{
		disp.innerText=disp.innerText+value;
	}
}
}



for(var i=0;i<buttons.length;i++){
	buttons[i].addEventListener('click',func);
}
document.addEventListener('keypress',func1);