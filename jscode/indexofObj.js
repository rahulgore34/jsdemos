//Find indexof obj elem

var arr1 = [1,2,3,5,6,7,8,3];
var arr2 = [1,2,3];

console.log(arr1.indexOf(3)); //first index 2
console.log(arr1.indexOf(3,3)); //first index 7 after 3rd index 
//first parameter as value for which need to find index
//second paramter as index from where need to find index

////////
//find index of obj in array

var arr = [

 {name:"rahul"},
 {name:"sarita"},
 {name:"shreya"}
];

var i = arr.map(function(item){
 return item.name; //returns new array with name ["rahul"...]
}).indexOf("shreya"); //now find index of name

 console.log(i);
