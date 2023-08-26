require("express-async-errors")

const express = require("express")

const app = express()
app.use(express.json())

app.get("/", (request, response) => {
    response.json(`Iniciando minha API backend`)
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))