const express = require('express')
const zod = require('zod')
const jwt = require('jsonwebtoken')
const  { JWT_SECRET } = require('../config')
const { User, Account } = require('../db')
const {userSchema , signinSchema, updateSchema} = require("../zodSchemas/schemas")
const { authMiddleware } = require('../middleware/middleware')
 
const router = express.Router()

router.post('/signup',async(req,res)=>{
    let userData = req.body
    let parsedUserData = userSchema.safeParse(userData)
    if(!parsedUserData.success){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    
    const userExists = await User.findOne({
        username : req.body.username
    })

    if(userExists){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    else{
        const user = await User.create(
        req.body
    )
        const userId = user._id

        const userAccount = await Account.create({
            userId : userId,
            balance : 1 + Math.random()*10000
        })

    const token = jwt.sign({
        userId
    },JWT_SECRET)

    return res.status(200).json({
        message : "User Created Succesfully",
        userId : token,
        balance : userAccount.balance
    })

    }   
})

router.post('/signin',async(req,res)=>{
    const user = req.body
    let parsedUserData = signinSchema.safeParse(user)

    if(!parsedUserData.success){
        res.status(411).json({
            msg : "Wrong Credentials"
        })
    }

    const userExists = await User.findOne({
        username : req.body.username,
        password : req.body.password
    })

    if(userExists){
        const token = jwt.sign({userId : userExists._id},JWT_SECRET)
        res.status(200).json({
            token : token,
        })
    }
    else{
        res.status(411).json({
            message: "Error while logging in"
        })
    }


})

router.put('/', authMiddleware ,async (req,res) => {
    const dataToUpdate = req.body

    const checkUpdate = updateSchema.safeParse(dataToUpdate)

    if(checkUpdate.success){
        if(req.userId){
            const updatedData = await User.updateOne({_id : req.userId},
            dataToUpdate)
        
            if(updatedData){
                res.status(200).json({
                    message : "Updated Successfully"
                })
            }
            else{
                res.status(411).json({
                    message : "Error While Updating Information"
                })
            }
        }
        
    }
    else{
        res.status(411).json({
            message : "wrong credentials for updatation"
        })
    }
})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstname: {
                "$regex": filter
            }
        }, {
            lastname: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    })
})

module.exports = router