// @ts-check

import React from "react";
import ReactDom from 'react-dom';

function Greeting(){
  return <h4>Hello from New World!</h4>
}

ReactDom.render(<Greeting />, document.getElementById('root'))