function isPrime(n){
    if (n<2){
      return false
    }
    for(let i=2; i<=Math.sqrt(n); i++){
      if( n%i === 0){
        return false
      }
    }
    return true
  }
  
  function total(arr){
    let sum = 0
    for(let i = 0; i<arr.length; i++){
      if(isPrime(i)){
        sum+= arr[i]
      }
     }
    return sum
  };