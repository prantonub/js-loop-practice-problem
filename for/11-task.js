// Display numbers divisible by 5 from 30 to 70 and calculate their sum
let sumOfMultiples = 0;

for (let i = 30; i <= 70; i++) {
    if (i % 5 === 0) {
        console.log("Divisible by 5: ", i);
        sumOfMultiples = sumOfMultiples + i;
    }
}

console.log("Sum of numbers divisible by 5: ", sumOfMultiples);
