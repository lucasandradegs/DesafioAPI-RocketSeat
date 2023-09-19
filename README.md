# Movie Notes - RocketSeat Backend API :movie_camera:

Welcome to the Movie Notes Backend API! This project provides a RESTful API for managing movie notes, user information, and tags. Users can create movie notes with details such as title, description, rating, and associated tags.

## Features :sparkles:

- User Management: Create and update user information.
- Movie Notes: Create, show, delete, and index movie notes.
- Tagging: Associate movies with tags for better organization.
- Search: Search movies by title, tags, or user.

## Technologies Used :computer:
[![My Skills](https://skillicons.dev/icons?i=nodejs,express)](https://skillicons.dev) 
- Node.js
- Express.js
- Knex.js
- SQLite3
- Bcrypt.js

## Setup and Installation :rocket:

1. Clone the repository: `git clone https://github.com/lucasandradegs/DesafioAPI-RocketSeat.git`
2. Navigate to the project directory
3. Install dependencies: `npm install`
4. Set up the database: `npx knex migrate:latest`
5. Start the server: `npm start`

## API Endpoints :hammer_and_wrench:

- I used Insomnia to check and test the user creation routes, movie and tag registration. Feel free to use the program you like the most.

### Users

- `POST /api/users`: Create a new user.
- `PUT /api/users/:id`: Update user information.

### Movies

- `POST /api/movies/:user_id`: Create a new movie note.
- `GET /api/movies`: Get a list of all movie notes.
- `GET /api/movies/:id`: Get details of a specific movie note.
- `DELETE /api/movies/:id`: Delete a movie note.

### Search

- `GET /api/movies`: Search movies by user, title, or tags using query

![image](https://github.com/lucasandradegs/DesafioAPI-RocketSeat/assets/115107945/ef8709fb-94cb-4145-8fa8-4ca27f95d91a)


## Database Schema :card_file_box:

The database includes two main tables: `users` and `movies`, along with a `tags` table for categorizing movies.

## Getting Help :raising_hand:

If you encounter any issues or have questions, feel free to open an issue on the GitHub repository.

## Credits :clap:

This project was developed with the support of Node.js, Express.js, Knex.js, and other open-source technologies.

Enjoy using the Movie Notes Backend API! :movie_camera::sparkles:
