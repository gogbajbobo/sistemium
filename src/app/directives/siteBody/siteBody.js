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
            staffData: staffData(),
            projectsData: projectsData()
        });

        function staffData() {

            return [
                {
                    name: 'Mr. John Doe',
                    position: 'Mr. John Doe — the Boss of the Company',
                    photoUrl: 'images/boss.png',
                    buttonName: 'sentiment_neutral',
                    shortDescription: 'Boss',
                    descriptionUrl: ''
                },
                {
                    name: 'John Doe Sr.',
                    position: 'John Doe Sr. — senior developer of the Company',
                    photoUrl: 'images/srDev.png',
                    buttonName: 'person',
                    shortDescription: 'Senior developer',
                    descriptionUrl: ''
                },
                {
                    name: 'John Doe Jr.',
                    position: 'John Doe Jr. — junior developer of the Company',
                    photoUrl: 'images/jrDev.png',
                    buttonName: 'perm_identity',
                    shortDescription: 'Junior developer',
                    descriptionUrl: ''
                },
                {
                    name: 'John D. Tester',
                    position: 'John D. Tester — tester of the Company',
                    photoUrl: 'images/tester.png',
                    buttonName: 'sentiment_dissatisfied',
                    shortDescription: 'Tester',
                    descriptionUrl: ''
                },
                {
                    name: 'Jane Doe',
                    position: 'Jane Doe — designer of the Company',
                    photoUrl: 'images/designer.png',
                    buttonName: 'mood',
                    shortDescription: 'Designer',
                    descriptionUrl: ''
                },
                {
                    name: 'Jane Doe Second',
                    position: 'Jane Doe Second — office manager of the Company',
                    photoUrl: 'images/office.png',
                    buttonName: 'sentiment_satisfied',
                    shortDescription: 'Office manager',
                    descriptionUrl: ''
                }
            ];

        }

        function projectsData() {

            return [
                {
                    name: 'iSistemium',
                    imageUrl: 'images/boss.png',
                    shortDescription: 'iSistemium',
                    descriptionUrl: ''
                },
                {
                    name: 'Debtee',
                    imageUrl: 'images/boss.png',
                    shortDescription: 'Debtee',
                    descriptionUrl: ''
                },
                {
                    name: 'Vseramki',
                    imageUrl: 'images/boss.png',
                    shortDescription: 'Vseramki',
                    descriptionUrl: ''
                },
                {
                    name: 'Kirtis',
                    imageUrl: 'images/boss.png',
                    shortDescription: 'Kirtis',
                    descriptionUrl: ''
                }
            ];

        }

    }

})();
