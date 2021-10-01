// task no:3//
//Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
for(var i=0;i<7;i++){
    var star=i+1;
    var temp=" ";
    for(j=0;j<star;j++){
        temp=temp+"#"+" ";
    }
    console.log(temp);
}
// Iterate through the string array and print it contents//
var strArray= ["Jazz",
      "Blues",
      "New Age",
      "Classical",
      "Opera"]
      console.log(strArray);


    //   write a code to count the elements in the array . Don’t use length property//
      var myarray=[11,22,33,44,55]
      console.log(arraylength(myarray));
      function arraylength(s){
        length=0;
        while(myarray[length]!==undefined){
            length++;
        }
        return length;
    };

    // Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?//
    // Find the length of your foods array//
    let food=["idly","dosa","puri","pongal","chappathi","briyani","upma","maggi","panipuri","cholapuri","choclate","milkshake","sambar rice","curd rice","paneer","chillychicken","soup","payasam","breadombelet","vadapa"]
    console.log(food[5]);
    console.log(food.length);

    // object literal in javascript//
    var address={
        firstname:"guvi",
        lastname:"geek",
        center:"IIT-M RP",
        location:"chennai"
    }
console.log(address);

// How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)
// Guvi, Geek, 6, IIT-M RP,Chennai.
// Amazon, Inc, 31, SP Infocity, Chennai.
// Google, Alphabet, 34 Amphitheater Parkway, MountainView.
// Tesla, Inc , 32, 333 Santana Row,San Jose.

var address1={Guvi:"Geek", NO:6 ,center:"IIT-M RP",location:"Chennai"}
var address2={firstname:"Amazon",lastname:"Inc", no:31, center:"SP Infocity", location:"Chennai"}
var address3={firstname:"Google", lastname:"Alphabet", No:34 ,center:"Amphitheater Parkway",location:"MountainView"}
var address4={firstame:"Tesla",lastname:"Inc" , No:32, center:"333 Santana Row",location:"San Jose"}
console.log(address1);
console.log(address2);
console.log(address3);
console.log(address4);