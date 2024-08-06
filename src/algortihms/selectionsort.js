export const selectionSort = async (array, setArray, speed) => {
   let len = array.length;
   for (let i = 0; i < len; i++) {
     let minIndex = i;
     for (let j = i + 1; j < len; j++) {
       if (array[j] < array[minIndex]) {
         minIndex = j;
       }
     }
     if (minIndex !== i) {
       // Swap
       let temp = array[i];
       array[i] = array[minIndex];
       array[minIndex] = temp;
       setArray([...array]);
       await new Promise((resolve) =>
         setTimeout(() => {
           resolve();
         }, speed)
       );
     }
   }
 };
 