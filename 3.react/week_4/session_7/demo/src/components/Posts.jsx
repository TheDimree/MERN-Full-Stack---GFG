import React, { useEffect, useState } from 'react';
import useFetchData from '../custom_hook/useFetchData';
const Posts = () => {
    // const [postData,setPostData]=useState([]);
    const [count,setCount]=useState(0);
    const postData=useFetchData("https://jsonplaceholder.typicode.com/posts");
    //mounting
    // useEffect(()=>{
    //   let API="https://jsonplaceholder.typicode.com/posts";
    //   fetch(API)
    //   .then(res=> res.json())
    //   .then(data=>{
    //       setTimeout(()=>{
    //         console.log(data);
    //         setPostData(data);
    //       },2000)
         
    //   })
    // },[]);
    //unmounting 
    useEffect(()=>{
       const timerId=setInterval(()=> setCount(val=> val+1),1000);
       //cleanup interval
       return ()=>{
             clearInterval(timerId);
       }
    },[])
  return (
    <div>
          <h2> Jsonplaceholder Posts</h2>
          <p> Counter : {count}</p>
          {
            postData.map(post=>
                <div key={post.id}> 
                   <h4>  {post.title} </h4>
                   <p> {post.body} </p>
                   <hr />
                </div>
            )
          }
    </div>
  )
}

export default Posts