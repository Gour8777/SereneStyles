//imports
require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 4000;

//database connection
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('connected to database'));
//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use session middleware with secret from environment variable
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
}));

app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});

//set template
app.set('view engine', 'ejs');
app.use("", require('./routes/routes'));
app.use(express.static('public'));
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1); // Exit with failure
});

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});
