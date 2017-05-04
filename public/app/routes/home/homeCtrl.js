angular.module('app').controller('homeCtrl', function($scope, homeService){

    $scope.getQuote = function(){
        homeService.getQuote().then(function(response){
            console.log(response)
            $scope.quotes = response.data.contents.quotes;
            
        })
    }

$scope.getQuote();

$scope.date = new Date();

})