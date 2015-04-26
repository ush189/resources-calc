app.controller('PricesController', ['$scope', 'PricesService', function($scope, PricesService) {
    $scope.priceList = [];

    PricesService.getPrices().then(
        function(response) {
            $scope.priceList = response.data;
        },
        function(error) {
            console.log('error', error);
        }
    );
}]);