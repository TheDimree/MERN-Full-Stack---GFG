import React, { Component } from 'react'

export class Child extends Component {
    courses = ["A", "B", "C", "D"];
    render() {
        return (
            <div>
                <h4> Child Component</h4>
                <p> {this.props.myobj.name} is from {this.props.myobj.city}</p>
                <ul>
                    { this.courses.map((val, ind) => <li key={ind}> {val} </li>) }
                </ul>
            </div>
        )
    }
}

export default Child
