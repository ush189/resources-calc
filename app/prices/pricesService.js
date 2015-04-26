app.factory('PricesService', ['$http', function($http) {
    var getPrices = function() {
        return $http.get('mocks/kurseliste_json.txt').
            success(function (data) {
                console.log(data);
            }).
            error(function (err) {
                console.log(err);
            });
    };

    return {
        getPrices: getPrices
    };
}]);