import React from 'react';
import Card from './Card';
import './CardContainer.css';

const CardContainer = () => {

   const cards = [
      //  Bubble Sort
      {
         title: 'Bubble-Sort',
         description: {
            "procedure": "bubbleSort",
            "parameters": {
               "A": "list of sortable items"
            },
            "steps": [
               {
                  "step": "initialize",
                  "variable": "n",
                  "value": "length(A)"
               },
               {
                  "step": "repeat",
                  "body": [
                     {
                        "step": "initialize",
                        "variable": "swapped",
                        "value": false
                     },
                     {
                        "step": "for",
                        "variable": "i",
                        "range": {
                           "start": 1,
                           "end": "n-1",
                           "inclusive": true
                        },
                        "body": [
                           {
                              "comment": "if this pair is out of order"
                           },
                           {
                              "step": "if",
                              "condition": "A[i-1] > A[i]",
                              "body": [
                                 {
                                    "comment": "swap them and remember something changed"
                                 },
                                 {
                                    "step": "swap",
                                    "variables": ["A[i-1]", "A[i]"]
                                 },
                                 {
                                    "step": "set",
                                    "variable": "swapped",
                                    "value": true
                                 }
                              ]
                           }
                        ]
                     }
                  ],
                  "until": "not swapped"
               },
               {
                  "step": "end procedure",
                  "name": "bubbleSort"
               }
            ]
         },
         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/GCD_through_successive_subtractions.svg/330px-GCD_through_successive_subtractions.svg.png',
      },

      //  selection Sort------------------
      {
         title: 'Selection  Sort',
         description: {
            "procedure": "selectionSort",
            "parameters": {
               "A": "list of sortable items"
            },
            "steps": [
               {
                  "step": "initialize",
                  "variable": "n",
                  "value": "length(A)"
               },
               {
                  "step": "for",
                  "variable": "i",
                  "range": {
                     "start": 0,
                     "end": "n-1",
                     "inclusive": true
                  },
                  "body": [
                     {
                        "step": "initialize",
                        "variable": "minIndex",
                        "value": "i"
                     },
                     {
                        "comment": "find the index of the minimum element"
                     },
                     {
                        "step": "for",
                        "variable": "j",
                        "range": {
                           "start": "i+1",
                           "end": "n-1",
                           "inclusive": true
                        },
                        "body": [
                           {
                              "step": "if",
                              "condition": "A[j] < A[minIndex]",
                              "body": [
                                 {
                                    "step": "set",
                                    "variable": "minIndex",
                                    "value": "j"
                                 }
                              ]
                           }
                        ]
                     },
                     {
                        "comment": "swap the found minimum element with the first element"
                     },
                     {
                        "step": "if",
                        "condition": "minIndex != i",
                        "body": [
                           {
                              "step": "swap",
                              "variables": ["A[i]", "A[minIndex]"]
                           }
                        ]
                     }
                  ]
               },
               {
                  "step": "end procedure",
                  "name": "selectionSort"
               }
            ]
         },
         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/GCD_through_successive_subtractions.svg/330px-GCD_through_successive_subtractions.svg.png',
      },
      //  Insertion  Sort------------------
      {
         title: 'Insertion Sort',
         description: {
            "procedure": "insertionSort",
            "parameters": {
               "A": "list of sortable items"
            },
            "steps": [
               {
                  "step": "initialize",
                  "variable": "n",
                  "value": "length(A)"
               },
               {
                  "step": "for",
                  "variable": "i",
                  "range": {
                     "start": 1,
                     "end": "n-1",
                     "inclusive": true
                  },
                  "body": [
                     {
                        "step": "initialize",
                        "variable": "key",
                        "value": "A[i]"
                     },
                     {
                        "step": "initialize",
                        "variable": "j",
                        "value": "i - 1"
                     },
                     {
                        "comment": "Move elements of A[0..i-1], that are greater than key, to one position ahead of their current position"
                     },
                     {
                        "step": "while",
                        "condition": "j >= 0 and A[j] > key",
                        "body": [
                           {
                              "step": "set",
                              "variable": "A[j + 1]",
                              "value": "A[j]"
                           },
                           {
                              "step": "decrement",
                              "variable": "j"
                           }
                        ]
                     },
                     {
                        "step": "set",
                        "variable": "A[j + 1]",
                        "value": "key"
                     }
                  ]
               },
               {
                  "step": "end procedure",
                  "name": "insertionSort"
               }
            ]
         },
         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/GCD_through_successive_subtractions.svg/330px-GCD_through_successive_subtractions.svg.png',
      },  //  merge Sort------------------
      {
         title: 'Merge Sort',
         description: {
            "procedure": "merge",
            "parameters": {
               "A": "list of sortable items",
               "left": "left index of the sublist",
               "mid": "middle index of the sublist",
               "right": "right index of the sublist"
            },
            "steps": [
               {
                  "step": "initialize",
                  "variable": "n1",
                  "value": "mid - left + 1"
               },
               {
                  "step": "initialize",
                  "variable": "n2",
                  "value": "right - mid"
               },
               {
                  "step": "initialize",
                  "variable": "L",
                  "value": "array of size n1"
               },
               {
                  "step": "initialize",
                  "variable": "R",
                  "value": "array of size n2"
               },
               {
                  "comment": "Copy data to temporary arrays L[] and R[]"
               },
               {
                  "step": "for",
                  "variable": "i",
                  "range": {
                     "start": 0,
                     "end": "n1-1",
                     "inclusive": true
                  },
                  "body": [
                     {
                        "step": "set",
                        "variable": "L[i]",
                        "value": "A[left + i]"
                     }
                  ]
               },
               {
                  "step": "for",
                  "variable": "j",
                  "range": {
                     "start": 0,
                     "end": "n2-1",
                     "inclusive": true
                  },
                  "body": [
                     {
                        "step": "set",
                        "variable": "R[j]",
                        "value": "A[mid + 1 + j]"
                     }
                  ]
               },
               {
                  "comment": "Merge the temporary arrays back into A[left..right]"
               },
               {
                  "step": "initialize",
                  "variable": "i",
                  "value": 0
               },
               {
                  "step": "initialize",
                  "variable": "j",
                  "value": 0
               },
               {
                  "step": "initialize",
                  "variable": "k",
                  "value": "left"
               },
               {
                  "step": "while",
                  "condition": "i < n1 and j < n2",
                  "body": [
                     {
                        "step": "if",
                        "condition": "L[i] <= R[j]",
                        "body": [
                           {
                              "step": "set",
                              "variable": "A[k]",
                              "value": "L[i]"
                           },
                           {
                              "step": "increment",
                              "variable": "i"
                           }
                        ]
                     },
                     {
                        "step": "else",
                        "body": [
                           {
                              "step": "set",
                              "variable": "A[k]",
                              "value": "R[j]"
                           },
                           {
                              "step": "increment",
                              "variable": "j"
                           }
                        ]
                     },
                     {
                        "step": "increment",
                        "variable": "k"
                     }
                  ]
               },
               {
                  "comment": "Copy the remaining elements of L[], if any"
               },
               {
                  "step": "while",
                  "condition": "i < n1",
                  "body": [
                     {
                        "step": "set",
                        "variable": "A[k]",
                        "value": "L[i]"
                     },
                     {
                        "step": "increment",
                        "variable": "i"
                     },
                     {
                        "step": "increment",
                        "variable": "k"
                     }
                  ]
               },
               {
                  "comment": "Copy the remaining elements of R[], if any"
               },
               {
                  "step": "while",
                  "condition": "j < n2",
                  "body": [
                     {
                        "step": "set",
                        "variable": "A[k]",
                        "value": "R[j]"
                     },
                     {
                        "step": "increment",
                        "variable": "j"
                     },
                     {
                        "step": "increment",
                        "variable": "k"
                     }
                  ]
               },
               {
                  "step": "end procedure",
                  "name": "merge"
               }
            ]
         },
         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/GCD_through_successive_subtractions.svg/330px-GCD_through_successive_subtractions.svg.png',
      }, 
       //  Quick Sort Sort------------------
      {
         title: 'Quick  Sort',
         description: {
   "procedure": "partition",
   "parameters": {
     "A": "list of sortable items",
     "low": "starting index of the sublist",
     "high": "ending index of the sublist"
   },
   "steps": [
     {
       "step": "initialize",
       "variable": "pivot",
       "value": "A[high]"
     },
     {
       "step": "initialize",
       "variable": "i",
       "value": "low - 1"
     },
     {
       "step": "for",
       "variable": "j",
       "range": {
         "start": "low",
         "end": "high - 1",
         "inclusive": true
       },
       "body": [
         {
           "step": "if",
           "condition": "A[j] < pivot",
           "body": [
             {
               "step": "increment",
               "variable": "i"
             },
             {
               "step": "swap",
               "variables": ["A[i]", "A[j]"]
             }
           ]
         }
       ]
     },
     {
       "step": "swap",
       "variables": ["A[i + 1]", "A[high]"]
     },
     {
       "step": "return",
       "variable": "i + 1"
     }
   ]
         },
         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/GCD_through_successive_subtractions.svg/330px-GCD_through_successive_subtractions.svg.png',
      },  //Counting  Sort------------------
      {
         title: 'Counting  Sort',
         description: {
            "procedure": "countingSort",
            "parameters": {
               "A": "list of non-negative integers",
               "maxVal": "maximum value in A"
            },
            "steps": [
               {
                  "step": "initialize",
                  "variable": "n",
                  "value": "length(A)"
               },
               {
                  "step": "initialize",
                  "variable": "count",
                  "value": "array of size maxVal + 1 with all zeros"
               },
               {
                  "step": "initialize",
                  "variable": "output",
                  "value": "array of size n"
               },
               {
                  "comment": "Store the count of each element"
               },
               {
                  "step": "for",
                  "variable": "i",
                  "range": {
                     "start": 0,
                     "end": "n-1",
                     "inclusive": true
                  },
                  "body": [
                     {
                        "step": "increment",
                        "variable": "count[A[i]]"
                     }
                  ]
               },
               {
                  "comment": "Change count[i] so that count[i] contains the actual position of this element in the output array"
               },
               {
                  "step": "for",
                  "variable": "i",
                  "range": {
                     "start": 1,
                     "end": "maxVal",
                     "inclusive": true
                  },
                  "body": [
                     {
                        "step": "set",
                        "variable": "count[i]",
                        "value": "count[i] + count[i-1]"
                     }
                  ]
               },
               {
                  "comment": "Build the output array"
               },
               {
                  "step": "for",
                  "variable": "i",
                  "range": {
                     "start": "n-1",
                     "end": 0,
                     "inclusive": false,
                     "decrement": true
                  },
                  "body": [
                     {
                        "step": "set",
                        "variable": "output[count[A[i]] - 1]",
                        "value": "A[i]"
                     },
                     {
                        "step": "decrement",
                        "variable": "count[A[i]]"
                     }
                  ]
               },
               {
                  "comment": "Copy the output array to A, so that A now contains sorted elements"
               },
               {
                  "step": "for",
                  "variable": "i",
                  "range": {
                     "start": 0,
                     "end": "n-1",
                     "inclusive": true
                  },
                  "body": [
                     {
                        "step": "set",
                        "variable": "A[i]",
                        "value": "output[i]"
                     }
                  ]
               },
               {
                  "step": "end procedure",
                  "name": "countingSort"
               }
            ]
         },
         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/GCD_through_successive_subtractions.svg/330px-GCD_through_successive_subtractions.svg.png',
      },
      // Add more cards as needed
   ];

   return (
      <div className="card-container">
         {cards.map((card, index) => (
            <Card
               key={index}
               title={card.title}
               description={card.description}
               image={card.image}
            />
         ))}
      </div>
   );
};

export default CardContainer;
