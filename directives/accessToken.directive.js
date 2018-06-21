(function () {
    'use strict';

    angular.module('app')
        .directive('accessToken', accessToken);

    function accessToken() {

        var directive = {};

        directive.restrict = 'E';

        directive.compile = function (element, attributes) {
            element.css("background-color", "#C96969");
            element.css("padding", "10px")
            /*var linkFunction = function ($scope, element, attributes) {
    console.log("link");
}
return linkFunction;*/
        }
        return directive;
    }
})();
