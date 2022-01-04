let progressDom = document.querySelector('.progress')
let textDom = document.querySelector('.text')

function rotateCircle(persent, isUpdate) {
    if (isUpdate == 0) {
        let circleLength = Math.floor(2 * Math.PI * parseFloat(progressDom.getAttribute('r')))
        let value = persent * circleLength / 100;
        let red = 255 + parseInt((0 - 255) / 100 * persent)
        let green = 0 + parseInt((191 - 0) / 100 * persent)
        let blue = 0 + parseInt((255 - 0) / 100 * persent)

        progressDom.setAttribute('stroke-dasharray', value + ',10000')
        progressDom.setAttribute('stroke', `rgb(${red},${green},${blue})`)

        textDom.innerHTML = persent + '%'
        textDom.setAttribute('fill', `rgb(${red},${green},${blue})`)
    }
}

let num = 0
const oneTurn = () => {
    num += 0.25
    console.log(num)
    if (num > 100) {
        num = 0
    }
    rotateCircle(num, num % 1)
    requestAnimationFrame(oneTurn)
}

console.log('haha')
oneTurn()
