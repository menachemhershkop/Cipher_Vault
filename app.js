import express from 'express';
import 'dotenv/config';
import connectMango from './connectDB/connectMongo.js';
import { apiRuot } from './ruots/apiRuot.js';
const app= express();
const PORT = 3000;
const db =await connectMango({
    uri: process.env.MONGO_URI,
    dbName: process.env.DB_NAME 
});

export const collect=db.collection('users');
app.use(express.json());
app.use('/api', apiRuot);
app.get('/', (req,res)=>{

    res.json({msg:'Wellcome to massages system...'})
})


app.listen(PORT,()=>{
    console.log('server listen at port', PORT);
    
})