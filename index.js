//1. Write A Program To Find Second Largest Element In An Array. //

// let data = [12, 35, 1, 10, 34, 1, 35];
// let max1 = -Infinity;
// let max2 = -Infinity;
// for(let i = 0; i<data.length; i++){
//     if(data[i]>max1){
//         max1=data[i];
//     }
//     else if(data[i]>max2&&data[i]!=max1){
//         max2=data[i];
//     }
// }
// console.log(max2);
// 2. WAP to reverse an integer without converting it to a string.  //


// function revNumber(number){
//     let revNumber = 0;
//     if(number<0){
//         console.log("please enter positive number.");
//     }
//     while(number>0){
//     revNumber = (revNumber*10)+(number%10);
//     number = Math.floor(number/10);
//     }
//     return revNumber;
// }

// let out = revNumber(12345);
// console.log(out);

//  3. Swap Values without using any variable a=10, b=12  //

//  let a = 10;
//  let b = 12;
//  [b, a] = [a, b];
//  console.log(a);
//  console.log(b);

// 4. logic for anagram program with its time complexity. (for large strings) //

//  let str1 = "virendra";
//  let str2 = "ardneraiv";
//  let newStr = "";

//  if(str1.length!=str2.length){
//     console.log("Both string length are not equal.");
//  }

//  let newStr1 = str1.split("").sort().join("");
//  let newStr2 = str2.split("").sort().join("");

//  if(newStr1==newStr2){
//     console.log("both string are anagram string");
//  }
//  else{
//     console.log("both string are not anagram string.");
//  }

// 5. Find the reverse of the string //

// let str = "Virendra";
// let reverseStr = "";
// for(let i = str.length-1; i>=0; i--){
//     reverseStr+=str[i];
// }
// console.log(reverseStr);

// 6. WAP to find missing elements from the array? //

// let arr = [1,2,3,5,6];
// let total = (arr.length+1)*(arr.length+2)/2
// for(let i = 0; i<arr.length; i++){
//     total = total-arr[i];
// }
// console.log(total);

// 7. WAP to find the given string is Palindrome or not. //

// let str = "madam";
// let newStr = "";
// for(let i=str.length-1; i>=0; i--){
//     newStr+=str[i];
// }

// if(newStr==str){
//     console.log("the given string is palindrome string");
// }
// else{
//     console.log("the given string is not pallindrome string.");
// }

// 7. WAP to print Fibonacci series with recursion //

// function fibo(num){
//     if(num<2){
//         return num;
//     }
//     else{
//         return fibo(num-1)+fibo(num-2);
//     }
// }

// let number = 15;
// if(number<0){
//     console.log("please enter positive number.");
// }
// else{
//     for(let i=0; i<number; i++){
//         console.log(fibo(i));
//     }
// }

// 9. WAP to print Fibonacci series without recursion. //

// let n1 = 0;
// let n2 = 1;
// let nextTerm;
// let number = 5;
// for(let i=0; i<number; i++){
//     console.log(n1);
//     nextTerm=n1+n2;
//     n1=n2;
//     n2=nextTerm;
// }

//10. WAP to find the second largest number in an array without sorting. //

//   let arr = [12, 35, 1, 10, 34, 1, 35]
//   let max1 = -Infinity;
//   let max2 = -Infinity;
//   for(let i=0; i<arr.length; i++){
//       if(arr[i]>max1){
//         max1=arr[i];
//       }
//       else if(arr[i]>max2&&arr[i]!=max1){
//            max2=arr[i];
//       }
//   }
//   console.log(max2);

// 11. Code to find even numbers in a list //

// let data = [1,2,3,4,5,6,7,8,9];
// let even = [];
// for(let i = 0; i<data.length; i++){
//     if(data[i]%2==0){
//         even.push(data[i]);
//     }
// }

// console.log(even);

// 12. Find prime numbers from 1 ....n //

// let n = 20;
// let prime = [];
// for(let i = 0; i<=n; i++){
//     let isPrime = true;
//     for(let j = 2; j<=Math.sqrt(i); j++){
//          if(i%j==0){
//             isPrime=false;
//             break;
//          }
//     }
//     if(i>1&&isPrime){
//        prime.push(i)
//     }
// }
// console.log(prime);

// 13. WAP for getting a square root of a given number //

// let number = 25;
// let sqrt = number**(1/2);
// console.log(sqrt);

// 14. WAP with 2 different logic, to find all duplicate number in an array //
 
//  1st Logic

//  let arr = [1,2,3,1,4,5,6,2,7];
//  let duplicate = []
//  for(let i = 0; i<arr.length; i++){
//     for(let j = i+1; j<arr.length; j++){
//         if(arr[i]==arr[j]){
//             duplicate.push(arr[i])
//         }
//     }
//  }
//  console.log(duplicate);

// 2nd Logic

// let data = [1,2,3,1,4,5,6,2,7];

// let duplicate = data.filter((ele,index,arr)=>{
//     return arr.indexOf(ele)!==index
// })

// console.log(duplicate);

// 15. [80, 60, 10, 50, 30, 100, 0, 50]
// Find pairs whose sum = 100;
// Logic for above problem?

//  let data = [80, 60, 10, 50, 30, 100, 0, 50];

//  let emp = [];

//  for(let i = 0; i<data.length; i++){
//     for(let j = i+1; j<data.length; j++){
//         if(data[i]+data[j]==100){
//             emp.push(data[i],data[j])
//         }
//     }
//  }

//  console.log(emp);


// 16. 4, 5, 6, 7, 8, 9
// 11, 12, 13, 6, 7, 8, 9
// These two are linkedList, Find point of common element?
// Logic for above problem?


// class Node{
//     constructor(data){
//         this.head = {
//             value:data,
//             next:null
//         },
//         this.tail = this.head
//     }
//     addData(newData){
//         let newNode = {
//             value:newData,
//             next:null
//         }
//         this.tail.next = newNode
//         this.tail = newNode
//     }
// }

// let list = new Node(4);
// list.addData(5);
// list.addData(6);
// list.addData(7);
// list.addData(8);
// list.addData(9);
// console.log(list);

// let list2 = new Node(11);
// list2.addData(12);
// list2.addData(13);
// list2.addData(6);
// list2.addData(7);
// list2.addData(8);
// list2.addData(9);
// console.log(list2);

// for(let i = list.head; i!=null; i=i.next){
//     for(let j = list2.head; j!=null; j=j.next){
//         if(i.value==j.value){
//             console.log(i.value);
//         }
//     }
// }