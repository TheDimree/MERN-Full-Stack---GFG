import fs from 'fs';
if(fs.existsSync('myinfo.txt')){
    fs.readFile('myinfo.txt',(err,data)=>{
        if(err) throw err;
        console.log(data.toString());
    })
}
else{
    fs.writeFile('myinfo.txt','Hello Guys ! We perform fs operations',(err)=>{
        if(err) throw err;
        console.log(`File created successfully`);
    })
}