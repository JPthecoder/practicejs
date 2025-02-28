const repeatString = function (string, num){
  if (num < 0) return "Error";
    let reString = "";
    for (i = 0; i < num; i++){
      reString += string;
    }
  return reString;
};
console.log(repeatString("Nancy said FART", 4));