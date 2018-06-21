(function () {
    'use strict';
    angular
        .module('app')
        .controller('AccessTokenController', AccessTokenController);

    AccessTokenController.$inject = ['formBuilderService', 'DataShare'];

    function AccessTokenController(formBuilderService, DataShare) {

        var accessTokenVm = this;
        accessTokenVm.visibility = false;

        accessTokenVm.myVar = false;

        accessTokenVm.toggle = function () {
            accessTokenVm.myVar = !accessTokenVm.myVar;
        };


        accessTokenVm.getAccessToken = getAccessToken;
        //accessTokenVm.setToken = DataShare.setToken;

        function getAccessToken() {
            accessTokenVm.error = false;
            accessTokenVm.visibility = false;
            formBuilderService.getAccessToken(accessTokenVm.newUser)
                .then(function (data) {
                    //console.log(data);
                    accessTokenVm.accessToken = data.accessToken;
                    DataShare.setToken(accessTokenVm.accessToken);
                    accessTokenVm.visibility = !accessTokenVm.visibility;

                })
                .catch(function (error) {
                    accessTokenVm.error = error.error;
                    console.log(accessTokenVm.error);
                })
        }


    }
})();
