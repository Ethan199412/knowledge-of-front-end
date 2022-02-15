
(function () {
    const num = 3e8;
    let sum = 0;
    for (let i = 0; i < num; i++) {
        //console.log('[p0] i', i)
        sum += i
    }
    console.log('sum', sum)
    defer.innerText = 'defer:' + sum
})()