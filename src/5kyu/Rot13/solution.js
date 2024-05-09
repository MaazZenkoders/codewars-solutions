function rot13(message){
    let result = '';
      for (let i = 0; i < message.length; i++) {
          let char = message[i];
          if (/[a-zA-Z]/.test(char)) {
              let shift = char.toLowerCase() < 'n' ? 13 : -13;
              let newCharCode = char.charCodeAt(0) + shift;
              if ((char >= 'a' && char <= 'z' && newCharCode > 'z'.charCodeAt(0)) ||
                  (char >= 'A' && char <= 'Z' && newCharCode > 'Z'.charCodeAt(0))) {
                  newCharCode -= 26;
              } else if ((char >= 'a' && char <= 'z' && newCharCode < 'a'.charCodeAt(0)) ||
                  (char >= 'A' && char <= 'Z' && newCharCode < 'A'.charCodeAt(0))) {
                  newCharCode += 26;
              }
              result += String.fromCharCode(newCharCode);
          } else {
              result += char;
          }
      }
      return result;
  }