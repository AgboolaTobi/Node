const validatePassword = function(password){
    if (password.length < 8){
        return `Password submitted is too weak ${password}`
    }
    let regex = /([a-z]+)([A-Z]+)([0-9]+)[@.#$!%*?&^]/;
    let result = regex.test(password)
    return result;
}

module.exports = {validatePassword}