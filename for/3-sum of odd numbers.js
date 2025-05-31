//Display sum of all the odd numbers from 91 to 129.
let sumOfOddNumbers = 0;
for(let i = 91; i<= 129; i++){
    if(i % 2 === 1){
    console.log("Odd Number: ", i); 
    sumOfOddNumbers = sumOfOddNumbers + i;
    }
}
console.log("Sum Of odd number: ", sumOfOddNumbers);


//Display sum of all the even numbers from 51 to 85.
let sumOfEvenNumbers = 0;
for(let i = 51; i<=85; i++){
    if(i % 2 === 0){
        console.log("Even Number: ", i);
        sumOfEvenNumbers = sumOfEvenNumbers + i;
    }
}
console.log("Sum Of even Number: ", sumOfEvenNumbers);