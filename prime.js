
//6kyu - Is a number a prime?
//Define a function that takes an integer argument and returns logical value true or false
// depending on if the integer is a prime.

 //A prime number  is a natural number greater than 1 that has no positive divisors other than 1 and itself.

//Example
//is_prime(1)  /* false */
//is_prime(2)  /* true  */
//is_prime(-1) /* false */




function isPrime (num) {
    if (num <= 1) {
      return false
    } else if (num <= 3) {
      return true
    } else if (num%2 === 0 || num%3 === 0) {
      return false
    }
   
    let i = 5
    while (i*i <= num) {
      if (num%i === 0 || num%(i+2) === 0) {
        return false
      }
      i += 6
    }
    return true
  }