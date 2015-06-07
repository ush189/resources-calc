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
    $scope.count = [];
    ResourcesService.getPrices().then(
        function(response) {
            _.forEach(response.data, function(item) {
                $scope.product[item.ITEM_ID] = {
                    label: item.NAME_DE,
                    price: Math.max(item.NORMKURS, item.SMKURS)
                }
            });
            $scope.count = _.range(0, _.size($scope.product), 0);
        },
        function(error) {
            console.log('error', error);
        }
    );

}]);