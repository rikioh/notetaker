const db = require('./db.json')
const fs = require("fs")
const path = require('path')

// function to get a random number between 1/described max from line 14
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(db));

    app.post('/api/notes', (req, res) => {
        // give the note a random int between 1/100000
        let id = getRandomInt(100000);
        req.body['id'] = id
        db.push(req.body)
        // overwrite existing json file with added object
        fs.writeFile('./db/db.json', JSON.stringify(db),'utf8', () => res.json(true))
    })

    app.delete(`/api/notes/:id`, (req, res) => {
        const removeNotes = req.params.id;
        // search through each item in the array and look for their object id
        for (let i=0; i < db.length; i++){
            if (removeNotes == db[i].id) {
                // splice the note obj to remove it from the array
                db.splice(i, 1)
                // overwrite json file with new array list
                fs.writeFile('./db/db.json', JSON.stringify(db),'utf8', () => console.log('Deleted'))
                console.log("true")
                break;
            }
        }

        return res.json(false)
    })
}