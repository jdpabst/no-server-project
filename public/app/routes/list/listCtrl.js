angular.module('app').controller('listCtrl', function($scope){

$scope.items= [];

$scope.addToList = function(listItem){
    if(listItem){
        $scope.items.push(listItem);
    $scope.listItem = '';
    }

}
$scope.show = false;
$scope.menu = function(){
    $scope.show = !$scope.show;
}




})