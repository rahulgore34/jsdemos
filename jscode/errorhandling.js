//code-5
/*if no try,throws error catch is not defined,no finnally executed
var y=10;
catch(error){
	console.log(error.message);
}finally{
	console.log("finally executed");//executes after try
}
*/


//code-4
/*
try{
	var x = y+8;
	console.log("addition is :"+x);
}finally{
	console.log("finally executed");//executes this but throws reference error.
}
*/
//code-3
/*
var y=10;
try{
	var x = y+8;
	console.log("addition is :"+x);
}finally{
	console.log("finally executed");//executes after try,no error.
}

*/




//code-2
/*
var y=10;
try{
	var x = y+8;
	console.log("addition is :"+x);
}catch(error){
	console.log(error.message);
}finally{
	console.log("finally executed");//executes after try
}

*/


//code-1
/*try{
	var x = y+8;
	console.log("addition is :"+x);
}catch(error){
	console.log(error.message);
}finally{
	console.log("finally executed");//executes after catch
}
*/