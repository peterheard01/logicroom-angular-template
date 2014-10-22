angular.module('app.services').service('HomeService',
    function() {

        function sayHello(){
            console.log('hello');
        }

        return{
            SayHello : sayHello
        };

    });
