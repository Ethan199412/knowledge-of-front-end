import React from "./react";

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state={number:1}
  }
  render(){
    return <div>{this.state.number}</div>
  }
}
// let element = (
//   <div>
//     <button onClick={()=>{
//         console.log('add clicked')
//     }}>add</button>
//     <button>minus</button>
//     <div>mike</div>
//   </div>
// );

React.render(<Counter/>, document.getElementById("root"));
