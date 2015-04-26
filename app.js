var app = angular.module('resourcesApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/prices', {
            templateUrl: 'views/prices.html',
            controller: 'PricesController'
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
            redirectTo: '/prices'
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});