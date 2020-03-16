//Define a function that takes an integer argument and returns logical value true or false
// depending on if the integer is a prime.

 //A prime number  is a natural number greater than 1 that has no positive divisors other than 1 and itself.

//Example
//is_prime(1)  /* false */
//is_prime(2)  /* true  */
//is_prime(-1) /* false */



function isPrime(num) {
    if (num < 2) {
    return false
    } 
    
    for (let i = 2; i< num; i++){
    if (num % i === 0) {
    return false;
    }
    }
    return true;
    }