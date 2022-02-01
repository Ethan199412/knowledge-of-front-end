const { spawn } = require('child_process');

child = spawn('node', ['./stdio-child.js']);
child.stdout.setEncoding('utf8');
// 父进程-发
child.stdin.write(JSON.stringify({
  type: 'handshake',
  payload: '你好吖'
}));
// 父进程-收
child.stdout.on('data', function (chunk) {
  let data = chunk.toString();
  let message = JSON.parse(data);
  console.log(`${message.type} ${message.payload}`);
//   process.exit()
});