(function() {
    'use strict';

    angular
        .module('webPage')
        .directive('navbar', navbar)
        .controller('navbarController', navbarController);

    function navbar() {
        return {

            restrict: 'E',
            templateUrl: 'app/directives/navbar/navbar.html',
            scope: {
            },
            controller: 'navbarController',
            controllerAs: 'vm',
            bindToController: true

        };
    }

    function navbarController() {

        var vm = this;

        _.extend(vm, {

        });

    }

})();
