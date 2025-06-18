//Display sum of all numbers divisible by 3 from 30 to 90:
let sumDivisibleByThree = 0;
for (let i = 30; i <= 90; i++) {
    if (i % 3 === 0) {
        console.log("Number divisible by 3: ", i);
        sumDivisibleByThree = sumDivisibleByThree + i;
    }
}
console.log("Sum of numbers divisible by 3: ", sumDivisibleByThree);
