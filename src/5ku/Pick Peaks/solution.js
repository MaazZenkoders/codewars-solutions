function pickPeaks(arr){
    let pos = [];
    let peaks = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) {
        let j = i;
  
        while (arr[j] === arr[i]) {
          j++;
        }
        
        if (arr[j] < arr[i]) {
          pos.push(i);
          peaks.push(arr[i]);
        }
      }
    }
  
    return { pos: pos, peaks: peaks };
  }