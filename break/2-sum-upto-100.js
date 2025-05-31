/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let i = 1;
let sum = 0;

while (i <= 200) {
    sum = sum + i;  // add current number to sum
    if (sum >= 100) {
        break; // stop when sum reaches or exceeds 100
    }
    i++;
}

console.log('Stopped at i =', i);
console.log('Final sum =', sum);
