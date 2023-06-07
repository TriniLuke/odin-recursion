function mergeSort(arr) {
  if(arr.length < 2) return arr; // if array is less than 2 return array because one element in array means already sorted

  const mid = Math.floor(arr.length / 2); // create a mid point to divide array left and right
  const leftArr = arr.slice(0, mid); // create left array
  const rightArr = arr.slice(mid); // create right array

  return merge(mergeSort(leftArr), mergeSort(rightArr)); // return ne function for sorting the array
}

function merge(leftArr, rightArr) {
  const sortedArr = []; // temp array to hold sorted

  while(leftArr.length && rightArr.length) { // if array is not empty
    if(leftArr[0] <= rightArr[0]) { // if element to left is lesser value
      sortedArr.push(leftArr.shift()) // push to temp array the lesser value
    } else {
      sortedArr.push(rightArr.shift()) // else push to temp the lesser value if on the right
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr] // return all the elements in the array as sorted
}