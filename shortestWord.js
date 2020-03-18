//7kyu shortest word

//Simple, given a string of words, return the length of the shortest word(s).

//String will never be empty and you do not need to account for different data types.

const findShort = s => {
    const split = s.split(" ");
    const shortest = [];
  
    for (let i = 0; i < split.length; ++i) {
      shortest.push(split[i].length);
    }
  
    const result = Math.min.apply(null, shortest);
    return result;
  };