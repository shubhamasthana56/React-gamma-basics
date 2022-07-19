import React from "react";
class FirstClassComponent extends React.Component {
    constructor() {
        console.log("Inside constructor");
        super();
        this.state = {
            counter: 0,
            loader: false,

        }
        this.counter = 0;
        
    }
    handleIndcrement = ()=> {
        this.setState({counter: this.state.counter+1})
        
        console.log(this.state.counter)
    }
    handleDecrement = ()=> {
        this.setState({counter: this.state.counter-1})
        console.log(this.state.counter)
    }
    static getDerivedStateFromProps() {
        console.log("Get Derived State from Props");
    }
    componentDidMount() {
        console.log("Component Did Mount");
    }
    componentDidUpdate() {
        console.log("Inside Component Did update");
    }
    render() {
        console.log("Inside Render Method")
        return (
            <div>
                 <button onClick={this.handleIndcrement}>+</button>
                 <div>{this.state.counter}</div>
                 <button onClick={this.handleDecrement}>-</button>
            </div>
           
        )
        
            
        
    }
}

export default FirstClassComponent
///Class1 class2<FirstComponent/>

//mutable immutable cant be updated
//forEach map 