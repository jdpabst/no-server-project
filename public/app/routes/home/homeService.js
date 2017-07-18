angular.module('app').service('homeService', function($http){

    this.getQuote = function(){
        
        return $http({
            method: 'GET',
            url: "https://quotes.rest/qod.json"
        });
    };

   
})