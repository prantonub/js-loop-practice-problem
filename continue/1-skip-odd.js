/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
for (let i = 1; i <= 40; i++) {
    if (i % 2 !== 0) {
        continue; // Skip odd numbers
    }
    console.log(i); // Print even numbers
}
