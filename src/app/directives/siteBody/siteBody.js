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
            sections: ['About', 'Staff', 'Projects', 'Technologies'],
            staffData: staffData()
        });

        function staffData() {

            return [
                {
                    name: 'Mr. John Doe',
                    position: 'Mr. John Doe — the Boss of the Company',
                    photoUrl: '',
                    shortDescription: 'Boss',
                    descriptionUrl: ''
                },
                {
                    name: 'John Doe Sr.',
                    position: 'John Doe Sr. — senior developer of the Company',
                    photoUrl: '',
                    shortDescription: 'Senior developer',
                    descriptionUrl: ''
                },
                {
                    name: 'John Doe Jr.',
                    position: 'John Doe Jr. — junior developer of the Company',
                    photoUrl: '',
                    shortDescription: 'Junior developer',
                    descriptionUrl: ''
                },
                {
                    name: 'John D. Tester',
                    position: 'John D. Tester — tester of the Company',
                    photoUrl: '',
                    shortDescription: 'Tester',
                    descriptionUrl: ''
                },
                {
                    name: 'Jane Doe',
                    position: 'Jane Doe — designer of the Company',
                    photoUrl: '',
                    shortDescription: 'Designer',
                    descriptionUrl: ''
                },
                {
                    name: 'Jane Doe Second',
                    position: 'Jane Doe Second — office manager of the Company',
                    photoUrl: '',
                    shortDescription: 'Office manager',
                    descriptionUrl: ''
                }
            ]

        }

    }

})();
