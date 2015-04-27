app.controller('ResourcesController', ['$scope', 'ResourcesService', function($scope, ResourcesService) {
    $scope.priceList = [];

    ResourcesService.getPrices().then(
        function(response) {
            $scope.priceList = response.data;
        },
        function(error) {
            console.log('error', error);
        }
    );
}]);