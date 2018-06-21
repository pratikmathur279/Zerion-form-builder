(function () {
    'use strict';

    angular
        .module('app')
        .controller('NewDocumentController', NewDocumentController);

    NewDocumentController.$inject = ['formBuilderService', 'DataShare'];

    function NewDocumentController(formBuilderService, DataShare) {
        var newDocumentVm = this;
        var count = 1;
        init();

        newDocumentVm.createDocument = createDocument;

        function createDocument() {
            newDocumentVm.token = DataShare.getToken();

            newDocumentVm.newDoc.id = count;
            formBuilderService.createDocument(newDocumentVm.token, newDocumentVm.newDoc)
                .then(function (response) {
                    console.log(response);
                    count++;
                    console.log("Count after creating : " + count);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

        function init() {
            newDocumentVm.token = DataShare.getToken();
        }
    }
})();
