//7kyu Fizz Buzz

// an array containing the numbers from 1 to N, where N is the parametered value.
// N will never be less than 1 (in C#, N might be less than 1).

//C# ONLY: If N is smaller than or equal to 0, throw an ArgumentOutOfRangeException!

//Replace certain values however if any of the following conditions are met:

//If the value is a multiple of 3: use the value 'Fizz' instead
//If the value is a multiple of 5: use the value 'Buzz' instead
//If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead
//C# method calling example:

//string[] result = FizzBuzz.GetFizzBuzzArray(3); // => [ "1", "2",

function fizzbuzz(n) {
    let i = 1, arr = [];
    while(i <= n) {
      let fizz = (i % 3 == 0);
      let buzz = (i % 5 == 0);
      if(fizz || buzz)
        arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""));
      else
        arr.push(i);
      i++;
    }
    return arr;
  }
  
  let fizy = fizzbuzz;


  //other solution :

  function fizzify(i) {
    if (i % 15 == 0)
      return 'FizzBuzz';
    else if (i % 5 == 0)
      return 'Buzz';
    else if (i % 3 == 0)
      return 'Fizz';
    else
      return i;
  }
  
  // Return an array
  function fizzbuzz(n) {
    var res = [];
    for (var i = 1; i <= n; ++i) res.push(fizzify(i));
    return res;
  }

  
  