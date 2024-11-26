import fs from 'fs';
const getFileData=(filename)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data.toString())
            }
        })
    })
}
getFileData("./myinfo.txt")
.then(data=> console.log(data))
.catch(err=> console.log(err))