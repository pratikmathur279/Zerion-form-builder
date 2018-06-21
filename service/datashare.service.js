(function () {
    'use strict';

    angular
        .module('app')
        .service('DataShare', DataShare);

    function DataShare() {
        var self = this;

        var accessToken;

        self.setToken = setToken;
        self.getToken = getToken;

        function setToken(accessToken) {
            // console.log("inside setToken")
            self.accessToken = accessToken;
            //console.log(self.accessToken);
        }

        function getToken() {
            //console.log("GetToken");
            return self.accessToken;
        }
    }
})();
