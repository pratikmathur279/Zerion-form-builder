/*
(function () {
        'use strict';*/
    angular
        .module('app')
        .controller('AccessTokenController', AccessTokenController);

    AccessTokenController.$inject = ['formBuilderService', 'DataShare'];

    function AccessTokenController(formBuilderService, DataShare) {

        var accessTokenVm = this;

        accessTokenVm.myVar = false;

        accessTokenVm.toggle = function () {
            //console.log("toggle");
            accessTokenVm.myVar = !accessTokenVm.myVar;
        };


        init();

        accessTokenVm.getAccessToken = getAccessToken;
        //accessTokenVm.setToken = DataShare.setToken;

        function getAccessToken() {
            formBuilderService.getAccessToken(accessTokenVm.newUser)
                .then(function (data) {
                    //console.log(data);
                    accessTokenVm.accessToken = data.accessToken;
                    DataShare.setToken(accessTokenVm.accessToken);

                })
                .catch(function (error) {
                    accessTokenVm.error = error.error;
                    console.log(accessTokenVm.error);
                })
        }


        function init() {

        }
    }
/*
})();*/
