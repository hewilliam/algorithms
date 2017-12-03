function insertionSort(array) {
    //loop through the array
    for(let i = 0; i < array.length; i++) {
      if(array[i] < array[i-1]) {
        insertionSort()
      }
    }
    return array
      //loop through the current index and decrease
      //compare if current number is less than compared number
      //insert it there
      
  }
  
  function insertionSort2(array) {
    for(var i = 1; i < array.length; i++) {
      while( i < array.length) {
        for(var j = i; j >= 0; j--) {
          while(j > 0 && array[j-1] > array[j]) {
            let temp = array [j]
            array[j] = array[j-1]
            array[j-1] = temp
            j = j -1
          }
        }
      }
    }
  }
  
  function insertionSort3(array) {
    //start from second item in array and iterate
    for(let i = 1; i < array.length; i+=1) {
      let j = i;
      while(array[j] < array[j-1] && j > 0) {
        let temp = array[j];
        array[j] = array[j-1]
        array[j-1] = temp;
        j-=1
        //destructering
        //[array[j-1], array[j]]= [array[j], array[j-1]]
      }
    }
      //compare current item to items before index
      //switch places if current item is smaller than compared item
    //return sorted array
    return array
  }
  
  insertionSort3([6,5,3,1])