// find the sum of all the mulitple of 3 and 5 below 1000

var sum = 0;
for (var i = 0; i < 1000; i++){
    if (i % 3 === 0 || i % 5 === 0){
        sum = sum + i;
    }
}

console.log(sum);