var arr = [1,7,3,5,2,5,1];


let unique2 = (arr)=>{
	let seen = {};
	return arr.filter((el)=>seen.hasOwnProperty(el)?false:seen[el]=true);
};
//console.log(unique2(arr));  2nd soln


/////////////////////////////////////////////
//var newarr = arr.filter((el,i,self)=>self.indexOf(el)===i);
//console.log(newarr); //unique ele
////////////////////////////////////////////

for(var i=0;i<arr.length;i++){
	for(var j=i+1;j<arr.length;j++){
		
		
			if(arr[i]==arr[j]){
				console.log(arr[i]+" is duplicate.");
			
			}
		
	}
}