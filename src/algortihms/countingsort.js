export const countingSort = async (array, setArray, speed) => {
   const max = Math.max(...array);
   const min = Math.min(...array);
   const range = max - min + 1;
 
   const count = Array(range).fill(0);
   const output = Array(array.length);
 
   // Count frequencies of each element
   for (let num of array) {
     count[num - min]++;
     setArray([...array]); // Update visualization
     await new Promise((resolve) => setTimeout(resolve, speed));
   }
 
   // Calculate cumulative frequencies
   for (let i = 1; i < range; i++) {
     count[i] += count[i - 1];
   }
 
   // Build the output array
   for (let i = array.length - 1; i >= 0; i--) {
     output[count[array[i] - min] - 1] = array[i];
     count[array[i] - min]--;
     setArray([...output]); // Update visualization
     await new Promise((resolve) => setTimeout(resolve, speed));
   }
 
   // Copy the sorted elements back to the original array
   for (let i = 0; i < array.length; i++) {
     array[i] = output[i];
     setArray([...array]); // Update visualization
     await new Promise((resolve) => setTimeout(resolve, speed));
   }
 };
 