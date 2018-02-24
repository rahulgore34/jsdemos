var arr1 = [1,2,3];
var arr2 = [1,2,4];

function compareTwoArrays(arr1,arr2){
     var areSame = false;
	if(arr1.length !=arr2.length){
		
		areSame = false;
	}else{
		
		for(var i=0;i<arr1.length;i++){
			if(arr1[i] == arr2[i]){
				areSame = true;
				
			}else{
				areSame = false;
			}
		}
	}

	return areSame;
}

console.log(compareTwoArrays(arr1,arr2));