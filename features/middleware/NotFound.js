
// the middleware manipulates both the request and responses
const NotFound = (request,response)=>{
    return response.status(404).send("Not Found");
}

module.exports = NotFound;