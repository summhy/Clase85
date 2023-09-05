import jwt from "jsonwebtoken";
const secret = "CUMPLEAÑOS";
const payload = {"marca": "NIKE",
"producto": "zapatillas"};

let token = jwt.sign(payload, secret, {expiresIn: "1m"});                 

console.log(token);


jwt.verify(token, secret, (err, data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data);
    }
})