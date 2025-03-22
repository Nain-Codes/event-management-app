const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/events', eventRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.render('login', { error: null }); // Pass error as null by default
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});