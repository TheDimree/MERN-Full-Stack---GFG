import { Component } from "react";
import MyChild from "./MyChild";
class Home extends Component {
    constructor(props){
       super(props);
       this.state={count:0}
    }
    obj={name:"sumit",city:"noida"};
    INC=()=>{
        //update state
        this.setState({count:this.state.count+1})
    }
    DEC=()=>{
        //update state
        this.setState({count:this.state.count-1})
    }
   render(){
     return(
        <div>
            <h2> Home Class Component</h2>
            <p> The count value is {this.state.count} </p>
            <button onClick={this.INC}> ++ </button>
            <button onClick={this.DEC}> -- </button>
            <MyChild myobj={this.obj}/>
        </div>
     )
   }
}
export default Home;