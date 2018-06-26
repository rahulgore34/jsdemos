

console.log(findCharOccurances('n',"rahul baban gore"));


function findCharOccurances(char,str){
  var counter = 0
  for(var i=0;i<str.length;i++){
	
	if(str[i]==char){
		console.log("true");
		counter++;
	}
}
  return char+" appears for "+counter+" times";
}

/*
var str = "rahul baban gore";
var counter = 0;
for(var i=0;i<str.length;i++){
 counter = counter+i;
 console.log(str[i].join(''));
  if(str[i].indexOf(str.charAt(0))!= -1){
 	counter++;
  console.log(str[i]+" appears "+counter+" times");
 }
  if(str[i].indexOf(str.charAt(1))!= -1){
 	counter++;
  console.log(str[i]+" appears "+counter+" times");
 }
}

 console.log("a appears "+counter+" times");
 */