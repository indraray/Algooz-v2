export const mergeSort = async (array, setArray, speed) => {
   async function merge(arr, left, mid, right) {
     const n1 = mid - left + 1;
     const n2 = right - mid;
     const leftArray = new Array(n1);
     const rightArray = new Array(n2);
     
     for (let i = 0; i < n1; i++) {
       leftArray[i] = arr[left + i];
     }
     for (let j = 0; j < n2; j++) {
       rightArray[j] = arr[mid + 1 + j];
     }
 
     let i = 0, j = 0, k = left;
     while (i < n1 && j < n2) {
       if (leftArray[i] <= rightArray[j]) {
         arr[k] = leftArray[i];
         i++;
       } else {
         arr[k] = rightArray[j];
         j++;
       }
       setArray([...arr]);
       await new Promise((resolve) => setTimeout(resolve, speed));
       k++;
     }
 
     while (i < n1) {
       arr[k] = leftArray[i];
       i++;
       k++;
       setArray([...arr]);
       await new Promise((resolve) => setTimeout(resolve, speed));
     }
 
     while (j < n2) {
       arr[k] = rightArray[j];
       j++;
       k++;
       setArray([...arr]);
       await new Promise((resolve) => setTimeout(resolve, speed));
     }
   }
 
   async function mergeSortHelper(arr, left, right) {
     if (left < right) {
       const mid = Math.floor((left + right) / 2);
       await mergeSortHelper(arr, left, mid);
       await mergeSortHelper(arr, mid + 1, right);
       await merge(arr, left, mid, right);
     }
   }
 
   await mergeSortHelper(array, 0, array.length - 1);
 };
 