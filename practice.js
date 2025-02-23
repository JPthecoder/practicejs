const repeatString = function(string, num) {
  // arguments string and num

  let repeatStr = "";
  while (num > 0){
    repeatStr += string;
    num--;
  }
  return repeatStr;

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


console.log(repeatString("hey", 3));
