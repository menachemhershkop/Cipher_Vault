import { collect } from "../app.js";
export default async function valid(req, res, next){
    const {username, password} = req.body;
    console.log(username, password);
            const connect = await collect.find({username:username}).toArray()
            // console.log(connect[0].password);
            if(connect.length ==0){
                  res.status(400).json({'msg':'username nut fuond'})
            }
            else{
            if(password== connect[0].password){
                console.log('connected');
                
                // res.status(203).json({'conniction':'currect'})
                next()
            }
            else{
                res.status(400).json({'conniction':'Wrong password'})
            }
        }
    }
