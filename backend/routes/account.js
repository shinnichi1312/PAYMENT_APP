const express = require('express')
const { authMiddleware } = require('../middleware/middleware')
const { Account } = require('../db')
const { default: mongoose } = require('mongoose')

const router = express.Router()

router.get("/balance",authMiddleware, async(req,res)=>{
    const balance = await Account.findOne({
        userId : req.userId
    })

    res.json({
        balance : balance.balance
    })
})

router.post("/transfer",authMiddleware,async (req,res)=>{
    const currentSession = await mongoose.startSession()

    currentSession.startTransaction()

    const {to , amount} = req.body

    //Get account details to and from, from account database

    const fromAccount = await Account.findOne({
        userId : req.userId
    }).session(currentSession)

    if(!fromAccount || fromAccount.balance < amount){
        await currentSession.abortTransaction()
        res.status(400).json({
            message : "Insufficient Balance"
        })
        return;
    }

    const toAccount = Account.findOne({
        userId : to
    }).session(currentSession)

    if(!toAccount){
        await currentSession.abortTransaction()
        res.status(400).json({
            message : "Invalid Account"
        })
        return;
    }

    // Transaction/transfer money

    await Account.updateOne({
        userId : req.userId
    },{
        $inc : {
            balance : -amount
        }
    }).session(currentSession)

    await Account.updateOne({
        userId : to
    },{
        $inc : {
            balance : amount
        }
    }).session(currentSession)

    // Do both the updates together or abort both --- Commit Transaction

    await currentSession.commitTransaction()

    res.status(200).json({
        message : "Transfer Successfull"
    })

})

module.exports = router