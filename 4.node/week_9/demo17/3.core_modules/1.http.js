import http from 'http'
const PORT = 8008;
const SERVER = http.createServer((req,res)=> {
    res.write("My First node server is running.")   // => check http://localhost:8008/
    res.end();
})

SERVER.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`);
})