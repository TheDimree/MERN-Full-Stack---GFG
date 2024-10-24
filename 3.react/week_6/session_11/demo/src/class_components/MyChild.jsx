import { Component } from "react";
class MyChild extends Component {
    courses=["A","B","C","D"];
   render(){
     return(
        <div>
            <h4> Child Component</h4>
            <p> {this.props.myobj.name} is belong to {this.props.myobj.city}</p>
            <ul>
                {this.courses.map((val,ind)=> 
                  <li key={ind}> {val} </li>
                )}
            </ul>
        </div>
     )
   }
}
export default MyChild;