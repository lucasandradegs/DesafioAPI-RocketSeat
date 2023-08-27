const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class MoviesController {
    async create(request, response) {
        const { title, description, rating, tags } = request.body
        const { user_id } = request.params

        const [movie_id] = await knex("movies").insert({
            title,
            description,
            rating,
            user_id
        })

        const tagsInsert = tags.map(name => {
            return {
                movie_id,
                name,
                user_id
            }
        })

        await knex("tags").insert(tagsInsert)

        response.json();
    }
}

module.exports = MoviesController