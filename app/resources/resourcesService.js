app.factory('ResourcesService', ['$http', function($http) {
    var getPrices = function() {
        return $http.get('mocks/kurseliste_json.txt');
    };

    return {
        getPrices: getPrices
    };
}]);