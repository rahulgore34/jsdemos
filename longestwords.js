	var str = "pune ahmednagar nashik maharsthans";
	strlen = str.length;
	var i=0;
	var arr =[];
    //split - get array
	var strarr = str.split(" ");
    //sort array elm as per word length.
    var sorted = strarr.sort(function(a,b){
    	return b.length-a.length;
    })
    console.log(sorted+" is longest word");
    //find elem from str array matching with length of first
    // sorted elm
    var longestWords = strarr.filter(function(item){
    	return item.length===sorted[0].length;
    });
    console.log(longestWords);