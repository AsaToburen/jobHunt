//exposing library to work with indeed api
var api = require('indeed-api').getInstance(2731093791160532);

module.exports.searchJobs = function(req, res) {
    var userInput = JSON.parse(req.params.query);
    var userKeywords = userInput.keywords.split(" ");

    api.JobSearch()
        .Radius(20)
        .WhereLocation({
            city: userInput.city,
            state: userInput.state
        })
        .Limit(90)
        .WhereKeywords(userKeywords)
        .SortBy("date")
        .UserIP("1.2.3.4")
        .UserAgent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36")
        .Search(
            function(results) {
                // do something with the success results 
                res.json(results);
                console.log(results);
            },
            function(error) {
                // do something with the error results 
                console.log(error);
            });

};

module.exports.getJobs = function(req, res) {

    var jobkeys = [req.params.keys];

    api.GetJob().WhereJobKeys(jobkeys).Retrieve(
        function(results) {
            // do something with the success results 
            res.json(results);
            console.log(results);
        },
        function(error) {
            // do something with the error results 
            console.log(error);
        });

};
