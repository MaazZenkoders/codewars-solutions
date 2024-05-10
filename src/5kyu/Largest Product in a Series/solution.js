function greatestProduct(input) {
    let greatestProduct = 0;
      for (let i = 0; i <= input.length - 5; i++) {
          let product = 1;
          for (let j = i; j < i + 5; j++) {
              product *= parseInt(input[j]);
          }
          if (product > greatestProduct) {
              greatestProduct = product;
          }
      }
      return greatestProduct;
  }