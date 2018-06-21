(function () {
    'use strict';

    angular
        .module('app', ['ngRoute'])
        .config(moduleConfig)
        .run(moduleRun);

    moduleConfig.$inject = ['$routeProvider', '$httpProvider'];

    function moduleConfig($routeProvider, $httpProvider) {
        $routeProvider
            .when('/tile-view', {
                templateUrl: 'views/tileview.tmpl.html',
                controller: 'TileViewController',
                controllerAs: 'tileViewVm'
            })
            .when('/list-view', {
                templateUrl: 'views/listview.tmpl.html',
                controller: 'ListViewController',
                controllerAs: 'listViewVm'
            })
            .when('/new-document', {
                templateUrl: 'views/newdocument.tmpl.html',
                controller: 'NewDocumentController',
                controllerAs: 'newDocumentVm'
            })
            .otherwise({
                redirectTo: '/tile-view'
            });

/*        $httpProvider.interceptors.push(function () {
            return {
                request: function (config) {
                    console.log('request started...');
                },
                requestError: function (rejection) {
                    console.log(rejection);
                    // Contains the data about the error on the request and return the promise rejection.    
                    return $q.reject(rejection);
                },
                response: function (result) {
                    console.log('data for ' + result.data.name + ' received');
                    //If some manipulation of result is required before assigning to scope.    
                    result["testKey"] = 'testValue';
                    console.log('request completed');
                    return result;
                },
                responseError: function (response) {
                    console.log('response error started...');
                    //Check different response status and do the necessary actions 400, 401, 403,401, or 500 eror     
                    return $q.reject(response);
                }
            }
        });*/
    }

    moduleRun.$inject = [];

    function moduleRun() {
        console.log("app started");
    }
})();
