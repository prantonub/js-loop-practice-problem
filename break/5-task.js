//Print numbers from 1 to 500. Break the loop if the number is divisible by 77.
for (let i = 1; i <= 500; i++) {
    if (i % 77 === 0) {
        break;
    }
    console.log(i);
}
