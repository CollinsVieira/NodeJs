import express from 'express';

const app = express();
app.use(express.json());
const PORT = 3000

app.get('/saludo',(_req,res)=>{
    console.log("Hello world")
    res.send("Hello world")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})