import $ from 'jquery'
import createReactUnit from './unit.js'
let React = {
    render,
    nextRootIndex:0
}
function render(element,container){
    // element: React组件 container: div
    //$(container).html(element)
    //let markUp = `<span data-reactid="${React.nextRootIndex}">${element}</span>`
    let createReactUnitInstance = createReactUnit(element);
    let markUp = createReactUnitInstance.getMarkUp(React.nextRootIndex)
    container.innerHTML = markUp
}
export default React