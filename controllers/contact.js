exports.contact = function (req, res, next) {
    res.render('contact', {
        title: 'Contact me', userName: req.user ? req.user.username : ''
    });
}