angular.module('app').controller('inspirationCtrl', function($scope, inspirationService){



    $scope.getPics = function(){
        inspirationService.getPics().then(function(response){
            console.log(response);
            $scope.pictures = response.data;
        })
    }

    $scope.getPics();

    $scope.show= false;
    $scope.menu = function(){
        $scope.show = !$scope.show;
    }
    
})