(function () {
    'use strict';

    angular
        .module('app')
        .controller('ListViewController', ListViewController);

    ListViewController.$inject = ['formBuilderService', 'DataShare'];

    function ListViewController(formBuilderService, DataShare) {

        var listViewVm = this;

        listViewVm.deleteID = [];

        listViewVm.refresh = function () {
            console.log("ListView refresh");
            init();
        }

        listViewVm.deleteDocuments = deleteDocuments;

        listViewVm.deleteIDs = (id) => {
            listViewVm.deleteID.push(id);
            console.log('inside deleteID');
        }

        listViewVm.updateDoc = (id) => {
            console.log(id);
        }

        function deleteDocuments() {
            console.log('DeleteDocuments()' + listViewVm.deleteID);
            angular.forEach(listViewVm.deleteID, function (value) {
                console.log(value);
                formBuilderService.deleteDocument(listViewVm.token, value)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            });
        }

        function init() {

            listViewVm.token = DataShare.getToken();

            formBuilderService.getDocuments(listViewVm.token)
                .then(function (response) {
                    console.log(response);
                    listViewVm.documents = response;
                })
                .catch(function (error) {
                    listViewVm.error = error.error;
                    console.log(listViewVm.error);
                })
        }
    }
})();
