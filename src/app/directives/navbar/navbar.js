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

    function navbarController($state, gettextCatalog, $localStorage, $timeout) {

        var vm = this;

        _.assign(vm, {

            title: 'Sistemium',
            langs: ['lt', 'ru', 'en'],
            sections: ['About', 'Staff', 'Projects', 'Technologies'],

            currentLang,
            setCurrentLang,
            selectSectionInHeader,
            selectSectionInDrawer

        });

        function currentLang() {

            var lang = $localStorage.currentLanguage || 'en';
            gettextCatalog.setCurrentLanguage(lang);

            return lang;

        }

        function setCurrentLang(lang) {

            $timeout(() => {

                if (vm.langs.indexOf(lang) != -1) {

                    $localStorage.currentLanguage = lang;
                    gettextCatalog.setCurrentLanguage(lang);

                }

            });

        }

        function selectSectionInHeader(section) {
            selectSection(section);
        }

        function selectSectionInDrawer(section) {

            var navbar = document.querySelector('.stm-navbar');
            navbar.MaterialLayout.toggleDrawer();

            selectSection(section);

        }

        function selectSection(section) {
            $state.go(_.lowerCase(section));
        }

    }

})();
