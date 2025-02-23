const repeatString = function (string,num){
   
  let returnStr = "";
  while (num < 1){
      returnStr += string;
      num--;
  }
      return returnStr;
  

  /* if (num == 1){
      return `${string}`;
}  else if ( num == 2){
      return `${string}` + `${string}`;
}  else {
      return `${string}` + `${string}` + `${string}`;
} 
      
return string += `${string}`; // testing this to see how I can add more than 2 string together
*/
    }


console.log(repeatString("hi", 1));
