/* take a list
for list[i] in the list
loop through and
if list[i] == list[j]
newList.push()*/

myList = ["apple","apple","orange","pig","brie","apple","brie"];


function createDupList(aList){
    var dupList = [];
    truthy = false;
    for(j = 0; j < aList.length; j++){
        //console.log("I'm going to be looking for matches of"+aList[j]);
        lookingfor = aList[j];
        searchList = myList;
        searchList.splice(j,1);
        for(var i = searchList.length-1; i >=0; i--){
            //console.log("Does "+lookingfor+" match "+searchList[i]+"?");
            if(searchList[i] == lookingfor){
                //console.log("The list looks like"+aList);
                searchList.splice(i,1);
                //console.log("I just tried to splice"+aList);
                truthy = true;
                //console.log("I found a match so I set truthy to"+truthy);
            }
        }
        if (truthy === true){
            //console.log("Truthy was true, dupList right now"+dupList);
            dupList.push(lookingfor);
            //console.log("I added it to the dupList"+dupList);
        }
        truthy = false;
    }return dupList;
}
//function dupList(aList)
console.log(createDupList(myList));