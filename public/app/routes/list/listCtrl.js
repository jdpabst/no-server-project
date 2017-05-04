angular.module('app').controller('listCtrl', function($scope){

$scope.items= [];

$scope.addToList = function(listItem){
    $scope.items.push(listItem);
    $scope.listItem = '';

}




})