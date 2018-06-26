var str = "rahul baban gore";

var strarr = str.split("");
// console.log(strarr);
var obj = {};
var c=0;
for(var i=0;i<strarr.length;i++){
	// console.log("index of a "+(strarr[i].indexOf('a')!=-1));
 if(strarr[i].indexOf('h')!=-1){
  c++;
 }
}
//console.log("a appears "+c+" times");


// strarr.forEach(function(item,index){
//console.log("index of "+item+" -- "+index);
    
//  console.log(item)
// });
