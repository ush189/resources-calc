var app = angular.module('resourcesApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/mines.html'
        })
        .when('/factories', {
            templateUrl: 'views/factories.html'
        })
        .when('/recycling', {
            templateUrl: 'views/recycling.html'
        });
});