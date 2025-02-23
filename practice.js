const repeatString = function() {
  // arguments string and num
  let string = 'hey';
  let num = 0;

  for (i = 0; i <3; i++){
  if (num++){
    return string += `${string}`;
  }

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
};

console.log(repeatString());
