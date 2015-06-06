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
                $scope.product[item.ITEM_ID] = {
                    label: item.NAME_DE,
                    price: Math.max(item.NORMKURS, item.SMKURS)
                }
            });
        },
        function(error) {
            console.log('error', error);
        }
    )
}]);