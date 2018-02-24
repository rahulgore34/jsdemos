try {
	var x = y +10;
}catch(error){
	//console.log(error.message); //y is not defined
	console.log(error.name);//ReferenceError
	/*other type are
	DOM error,eval error,range error,media error,syntax error
	type error*/
}finally{
	console.log("hi");
}