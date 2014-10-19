var app;

app = angular.module('app', ['ngRoute', 'ngResource','app.services','app.controllers','app.directives','app.filters','app.templates']).config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);


    $routeProvider.when('/bootstrap', {
        templateUrl: 'bootstrap.html'
    });

    $routeProvider.otherwise({ redirectTo: '/' });

});

angular.module('app.services', ['ngResource']);
angular.module('app.controllers', []);
angular.module('app.directives', []);
angular.module('app.filters', []);
angular.module('app.templates', []);


