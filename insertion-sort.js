function insertionSort(array) {
  let length = array.length;
  let temp, j;
  for (let i = 1; i < length; ++i) {
    temp = array[i];
    j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j--];
    }
    array[j + 1] = temp;
  }
  return array
}
