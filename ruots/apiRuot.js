import express from 'express';
import { collect } from '../app.js';
export const apiRuot= express();

apiRuot.post('/auth/register', async (req,res)=> {
    const body  =  req.body; 
    console.log(body);
    
    if ('username' in body && 'password' in body && typeof body.username == 'string' && typeof body.password =='string'){
       const result = await collect.find({username:body.username}).toArray()
       console.log(result.length);
       if (result.length == 0){
        Object.assign(body,{encryptesMessagesCount:0, createdAt:Date()});
        const addUser = collect.insertOne(body);
        res.json({id: (await addUser).insertedId});
       }
       else{
        res.json({msg:'this username alredy exist'})
       }
        
    }
    else{
        res.status(400).json({msg:'Your request is incurrect'});
    };
});