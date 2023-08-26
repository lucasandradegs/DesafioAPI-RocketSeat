const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite")

class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body

        const database = await sqliteConnection()
        const checkIfUserExist = await database.get("SELECT * FROM user WHERE email = (?)", [email])

        if(checkIfUserExist) {
            throw new AppError(`O endereço de e-mail já está cadastrado`)
        }

        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, password])

        return response.status(201).json()

    }
}

module.exports = UsersController;