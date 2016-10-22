(function() {
    'use strict';

    angular
        .module('webPage')
        .directive('sitebody', sitebody)
        .controller('sitebodyController', sitebodyController);

    function sitebody() {
        return {

            restrict: 'E',
            templateUrl: 'app/directives/sitebody/sitebody.html',
            scope: {
            },
            controller: 'sitebodyController',
            controllerAs: 'vm',
            bindToController: true,
            replace: true

        };
    }

    function sitebodyController() {

        var vm = this;

        _.extend(vm, {
            title: 'Sistemium',
            currentLang: 'RU',
            langs: ['LT', 'RU', 'EN'],
            sections: ['About', 'Staff', 'Projects', 'Technologies']
        });

    }

})();
