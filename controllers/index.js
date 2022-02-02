/**
 * File: index.js a file that contains all the functions for index router
 * Student's name: Juan Manuel Muñoz
 * StudentID: 301224804
 * 2/2/2022
 */

exports.home = function (req, res, next) {
    res.render('index', { title: 'My portfolio' });
}

exports.handleForm = function (req, res, next) {
    res.render('index', { title: 'My portfolio' });
    console.log(req.body.fname) // input information.
}

exports.aboutme = function (req, res, next) {
    res.render('aboutMe', { title: 'About Me' });
}

exports.downloadcv = function (req, res, next) {
    res.download('public/downloads/CV-JuanMMuñozR.pdf');
}

exports.projects = function (req, res, next) {
    res.render('projects', { title: 'My Projects' });
}

exports.services = function (req, res, next) {
    res.render('services', { title: 'My Services' });
}