// import https from 'https';//import http module
// https.get("https://jsonplaceholder.typicode.com/posts/1",(res)=>{
//   console.log(res.statusCode)
// })
const fetchPosts=async ()=>{
    try{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const users=await res.json();
    console.log(users);
    }
    catch(err){
        console.log("Error : "+err)
    }
}
fetchPosts();