(function () {
    'use strict';

    angular
        .module('app', ['ngRoute'])
        .config(moduleConfig)
        .run(moduleRun);

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig($routeProvider) {
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
    }

    moduleRun.$inject = [];

    function moduleRun() {
        console.log("app started");
    }
})();
