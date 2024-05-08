function diamond(n){
    if (n <= 0 || n % 2 === 0) {
    return null;
  }
  
  let diamondString = '';
  const middle = Math.floor(n / 2) + 1;

  for (let i = 1; i <= middle; i++) {
    diamondString += ' '.repeat(middle - i) + '*'.repeat(2 * i - 1) + '\n';
  }

  for (let i = middle - 1; i >= 1; i--) {
    diamondString += ' '.repeat(middle - i) + '*'.repeat(2 * i - 1) + '\n';
  }

  return diamondString;
}
