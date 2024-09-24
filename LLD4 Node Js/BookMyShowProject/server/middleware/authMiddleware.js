const jwt=require("jsonwebtoken")
const auth=(req,res, next)=>{
try{
console.log("req headers", req.headers.authorization)
const token=req.headers.authorization.split(" ")[1]// barear token spliting
console.log("token:-", token)
const verifyToken=jwt.verify(token,process.env.Jwt_Scret);
console.log("verified token:", verifyToken)
req.body.userId=verifyToken.userId;
console.log("siuccessfully executed auth middleware")
next();
}
catch(err){
    res.status(400).send({
        message:"Token invalid"
    })
}
}

module.exports= auth
