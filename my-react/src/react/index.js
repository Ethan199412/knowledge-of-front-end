import $ from 'jquery'
import createReactUnit from './unit.js'
import createElement from './element.js'
import Component from './component'

let React = {
    render,
    nextRootIndex:0,
    createElement,
    Component
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