const longComputation = () => {
    let sum = 0;
    for (let i = 0; i < 5e9; i++) {
        sum += i;
    };
    return sum;
};

// 开关，收到消息才开始做
process.on('message', (msg) => {
    const sum = longComputation();
    process.send(sum);
});