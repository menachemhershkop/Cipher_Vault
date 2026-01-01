import express from 'express';
import { collect } from '../app.js';
import reversText from '../encrypt/encrypt.js';
import valid from './auth.js';
// import { supabase } from '../connectDB/connectSub.js';
export const apiRuot= express();
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config'
export const supabase =createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
apiRuot.post('/auth/register', async (req,res)=> {
    const body  =  req.body; 
    console.log(body);
    
    if ('username' in body && 'password' in body && typeof body.username == 'string' && typeof body.password =='string'){
       const result = await collect.find({username:body.username}).toArray()
       console.log(result.length);
       if (result.length == 0){
        Object.assign(body,{encryptesMessagesCount:0, createdAt:Date()});
        const addUser = collect.insertOne(body);
        res.json({id: (await addUser).insertedId, username:body.username});
       }
       else{
        res.json({msg:'this username alredy exist'})
       }
        
    }
    else{
        res.status(400).json({msg:'Your request is incurrect'});
    };
});

apiRuot.post('/messages/encrypt', valid, async (req,res)=>{
    const {username, message, cipherType} = req.body;
    if(cipherType == 'reverse'){
        const revers = reversText(message)
        console.log(revers);
        console.log(username);
        
        const {data, error} = await supabase.from('messages').insert({username:username, cipher_type:cipherType, encryptes_text:revers}).select()
        res.json({'id':data[0].id, 'cipherType':data[0].cipher_type, 'encryptedText':data[0].encryptes_text})
        console.log(data,error);
        collect.updateOne({username:username}, {$inc:{encryptesMessagesCount:1}})
    }
})

apiRuot.post('/messages/decrypt', valid, async (req,res)=>{
    const {messageid} = req.body;
    
    const {data} = await supabase.from('messages').select('*').eq('id', messageid).single()
    console.log(data);
    
    if(data.cipher_type== 'reverse'){
    const decrypt = reversText(data.encryptes_text);
    res.status(200).json({id:messageid, decryptedText:decrypt})
    }
    else{
        res.status(200).json({id:messageid, decryptedText:null, error:"CANNOT_DECRYPT"})
    }
    
})


 
