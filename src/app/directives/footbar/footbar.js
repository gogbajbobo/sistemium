(function() {
    'use strict';

    angular
        .module('webPage')
        .directive('footbar', footbar)
        .controller('footbarController', footbarController);

    function footbar() {
        return {

            restrict: 'E',
            templateUrl: 'app/directives/footbar/footbar.html',
            scope: {
            },
            controller: 'footerController',
            controllerAs: 'vm',
            bindToController: true

        };
    }

    function footbarController() {

    }

})();
