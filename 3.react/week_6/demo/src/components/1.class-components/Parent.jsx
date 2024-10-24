import { Component } from "react";
import MyChild from "./Child";
import Posts from "./Posts";
class Parent extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    obj = { name: "Bhagesh", city: "Ambala" };

    increment = () => {
        //update state
        this.setState({ count: this.state.count + 1 })
    }
    decrement = () => {
        //update state
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div>
                <h2> Home Class Component</h2>
                <p> The count value is {this.state.count} </p>
                <button onClick={this.increment}> ++ </button>
                <button onClick={this.decrement}> -- </button>
                <MyChild myobj={this.obj} />
                <hr />
                <Posts />
            </div>
        )
    }
}
export default Parent;