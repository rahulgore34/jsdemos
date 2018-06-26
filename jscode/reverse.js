var str = "rahulr";
var i=0;
var len = str.length;
var ch,count;
var counts={};
// console.log(counts);
for(i;i<len;i++){
 ch = str.charAt(i);
 count = counts[ch];
 counts[ch]= count?count+1:1;

}
console.log(counts);










// CHeck and what vowels contains in string.
/*
var v = ['a','e','i','o','u'];
for(i;i<len;i++){
	// console.log(str[i].indexOf('a'));
if(v.indexOf(str[i]) != -1){
	 console.log("Contains vowels :"+str[i]);
}     
}
*/