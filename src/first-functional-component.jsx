import { useState, useEffect } from "react";
const FirstFunctionalComponent = ()=> {
    //Accepts Initial value as parameter
    //Returns value function to update That value
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState("Hello")
    //accepts a callback and array dependencies return nothing

    //componentDidMount
    useEffect(()=> {
        console.log("Inside useEffect mounted");
    }, []);

    useEffect(()=> {
        console.log("Inside useEffect onchange");
        getText(text);
    }, [text]);

    function getText(newText) {
        console.log(newText)
    } 
    const handleIncrement = ()=> {
        //0
        setCounter(counter + 1);
    }
    const handleDecrement = ()=> {
        setCounter(counter - 1);
    }
    //function useState(value) {
    //     let finalValue = value;
    //     function updateValue(newValue) {
    //         finalValue = newValue
    //     }
    //     return {finalValue, updateValue}
    // }

    //class
    // render() {
    //     return (
    //         <div></div>
    //     )
    // }
    //constructor
    // this.state = {}

    //hooks

    return (
       <div>
           <button onClick={handleIncrement}>+</button>
           <div>{counter}</div>
           <button onClick={handleDecrement}>-</button>
           <button onClick={()=> {setText("Changed To Hy")}}>Change Text</button>
           <div>{text}</div>
       </div> 
    )
}



export default FirstFunctionalComponent;

//obj = {name: "", age: ""}
//const name = obj.name
//const age = obj.age
//const {name, age} = obj;
//arr [value, upadteValue]
//arr[0]

