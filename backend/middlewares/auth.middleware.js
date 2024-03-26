const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')


async function isAuthenticated(req, res, next){
    const token = req.query.token
    if(!token){
        return res.status(401).json({msg:"No tienes acceso."})
    }
    else{
        const tokenDecoded = jwt.verify(token, "DXdd21@ace4")
        const userID = tokenDecoded.userId
        const foundUser = await userModel.findById(userID)
        if(!foundUser){
            return res.status(401).json({msg:"Token no válido"})
        }
        else{
            next()
        }
    }

}


async function isAdmin(req, res, next){
    const token = req.query.token
    if(!token){
        return res.status(401).json({msg:"No tienes acceso."})
    }
    else{
        const tokenDecoded = jwt.verify(token, "DXdd21@ace4")
        const userID = tokenDecoded.userId
        const foundUser = await userModel.findById(userID)
        if(!foundUser){
            return res.status(401).json({msg:"Token no válido"})
        }
        else{
            if(!foundUser.role !== "admin"){
                return res.status(403).json({msg:"No estás autorizado"})
            }
            else{
                next()
            }
        }
    }
}

module.exports={
    isAuthenticated,
    isAdmin
}