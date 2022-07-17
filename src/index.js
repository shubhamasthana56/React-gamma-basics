import React from 'react';
import ReactDOM from 'react-dom/client';
import First from "./First";
import { Form } from './form';
import "./index.css";

///
//<div id="main"></div>
const root = ReactDOM.createRoot(document.getElementById('main'));
//document.appendChild()
//React.createElement("div|p|article", {},"")
//create Element 
const node = React.createElement("div", {}, React.createElement("ul", {},
[React.createElement("li", {}, "First Element"),React.createElement("li", {}, "SecondElement")]
));
const node1 = React.createElement("div", {id: "parent", className: "test"}, [React.createElement("div", {style: {color: "red"}},"Hello"),
React.createElement("ul", {}, [React.createElement("li", {}, "1 Element"), React.createElement("li", {}, "2 Element")])] )
root.render(
    <div>{node1}</div>
);
