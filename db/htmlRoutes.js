const path = require('path');

// ROUTING

module.exports = (app) => {

// Route which sends the user first to the index url
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

// Route which sends the user to the notes url
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));

}