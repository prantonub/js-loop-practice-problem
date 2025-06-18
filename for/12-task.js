//Display sum of all the odd numbers from 150 to 200:
let sumOfOddNumbers = 0;
for (let i = 150; i <= 200; i++) {
    if (i % 2 === 1) {
        console.log("Odd Number: ", i);
        sumOfOddNumbers = sumOfOddNumbers + i;
    }
}
console.log("Sum of odd numbers: ", sumOfOddNumbers);
