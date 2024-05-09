function narcissistic(value) {
    if (value > 0 && typeof(value) === 'number'){
    let strV = value.toString()
    let digits = strV.length
    let arrV = strV.split("")
    let sum = 0
    for ( let i=0; i<arrV.length ; i++){
      let numV = parseInt(arrV[i])
      let narc = Math.pow(numV, digits)
      sum += narc
    }
      return sum === value;
  }
  }