## Algooz Documentation
 ### Overview
Algooz is a website that provides visual implementations of various sorting algorithms. This educational tool helps users understand the inner workings of different sorting techniques through visual demonstrations and pseudocode.

### Supported Sorting Algorithms
1. Bubble Sort
2. Quick Sort
3. Counting Sort
4. Insertion Sort
5. Merge Sort
6. Selection Sort
 ### Pseudocode for Sorting Algorithms
- Bubble Sort : 
Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.


Copy code
```
 function bubbleSort(arr)
    n = length(arr)
    for i from 0 to n-1
        for j from 0 to n-i-1
            if arr[j] > arr[j+1]
                swap(arr[j], arr[j+1])
    return arr
```
- Quick Sort :
Quick Sort is a divide-and-conquer algorithm that picks an element as a pivot and partitions the array around the pivot.


```
function quickSort(arr, low, high)
    if low < high
        pi = partition(arr, low, high)
        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)

function partition(arr, low, high)
    pivot = arr[high]
    i = low - 1
    for j from low to high-1
        if arr[j] < pivot
            i = i + 1
            swap(arr[i], arr[j])
    swap(arr[i + 1], arr[high])
    return i + 1
```
- Counting Sort :
Counting Sort is an integer sorting algorithm that operates by counting the number of objects that have distinct key values.

```
function countingSort(arr, maxVal)
    count = array of size (maxVal + 1) initialized to 0
    output = array of size (length(arr))
    
    for i from 0 to length(arr)-1
        count[arr[i]] = count[arr[i]] + 1

    for i from 1 to maxVal
        count[i] = count[i] + count[i - 1]

    for i from length(arr)-1 down to 0
        output[count[arr[i]] - 1] = arr[i]
        count[arr[i]] = count[arr[i]] - 1

    return output
```
- Insertion Sort:
Insertion Sort builds the final sorted array one item at a time by repeatedly picking the next item and inserting it into its correct position.

```
function insertionSort(arr)
    for i from 1 to length(arr) - 1
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key
            arr[j + 1] = arr[j]
            j = j - 1
        arr[j + 1] = key
    return arr
```
- Merge Sort:
Merge Sort is a divide-and-conquer algorithm that divides the array into halves, recursively sorts them, and then merges the sorted halves.

```
function mergeSort(arr)
    if length(arr) > 1
        mid = length(arr) / 2
        left = arr[0..mid-1]
        right = arr[mid..end]

        mergeSort(left)
        mergeSort(right)

        i = j = k = 0

        while i < length(left) and j < length(right)
            if left[i] < right[j]
                arr[k] = left[i]
                i = i + 1
            else
                arr[k] = right[j]
                j = j + 1
            k = k + 1

        while i < length(left)
            arr[k] = left[i]
            i = i + 1
            k = k + 1

        while j < length(right)
            arr[k] = right[j]
            j = j + 1
            k = k + 1

    return arr
```
- Selection Sort:
Selection Sort repeatedly selects the minimum element from the unsorted part and puts it at the beginning.

```
function selectionSort(arr)
    n = length(arr)
    for i from 0 to n-1
        minIdx = i
        for j from i+1 to n
            if arr[j] < arr[minIdx]
                minIdx = j
        swap(arr[i], arr[minIdx])
    return arr
```
### How to Use Algooz
- Visit the Website: Navigate to the Algooz website.
- Select an Algorithm: Choose a sorting algorithm from the list.
- Visualize Sorting: Watch the visual representation of the algorithm in action.
- Read Pseudocode: Follow along with the provided pseudocode to understand the algorithm's steps.