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

    function navbarController($state) {

        var vm = this;

        _.assign(vm, {

            title: 'Sistemium',
            currentLang: 'RU',
            langs: ['LT', 'RU', 'EN'],
            sections: ['About', 'Staff', 'Projects', 'Technologies'],

            selectSection

        });

        function selectSection(section) {
            $state.go(_.lowerCase(section));
        }

    }

})();
