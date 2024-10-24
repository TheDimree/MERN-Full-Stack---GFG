import React, { Component } from 'react';
import axios from 'axios'

export class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { postData: [] }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                this.setState({ postData: res.data })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <h2> Latest Posts</h2>
                {
                    this.state.postData.map(post =>
                        <div key={post.id}>
                            <h4> {post.title} </h4>
                            <p> {post.body} </p>
                            <hr />
                        </div>
                    )
                }
            </div>
        )
    }
}
export default Posts