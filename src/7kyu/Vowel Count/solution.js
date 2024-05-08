function getCount(str) {
    let vowels = "aeiou"  
    let vowelCount = 0;
    for(i=0 ; i<str.length ; i++){
    if(vowels.indexOf(str[i]) !== -1)
      vowelCount +=1;
      }
    return vowelCount;
  }