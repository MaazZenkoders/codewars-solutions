function addBinary(a,b) {
  
    let binaryNum1 = a.toString(2);
    let binaryNum2 = b.toString(2);
    
    
    const maxLength = Math.max(binaryNum1.length, binaryNum2.length);
    binaryNum1 = binaryNum1.padStart(maxLength, '0');
    binaryNum2 = binaryNum2.padStart(maxLength, '0');
    

    const sum = BigInt('0b' + binaryNum1) + BigInt('0b' + binaryNum2);
    
    return sum.toString(2)
}