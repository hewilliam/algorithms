//Write a function getProductsOfAllIntsExceptAtIndex() 
//that takes an array of integers and returns an array of the products.
//given: [1,7,3,4]
//return [84, 12, 28, 21]

function getProductsOfAllIntsExceptAtIndex(array){ // o(n^2)
    let result = [];
    for(let i = 0; i < array.length; i++) {
      let total = 1;
      for(let j = 0; j < array.length; j++) {
        if(i !== j) {
          total = total * array[j]
        }
      }
      result.push(total)
    }
    return result
  }
  
  getProductsOfAllIntsExceptAtIndex([1,7,3,4])