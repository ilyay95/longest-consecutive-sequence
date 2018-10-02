module.exports = function longestConsecutiveLength(array) {
  // your solution here
  let sum=1;
  let end_sum=0; 

  if(array.length===0 ){
      return 0;
  }
  
  if(array.length===1 ){
      return 1;
  }

  array.sort(function (a,b){
      if (a > b) return 1;
      if (a < b) return -1;
  })

  for(let num=0;num<array.length;num++){
    if(array[num] === array[num-1]){
      continue;
       }
    if(array[num]-array[num-1]===1){
       sum++;
        continue;
       }
    else{
     if(sum >= end_sum){
      end_sum = sum;			
   }
   sum = 1;
   }

  }
  return end_sum;
}
