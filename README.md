# Data Structures and Algorithms

Studying dsa and storing a collection of what I have learned.

## Search

### Binary Search

- Only works if the data is sorted.
- O(log(n))

### Usage

1. Iterative

```JavaScript
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

const my_list = [1, 2, 3, 4, 5, 8, 10];
console.log(binarySearch(my_list, 3)); // -> 2 (index of 3)
console.log(binarySearch(my_list, -1)); // -> -1 (not found)
```

2. Recursive

```JavaScript
function binarySearchRecursive(arr, val) {
  const helper = (l, h) => {
    const mid = Math.floor((l + h) / 2);
    if (l > h) return -1;
    if (arr[mid] > val) return helper(l, mid - 1);
    if (arr[mid] < val) return helper(mid + 1, h);
  };

  return helper(0, arr.length - 1);
}


const my_list = [1, 2, 3, 4, 5, 8, 10];
console.log(binarySearchRecursive(my_list, 3)); // -> 2 (index of 3)
console.log(binarySearchRecursive(my_list, -1)); // -> -1 (not found)
```
