import React from "./react";

let element = (
  <div>
    <button onClick={()=>{
        console.log('add clicked')
    }}>add</button>
    <button>minus</button>
    <div>mike</div>
  </div>
);

React.render(element, document.getElementById("root"));
