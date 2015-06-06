app.controller('FactoriesController', ['$scope', 'FactoriesService', 'ResourcesService', function($scope, FactoriesService, ResourcesService) {
     FactoriesService.getFactories().then(
        function(response) {
            $scope.factories = response.data;
            console.log(response.data);
        },
        function(error) {
            console.log('error', error);
        }
    );

    $scope.product = {};
    ResourcesService.getPrices().then(
        function(response) {
            _.forEach(response.data, function(item) {
                $scope.product[item.ITEM_ID] = item.NAME_DE;
            });
        },
        function(error) {
            console.log('error', error);
        }
    )
}]);