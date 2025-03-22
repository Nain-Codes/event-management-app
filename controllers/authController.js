exports.login = (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        req.session.isAuthenticated = true;
        res.redirect('/events');
    } else {
        res.render('login', { error: 'Invalid username or password. Please try again.' });
    }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};