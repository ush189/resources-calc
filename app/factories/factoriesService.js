app.factory('FactoriesService', ['$http', function($http) {
    var getFactories = function() {
        return $http.get('assets/json/factories.json');
    };

    return {
        getFactories: getFactories
    };
}]);