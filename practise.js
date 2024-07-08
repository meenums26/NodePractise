// 01 calculate the sum of two numbers
function sumTwo(a,b){
    return a*b;
}

// 02 find the maximum number in an array

// function findMaxNumInArray(arr){
//     return Math.max(...arr)
// }
function findMaxNumInArray(arr){
    if(arr.length === 0){
        console.log("Array is empty")
    }else{
        let max = arr[0]
        for(let i=1;i<arr.length;i++){
            if(arr[i]>max){
                max = arr[i]
            }
        }

        return max;
    }
}
// 03 function to check if a given string is a palindrome

function palindrome(str){
    if(str.length === 0){
        console.log("String is empty")
    }else{
        let str1 =str;
        let str2 = str.split("").reverse().join("")
        if(str1===str2){
          return true
        }else{
            return false
        }
    }
}

// 04 program to reverse a given string. 

const reverseString = (str) => str.split("").reverse().join("")

// 05 function that takes an array of numbers and returns a new array with only the even numbers. 

function evenNumbers(arr){
    return arr.filter((item)=>item%2 === 0)
}

// 06 program to calculate the factorial of a given number. 

function factorial(number){
    if (number === 0 || number === 1) { 

        return 1; 
    
      } else { 
    
        return number * factorial(number - 1); 
    
      } 
    
}

// 07 function to check if a given number is prime. 

function isPrime(num){
    if(num <=1){
        return false
    }
    if(num <=3){
        return true
    }
    for(let i=2;i<Math.sqrt(num);i++){
        if(num%i ===0){
            return false
        }
        return true
    }
}

//08 find the largest element in a nested array. 

function nestedLarge(nestedArr){
    let large = nestedArr[0][0];
    for(let arr of nestedArr){
        for(let num of arr){
            if (num > large){
                large = num;
            }
        }
    }
    return large
}
//09 function that returns the Fibonacci sequence up to a given number of terms. 
function fibonacciSequence(numTerms) { 

    if (numTerms <= 0) return []; 
  
    if (numTerms === 1) return [0]; 
  
     
  
    let sequence = [0, 1]; 
  
    while (sequence.length < numTerms) { 
  
      let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2]; 
  
      sequence.push(nextNumber); 
  
    } 
  
    return sequence; 
  
  } 

  // 10 program to convert a string to title case (capitalize the first letter of each word). 

function makeFirstCap(str){
    // let strArr = str.split(" ")
    // let newArr = []
    // for(let i =0;i<strArr.length;i++){
    //    let newWord = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1)
    //    newArr.push(newWord)
    // }
    // return newArr.join(" ")
    return str.replace(/\b\w/g, l => l.toUpperCase()); 


}
