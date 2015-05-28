app.controller('FactoriesController', ['$scope', 'FactoriesService', function($scope, FactoriesService) {
     FactoriesService.getFactories().then(
        function(response) {
            $scope.factories = response.data;
            console.log(response.data);

        },
        function(error) {

        }
    );
}]);