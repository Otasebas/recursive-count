function recursiveCount(num = 0) {
  
  let count = 0

  while (count < 10){ //condition to keep going and stoping point
    console.log(count)
    count++           //adds to stopping point
  }
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
