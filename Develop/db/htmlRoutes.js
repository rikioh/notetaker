const path = require('path');

// ROUTING

module.exports = (app) => {

// Basic route that sends the user first to the index Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

// Basic route that sends the user first to the notes Page
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));

// // If no matching route is found default to home
// app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

}