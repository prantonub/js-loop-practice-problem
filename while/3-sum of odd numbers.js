/***
Display sum of all the odd numbers from 81 to 131.
 */
let i = 81;
let sumOfOddNumber = 0;
while(i <= 131){
    if(i%2 === 1){
        console.log("Odd Number: ", i)
        sumOfOddNumber = sumOfOddNumber + i;
    }
    i++;
}
console.log("Sum Of all Odd number: ", sumOfOddNumber);


/***
Display sum of all the even numbers from 206 to 311.
*/
let i = 206;
let sumOfEvenNumber = 0;
while(i <= 311){
    if(i % 2 ===0){
        console.log("Even Number: ", i)
        sumOfEvenNumber = sumOfEvenNumber + i;
    }
    i++;
}
console.log("Sum of all even number: ", sumOfEvenNumber);