// Dependencies

const express = require('express');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

// require('./db/apiRoutes')(app);
require('./db/htmlRoutes')(app);

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));