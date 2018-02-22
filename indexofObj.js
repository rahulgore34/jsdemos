//Find indexof obj elem

var arr = [

 {name:"rahul"},
 {name:"sarita"},
 {name:"shreya"}
];

var i = arr.map(function(item){
 return item.name; //returns new array with name ["rahul"...]
}).indexOf("shreya"); //now find index of name

 console.log(i);