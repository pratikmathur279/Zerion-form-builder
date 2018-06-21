(function () {
    'use strict';

    angular
        .module('app')
        .controller('TileViewController', TileViewController);

    TileViewController.$inject = ['formBuilderService', 'DataShare'];

    function TileViewController(formBuilderService, DataShare) {
        var tileViewVm = this;

        tileViewVm.refresh = function () {
            console.log("refresh");
            init();
        }

        function init() {
            tileViewVm.token = DataShare.getToken();

            formBuilderService.getDocuments(tileViewVm.token)
                .then(function (response) {
                    console.log(response);
                    tileViewVm.documents = response;
                })
                .catch(function (error) {
                    tileViewVm.error = "Access Token required!";
                    console.log(tileViewVm.error);
                })
        }

    }
})();
