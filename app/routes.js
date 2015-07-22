var controller = require('./controllers/indeed.controller'),
          path = require('path');

module.exports = function(app) {
    app.get('/api/get', controller.getJobs);
    app.get('/api/search', controller.searchJobs);

    app.get('*', function(req, res) {
        res.sendFile('index.html', {
            root: path.join(__dirname, '../public')
        });
    });
};
