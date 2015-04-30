app.factory('ResourcesService', ['$http', function($http) {
    var getPrices = function() {
        // TODO get real data per node.js
        return $http.get('mocks/kurseliste_json.txt');
    };

    return {
        getPrices: getPrices
    };
}]);