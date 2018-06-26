var arr = [1,7,3,5,2,5,1];
var arr1 = ["a","bh","bh","j","k","a"];


let unique2 = (arr)=>{
	let seen = {};
	return arr.filter((el)=>seen.hasOwnProperty(el)?false:seen[el]=true);
};
console.log(unique2(arr));  //2nd soln-return new arr with unique elm


/////////////////////////////////////////////
//var newarr = arr.filter((el,i,self)=>self.indexOf(el)===i);
//console.log(newarr); //unique ele
////////////////////////////////////////////

for(var i=0;i<arr1.length;i++){
	for(var j=i+1;j<arr1.length;j++){
		if(arr1[i]==arr1[j]){
				console.log(arr1[i]+" is duplicate.");
			}
	}
}