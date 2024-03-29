
const userService = require("../service/userService")


const register = async (req, res)=>{
    try{
        const response = await userService.createUser(req.body)
        res.status(200).json({response})
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const login = async (req,res) =>{
    return await userService.login(req.body)
    .then((response) => res.json(response))
    .catch((error) => res.json(error.message))
}

const deleteUser = async (req, res)=>{
    try{
        const response = await userService.deleteUser(req.body)
        res.status(200).json({response})
    }
    catch(error){
        res.status(500).json(error.message)
    }
}


const updateUser = async (req,res) =>{
    try{
        const response = await userService.updateUser(req.body)
        res.status(200).json({response})
    }
    catch(error){
        res.status(500).json(error.message)
    }
}
module.exports = {register,login,deleteUser,updateUser}