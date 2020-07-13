function bubbleSort(array){
  for (let i = array.length; i > 0; i--){
    // Loop through entire array and on each loop stop one element shorter than the previous loop
    for (let j = 0; j < i; j++){
      if (array[j] > array[j + 1]){
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

const arr = [5,3,-8,2,1, -4];

bubbleSort(arr);