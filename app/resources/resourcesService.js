app.factory('ResourcesService', ['$http', function($http) {
    var getPrices = function() {
        // TODO caching
        return $http.get('https://resources-fetch.herokuapp.com/prices');
    };

    return {
        getPrices: getPrices
    };
}]);