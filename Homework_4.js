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
    let max =arr[arr.length-1];
    let diff=max-min;
//minimal value
 for(let j=0;j < arr.length; j++){
    if (min>arr[j]){
    min=arr[j];
    }
   }
//maximal value
for(let i=0 ;i < arr.length ; i++){
    if(max<arr[i]){
    max=arr[i];
    }
    }
//difference
for(let f=0;f<arr.length;f++){
if(arr[f]=== diff){
return 'true';
}
return 'false';
}
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
}