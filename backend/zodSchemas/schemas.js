const zod = require('zod')

const userSchema = zod.object({
    username : zod.string().email(),
    password : zod.string(),
    firstname : zod.string(),
    lastname : zod.string(),
})

const signinSchema = zod.object({
    username : zod.string().email(),
    password : zod.string()
}) 

const updateSchema = zod.object({
    password : zod.string().optional(),
    firstname : zod.string().optional(),
    lastname : zod.string().optional()
})

module.exports = {
    userSchema,
    signinSchema,
    updateSchema
}