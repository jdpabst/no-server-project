angular.module('app').service('homeService', function($http){

    this.getQuote = function(){
        
        return $http({
            method: 'GET',
            url: "http://quotes.rest/qod.json"
        });
    };

   
})