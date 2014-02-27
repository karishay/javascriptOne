// create a function that sees if a number is even
function even(a){
    if (a % 2 === 0) {
        return true;
    }
}

// create a function that filters a list for even numbers
function evenFilter(aList){
    newList = [];
    for(i = 0; i < aList.length; i ++ ){
        if(even(aList[i]) === true){
            newList.push(aList[i]);
        }
    }
    return newList;
}

// create a function that returns a list of fibonnaci numbers below the max
function fibSet(max){
    var fibList = [];
    //var j = i + j;
    var i = 0;
    var j = 1;
    var k = 0;
    //add numbers next to each other in a list
    for (i = 0; j < max; j = k){
        fibList.push(j);
        k = i + j;
        i = j;
    }
    return fibList;
}

//create a sum function
function sumList(aList){
    var total = 0;
    for (i = 0; i < aList.length; i ++){
        total = total + aList[i];
    }
    return total;
}

console.log(sumList(evenFilter(fibSet(4000000))));

