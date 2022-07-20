import React from 'react';
import ReactDOM from 'react-dom/client';
import First from "./First";
import { Form } from './form';
import "./index.css";
import FirstClassComponent from './first-class-component';
import FirstFunctionalComponent from './first-functional-component';
import Assignment1 from './assigments/assignment-1';
import Input from './input';
import List from './list';
import User from "./user";
import Employee from './employess';

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
    <div>{node1}
      {/* <FirstClassComponent/>
      <br>
      </br>
      <div>Functional Component</div>
      <FirstFunctionalComponent/> */}
      {/* <Assignment1/> */}
      <Input/>
      <List/>
      <User/>
      <Employee/>
    </div>
);
