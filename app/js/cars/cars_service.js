angular.module('app.services').service('CarsService',
    function($resource,CarsViewModel) {

        function load(){
                var vehiclesResource =  $resource('',
                {

                },
                {
                    GET: {
                        url:'/api/vehicles.json',
                        method: 'GET',
                        isArray: true,
                        cache: false
                    }
                });

            vehiclesResource.GET(function(vehicles){

                angular.forEach(vehicles,function(vehicle){

                    if(vehicle.type === 'car'){

                        var car = {};
                        car.name = vehicle.id;
                        car.spec = vehicle.engineCap;

                        CarsViewModel.Cars.push(car);
                    }


                });

            });
        }

        return{
            Load : load
        };

    });

