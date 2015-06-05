angular.module('app.controllers').controller('CarsController',
    function($scope,CarsService,CarsViewModel) {

        $scope.vm = CarsViewModel;

        CarsService.Load();

    });
