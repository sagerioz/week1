// console.log("I'm wired up");
// //no functionality with js yet
// var start = 0;
// while(start < 10 ){
//   console.log(start)
//   if (start== 4){
//     start+=3
//   }else{
//     start++
//   }
// }

//-------------V3
// function largestCardNum(arr) {
//   var biggestNum = 0;
//   var sum = 0;
//   var uniqueCard = '';
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; i++) {
//      if(arr[i][j] !== '-'){
//        sum += parseInt(arr[i][j]);
//
//        }
//
//      }if(sum > biggestNum){
//        biggestNum = sum;
//        uniqueCard = arr[i];
//   }
//   }
// }
// console.log(largestCardNum(temp));
var temp = ['1-01', '2-02', '3-03'];
function largestCardNum(arr){
var array = [];
  var biggestNum = 0;
   var sum = 0;
   var uniqueCard = '';
  arr.forEach(function(element) {
    //console.log("Element: " + element + " at index " + index);

        for (var i = 0; i < element.length; i++) {
         if(!isNaN(element[i])){
           sum += parseInt(element[i]);
array.push(sum);

           }

           console.log('SUM ----- ',sum);
         if(sum > biggestNum){
           biggestNum = sum;
           uniqueCard = element[i];
      }

      }

  })


return biggestNum;
return sum;
return uniqueCard;
return array;
console.log(array);
}
console.log(largestCardNum(temp));
