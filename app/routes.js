var controller = require('./controllers/indeed.controller'),
    path = require('path');

module.exports = function(app) {

    
    app.get('/api/search/:query', controller.searchJobs);
    app.get('/api/get/:keys', controller.getJobs);

    app.get('*', function(req, res) {
        res.sendFile('index.html', {
            root: path.join(__dirname, '../public')
        });
    });
};
