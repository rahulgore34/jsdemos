	var str = "pune ahmednagar nashik maharsthans";
	strlen = str.length;
	var i=0;
	var arr =[];
	var strarr = str.split(" ");
    var sorted = strarr.sort(function(a,b){
    	return b.length-a.length;
    })
    console.log(sorted+" is longest word");
    var longestWords = strarr.filter(function(item){
    	return item.length===sorted[0].length;
    });
    console.log(longestWords);