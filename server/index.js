import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import studentRoutes from '../server/routes/student.js'
const app=express();





app.use(bodyParser.json({limit:"20mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb", extended:true}));
app.use(cors());
// app.get('/',(req,res)=>{
//     res.send("Hey")
// })

app.use("/students",studentRoutes);
const CONNECTION_URL='your connnection id from mongoDb atlas" 
const port=5000;
mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>
{
    app.listen(port,()=>
    {
        console.log(`app is running and listening on ${port}`);
    })
}).catch((err)=>{
    console.log(err.message)
}) 
  
