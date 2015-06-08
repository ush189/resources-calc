app.factory('FactoriesService', ['$http', function($http) {
    var getFactories = function() {
        return $http.get('assets/json/factories.json?cacheBuster=' + new Date().getTime());
    };

    return {
        getFactories: getFactories
    };
}]);