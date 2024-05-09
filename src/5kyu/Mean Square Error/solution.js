var solution = function(firstArray, secondArray) {
    let sumSquaredDiff = 0;
    for(let i = 0; i < firstArray.length; i++) {
      let diff = firstArray[i] - secondArray[i];
      let sqDiff = Math.pow(diff, 2);
      sumSquaredDiff += sqDiff;
    }
    let avg = sumSquaredDiff / firstArray.length;
    return avg;
  }