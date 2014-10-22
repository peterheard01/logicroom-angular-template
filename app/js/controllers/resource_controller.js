//http://www.sitepoint.com/creating-crud-app-minutes-angulars-resource/
angular.module('app.controllers').controller('ResourceController',
    function($scope,$resource) {

        var books =  $resource('',
            {
                //you can stuff params in here like the :id from above
            },
            {
                GET: {
                    url:'/books',
                    method: 'GET',
                    isArray: true,
                    cache: false//,
                    //transformRequest: QuoteRequestTransformer,
                    //transformResponse: QuoteResponseTransformer
                },
                PUT: {
                    url:'/books',
                    method: 'PUT',
                    isArray: false,
                    cache: false//,
                    //transformRequest: QuoteRequestTransformer,
                    //transformResponse: QuoteResponseTransformer
                },
                POST: {
                    url:'/books',
                    method: 'Post',
                    isArray: false,
                    cache: false//,
                    //transformRequest: QuoteRequestTransformer,
                    //transformResponse: QuoteResponseTransformer
                },
                DELETE: {
                    url:'/books',
                    method: 'Delete',
                    isArray: false,
                    cache: false//,
                    //transformRequest: QuoteRequestTransformer,
                    //transformResponse: QuoteResponseTransformer
                }
            });

        books.GET(function(data){

            console.log('getting books');

            angular.forEach(data,function(book){
                console.log(book);
            });
        });

        books.PUT().$promise.then(function(data){

            console.log('putting books');
            console.log(data);

        });

        books.POST(function(data){
            console.log('putting books');
            console.log(data);
        });

        books.DELETE(function(data){
            console.log('putting books');
            console.log(data);

        });

    });
