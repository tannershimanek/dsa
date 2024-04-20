// Binary Search (iterative) - O(log(n))

function binarySearch(arr, val) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let estimatedVal = arr[mid];

    if (estimatedVal === val) {
      return mid;
    } else if (estimatedVal > val) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

// Binary Search (Recursive) - O(log(n))

function binarySearchRecursive(arr, val) {
  const helper = (l, h) => {
    const mid = Math.floor((l + h) / 2);
    if (l > h) return -1;
    if (arr[mid] > val) return helper(l, mid - 1);
    if (arr[mid] < val) return helper(mid + 1, h);
  };

  return helper(0, arr.length - 1);
}
