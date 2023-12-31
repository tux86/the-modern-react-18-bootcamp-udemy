const express = require('express')
const movies = require('./movies.json')
const cors = require('cors')
const app = express()


app.use(cors())
app.get("/", (req, res)=> {
    return res.send("Hello")
})

app.get("/movies/list", (req, res)=> {
    return res.send(movies)
})

app.get("/movie/:id", (req, res)=> {
    const id = req.params.id
    const movie = movies.find(m => m.id === id)
    return res.send(movie)
})

app.listen(8080, () => {
    console.log("Now listening on port 8080")
} )