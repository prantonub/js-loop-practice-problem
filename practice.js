for (let i = 1; i <= 100; i++) {
    let root = Math.sqrt(i);
    if (root === Math.floor(root)) {
        console.log('First square number found:', i);
        break;
    }
}
