function generateBinaryNumbers(N) {
    const queue = [];
    const result = [];
    queue.push("1");
    for (let i = 0; i < N; i++) {
        const binary = queue.shift();
        result.push(binary);
        queue.push(binary + "0");
        queue.push(binary + "1");
    }
    return result;
}

console.log(generateBinaryNumbers(5)); // ["1","10","11","100","101"]