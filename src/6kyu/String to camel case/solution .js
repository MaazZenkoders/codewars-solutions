function toCamelCase(str){
    let splittedString = str.split(/-|_/)
    for(let i=1 ; i<splittedString.length ; i++){
      splittedString[i] = splittedString[i][0].toUpperCase()+ splittedString[i].slice(1);
    } 
  return splittedString.join("")
}
