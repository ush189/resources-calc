app.factory('ResourcesService', ['$http', function($http) {
    var getPrices = function() {
        return $http.get('http://localhost:3000/prices');
    };

    return {
        getPrices: getPrices
    };
}]);