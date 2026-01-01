import { collect } from "../app.js";
export async function valid(req, res, next){
    const {username, password} = req.body;

            const connect = await collect.find({username:username}).toArray()
            if(connect.length ==0){
                  res.status(400).json({'msg':'username nut fuond'})
            }
            else{
            if(password== connect[0].password){
                next()
            }
            else{
                res.status(400).json({'conniction':'Wrong password'})
            }
        }
    }

export async function validHedar(req, res, next){
const {username, password} = req.headers;

        const connect = await collect.find({username:username}).toArray()
        if(connect.length ==0){
                res.status(400).json({'msg':'username nut fuond'})
        }
        else{
        if(password== connect[0].password){
            next()
        }
        else{
            res.status(400).json({'conniction':'Wrong password'})
        }
    }
}