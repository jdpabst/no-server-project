angular.module('app').service('inspirationService', function($http){
    
    this.getPics = function(){
        return $http({
            method: 'GET',
            url: "https://api.unsplash.com/photos/curated?client_id=f857da4f8c32145c72b0031898d5348d3663b69dd29e2d08339d7cde4707ce2a",
        })
    }

})




// 035ba13eaf95fedf5e7b0ccb7eae865ff1470019bac6d95e3ff3d65781593f23

// 11d016f5127852e024602ce1c0e6794e0961c6f2d7e8a53897f2a373f1df6c01