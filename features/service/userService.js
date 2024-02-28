const User = require("../model/user")


const NotFoundException = require("../exceptions/NotFoundException");


const createUser = async(request) =>{
    const {firstName, lastName, email, password} = request;

    const user = await User.findOne({email});
    if(user){
        throw new NotFoundException("User details in use");
    }
    const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };
    // checkPassword(newUser.password)
    const savedUser = await User.create(newUser);

    const response = {
        _id : savedUser._id,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        email:savedUser.email
    }
    

    return{
        data: response,
        message: "Registration successful"
    }
}




const login = async (request) =>{

    const {email, password} = request;

    const user = await User.findOne({email})

    if(!user){
        throw new NotFoundException("User does not exist");

    };
    if(user.password !== password){
        throw new NotFoundException("Invalid credentials");
    }
    return{
        msg: "Login successful",
    }
}

const deleteUser = async (request) =>{

    const {email,password} = request;

    const user = await User.findOneAndDelete({email})

    
    if(!user){
        throw new NotFoundException("User does not exist");

    };
    if(user.password !== password){
        throw new NotFoundException("Invalid credentials");
    }
    return{
        msg: "User successfully deleted",
    }
}


const updateUser = async (request) =>{

    const {firstName, lastName, email, password} = request;

    const user = await User.findOne({email})

    
    if(!user){
        throw new NotFoundException("User does not exist");

    };

    const updatedUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    const saveUpdatedUser = await User.updateOne(updatedUser)

    const response = {
        _id : saveUpdatedUser._id,
        firstName: saveUpdatedUser.firstName,
        lastName: saveUpdatedUser.lastName,
        email:saveUpdatedUser.email
    }
    return{
        data: response,
        msg: "User details successfully updated",
    }
}


module.exports = {createUser,login,deleteUser,updateUser};