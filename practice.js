// create a loop to output prime numbers
// return integer great than 1 that can't be devided without a remainder or anything execpt for 1


// n > 1 is a prime

// write a code which output prime number in interval for 2 to n
// n should not be hard-tuned to any fixed value

let n = 10;

loopy:
  for (i = 2; i <= n; i++){
    for (let j = 2; j < i; j++){
      if (i % 2 == 0) continue loopy;
    }
      alert (i);
  }