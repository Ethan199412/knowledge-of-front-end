process.stdin.on('data', (chunk) => {
    let data = chunk.toString();
    let message = JSON.parse(data);
    switch (message.type) {
        case 'handshake':
            // 子进程-发
            process.stdout.write(JSON.stringify({
                type: 'message',
                payload: message.payload + ' : hoho'
            }));
            break;
        default:
            break;
    }
    process.exit()
});