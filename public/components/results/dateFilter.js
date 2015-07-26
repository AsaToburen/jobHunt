angular.module('jobHunt').filter('dateformat', function($filter)
{
    return function(input)
    {
        if(input == null){ return ""; }
        var _date = $filter('date')(new Date(input), 'mediumDate');
        return _date;
    };
});