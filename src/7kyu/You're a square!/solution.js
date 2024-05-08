var isSquare = function(n){
    if ( n < 0 || typeof n !== "number") {
      return false;
  }
    sqrt = Math.sqrt(n)
    return Number.isInteger(sqrt)
  }