//Exersie_1
//Given a number n (n > 0). Print Fibonacci series up to n;
function fibonacci (n){
    let result =[];
    let previous = 0;
    let next = 1;
    while (previous <= n) {
        let temp = previous;
        result.push(previous);
        previous = next;
        next = next + temp;
    }
    return result.join(',');
}
//Exersice_2
//Insert a number. 
//Calculate product and sum of the digits of the number. 
//If product is divisible by the sum, print the quotient, otherwise print the remainder.
function prodsum(number){
    let sum = 0;
    let product = 1;
    while(number){
        sum+=number%10;
        product*=number%10;
        number=Math.floor(number/10);
        }
    if(product%sum===0){
        return 'Quotient is ' + product/sum;
            }else{
            return 'Reminder is ' + product%sum;
            }
    }
//Exersice_3_Given an array of numbers. 
//Find the maximum and minimum elements in array.
// Calculate their difference and check is there such an element in the array or not.
function maxmindiff (arr){
    let min =arr[0];
    let max =arr[0];
    let diff=max-min;
 //max,min_values
for(let i=0;i < arr.length; i++){
 if (max<arr[i]){
    max=arr[i];
    }
  if(min>arr[i]){
    min=arr[i];
   }
   }
   //difference_check
for(let f=0;f<arr.length;f++){
  if(arr[f]=== diff){
  return 'true';
}
  return 'false';
}
}
//Exersice_4.
//Given an array of numbers.
//Find the index of the second maximum element.
function secondMaxIndex (arr){
    let clone = arr.slice(0);
    for(let j=0;j<clone.length;j++){
     for(let i=0;i < clone.length-1; i++){
        if (clone[i]>clone[i+1]){
          let tmp =clone[i];
          clone[i] = clone[i+1];
          clone[i+1]=tmp;
        }
      }
    }
    let secondmax=clone[clone.length-2];
    return arr.indexOf(secondmax);
     }
//Exersice_5
//Given an array of numbers, padding amount and repeat count.
// Pad the array in the following way: the padding amount specifies how many elements should be taken from the array edges,
// the repeat amount specifies how many times the pad should be repeated
function paddinarray (arr, pad ,rep ){
    let startRep=[],endRep=[];
    let start=arr.slice(0,pad);
    let end =arr.slice(arr.length-pad);
       for(let i=0;i<rep;i++){
           for(let j=0;j<pad;j++){
               startRep.push(start[j]);
               endRep.push(end[j]);  
       }
       }
       for(let i =0 ; i<endRep.length; i++){
         if(arr.length<pad){
         return'Invalid padding amount';
         }else{
         arr.unshift(startRep[startRep.length-i-1]);
         arr.push(endRep[i]);
          }
          }
       return arr;
       }
//Exersice_6
//Write a program to print rectangle pattern for given number using loop. 
function printCube(n) {
    let cube1 = '';
        for (let i = 0; i < n; i++){
            for (let j = 0; j < n; j++) {
                cube1 += '*';
            }
    cube1 += '\n';
        }
    console.log(cube1);
    }
//Exersice_7
//Write a program to print rectangle pattern for given number using loop
function printcube2 (n) {
    let cube2 = '';
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++) {
            cube2 += ((i === 0 || i === (n - 1)) || (j === 0 || j === (n - 1))) ? '*' : ' ';
        }
        cube2 += '\n';
    }
    console.log(cube2);    
    
//Exersice_8_Print the following number pattern.
    function printPattern (n) {
        let res = '' ;
       for(let i = 1 ; i< n*2; i++){
          if(i<=n){
            for(let j = 1 ; j <=i;j++){
               res+=j;
              }
               res += '\n';
          }else{
          for(let j = 1 ; j <=2*n-i;j++){
              res+=j;
              }
               res += '\n';
              }
              }
              console.log(res);
              }