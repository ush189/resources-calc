app.factory('PricesService', ['$http', function($http) {
    var getPrices = function() {
        return $http.get('mocks/kurseliste_json.txt');
    };

    return {
        getPrices: getPrices
    };
}]);