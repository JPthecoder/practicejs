/* function reverseString(){
  const message = "hello";
  let newWord = message.split("");
  newWord.reverse();
  let word = newWord.join("");
  console.log(word);
}

  console.log(reverseString());
  reverseString();
*/
/* const reverseString = function(string) {
  let newWord = string.split("");
  console.log(newWord);
  newWord.reverse();
  let reverseWord = newWord.join("");
  console.log(reverseWord);
};

reverseString("hello"); */
/* 
const myArray = ([1,2,3,4] , 3);

const removeFromArray = function(array, item) {
  let newArray = [... array]
  const index = newArray.findIndex((element) => element === item);
  if (index !== -1){
    newArray.splice(index, 1);
      return newArray;
  } 
}; */
/*
// this is good to remove one value. we need to see how to remove multiple.
const removeFromArray = function (arr, ...itemRe){
  //,,, I'm using a space parater which is condensing all of the variables in parameter 2 in an array
  // do I need to declare a new variable and make a spread operator?
  // lets loop through the array
  let newArray = arr.filter((element) => element == itemRe);
    return newArray;

  // arr = [1,2,3,4]
  // itemRe = 3,2
};
console.log(removeFromArray([1,2,3,4], 3,2));

// itemRe is the second parameter passed to the fuction upon calling
// array[i] is referring to the index in the array
// in this case, I want arr[i] to equal itemRe but that won't be the case because
// itemRe is now an Array
// Questions is, how do we go through every itemRe to compare it to arr[i]?
/*
for (i=0; i<arr.length;i++){
  if (arr[i] === itemRe){
    arr.splice(i, 1);
  }
}
return arr; */

/* const sumAll = function(x,y) {
  let add = 0;
  for (i=x; i <= y; i++){
    add += x++; 
  }
  return add;
};


const sumAll = function(x,y) {
  let results = 0;
  if (x > y){
  for (i=x; i <= y; i++){
      results += x++;
  }
} else if ( x < y){ 
  for (i=y; i <= x; i++){
    results += x++;
  }
} else if (x < 0 || y < 0){
  return "Error"
} else if (!x.isInteger || !y.isInteger){
  return "Error"
} else if (isNan(x,y)){
  return "Error"
} 
  return results;
};


console.log(sumAll(2,4)); */

const sumAll = function(x,y) {
  let add = 0;
  if(x<y){
  for (i=x; i <= y; i++){
      add += x++;
   }
  } else if (y<x){
      for (i=x; i>=y; i--){
          add += x;
          x--;
      }
  }
  return add;
}
 
  console.log(sumAll(2,4));
  console.log(sumAll(123,1));
