(function () {
    'use strict';

    angular
        .module('app')
        .service('formBuilderService', formBuilderService);

    formBuilderService.$inject = ['$http', '$q'];

    function formBuilderService($http, $q) {
        var self = this;

        self.getAccessToken = getAccessToken;
        self.getDocuments = getDocuments;
        self.createDocument = createDocument;
        self.deleteDocument = deleteDocument;

        function deleteDocument(token, id) {
            var params = {
                method: 'DELETE',
                url: "https://alpha-dataflownode.zerionsoftware.com/code_assignment/records/" + id,
                headers: {
                    "Authorization": "Bearer" + token
                }
            };
            return $http(params).then(successFn, errorFn);
        }

        function getAccessToken(newUser) {
            var params = {
                method: 'POST',
                url: "https://alpha-dataflownode.zerionsoftware.com/code_assignment/register",
                headers: {
                    'Content-Type': "application/json"
                },
                data: {
                    "firstName": newUser.firstName,
                    lastName: newUser.lastName,
                    username: newUser.username
                }
            };
            return $http(params).then(successFn, errorFn);
        }

        function getDocuments(token) {
            //console.log(token);
            var params = {
                method: 'GET',
                url: "https://alpha-dataflownode.zerionsoftware.com/code_assignment/records",
                headers: {
                    "Authorization": "Bearer " + token
                }
            };
            //console.log(params);
            return $http(params).then(successFn, errorFn);
        }

        function createDocument(token, newDoc) {

            console.log(newDoc);
            var params = {
                method: 'POST',
                url: "https://alpha-dataflownode.zerionsoftware.com/code_assignment/records",
                headers: {
                    "Authorization": "Bearer " + token,
                    "content-type": "application/json"
                },
                data: {
                    "name": newDoc.name,
                    "description": newDoc.description,
                    "imgs": [{
                        "url": newDoc.imgURL
                    }]
                }
            };
            return $http(params).then(successFn, errorFn);
        }

        function successFn(response) {
            //console.log(response);
            return response.data; //RESOLVE
        }

        function errorFn(response) {
            //console.log(response);
            return $q.reject(response.data); //REJECT
        }

    }
})();
