module.exports = function(app) {

    //accepting the home page
    app.get('/', function(req, res) {
        res.render('home');
    });

    //accepting the home page
    app.get('/addCourse', function(req, res) {
        res.render('addCourse');
    });

}