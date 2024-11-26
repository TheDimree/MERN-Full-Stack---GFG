import http from 'http';//import http module
const PORT=7788;//define port
//create server
const server=http.createServer((req,res)=>{
    //write response
    res.write("My first node server!!!!");
    res.end();
})
//listen server in port
server.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Server work on ${PORT} `)
})