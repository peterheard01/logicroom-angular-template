angular.module('app.services').service('CarCaller',
    function($resource) {


        function call(cb){

            var vehiclesResource =  $resource('',
                {}, { GET: {url:'/api/vehicles.json', method: 'GET', isArray: true, cache: false}});

            vehiclesResource.GET(function(vehicles){

                cb(vehicles);

            });


        }


        return {
            Call : call
        };

});