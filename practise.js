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

