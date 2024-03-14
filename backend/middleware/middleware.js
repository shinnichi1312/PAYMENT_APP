const { JWT_SECRET } = require("../config")

const jwt = require ('jsonwebtoken')

function authMiddleware(req,res,next){
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(403).json({
            msg : "invalid token / user"
        })
    }

    const token = authHeader.split(' ')[1]
    
    jwt.verify(
        token,JWT_SECRET, function(err,decoded){
            if(err){
                res.status(403).json({
                    msg : "invalid token / user"
                })
            }
            else{
                req.userId = decoded.userId
                next()
            }
        }
    )
}

module.exports = {
    authMiddleware
}