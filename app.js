var app = angular.module('resourcesApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/resources', {
            templateUrl: 'views/resources.html',
            controller: 'ResourcesController'
        })
        .when('/mines', {
            templateUrl: 'views/mines.html'
        })
        .when('/factories', {
            templateUrl: 'views/factories.html'
        })
        .when('/recycling', {
            templateUrl: 'views/recycling.html'
        })
        .otherwise({
            redirectTo: '/resources'
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});