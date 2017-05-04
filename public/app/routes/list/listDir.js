angular.module('app').directive('listDir', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attributes){
            element.on('click', function(){
                element.toggleClass('list_items')
            })
        },
    }
})