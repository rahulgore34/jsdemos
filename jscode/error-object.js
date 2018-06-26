//without try ,catch
finally{
	console.log("without try,catch");
} 
 //above will cause unexpecteed tolen error



//range error,
//catch is optional finallly will get execute after try.
 try{
 	var a = new Array(-3);
 	console.log(a);
 }catch(error){
  console.log(error.name);//RangeError
 }finally{
 console.log("its range");
 }



//reference error
try {
	var x = y +10;
}catch(error){
	//console.log(error.message); //y is not defined

	console.log(error.name);//ReferenceError
	/*other type are
	DOM error,eval error,range error,media error,syntax error
	type error*/

	console.log(error instanceof ReferenceError);// true thn handle code
	//as error.message may diff for diff browsers,above is better for cross
	//browser compabity.

}finally{
	console.log("hi");
}