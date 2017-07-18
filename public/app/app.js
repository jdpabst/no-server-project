angular.module('app', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider){
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './app/routes/home/home.html',
            controller: 'homeCtrl'
            

        })
        .state('list', {
            url: '/list',
            templateUrl: './app/routes/list/listTmpl.html',
            controller: 'listCtrl'
        })
        .state('inspiration', {
            url: '/inspiration',
            templateUrl: './app/routes/inspiration/inspiration.html',
            controller: 'inspirationCtrl'
        
        }).state('about', {
            url: '/about',
            templateUrl: './app/routes/about/about.html',
        })

        $urlRouterProvider.otherwise('/')

})