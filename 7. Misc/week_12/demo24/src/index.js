import express from "express"

const PORT = 8008;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, (err)=> {
    if(err) return err
    console.log(`Server is running on port ${PORT}`);
});