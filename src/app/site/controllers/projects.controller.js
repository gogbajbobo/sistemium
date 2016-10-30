(function() {
    'use strict';

    angular
        .module('webPage')
        .controller('ProjectsController', projectsController);

    function projectsController() {

        var vm = this;

        _.extend(vm, {

            projectsData: projectsData()

        });

        function projectsData() {

            return [
                {
                    name: 'iSistemium',
                    imageUrl: 'images/isistemium.png',
                    shortDescription: 'iSistemium',
                    descriptionUrl: '',
                    bgColor: 'rgb(248,248,248)'
                },
                {
                    name: 'Debtee',
                    imageUrl: 'images/debtee.png',
                    shortDescription: 'Debtee',
                    descriptionUrl: '',
                    bgColor: 'rgb(70,145,206)'
                },
                {
                    name: 'Vseramki',
                    imageUrl: 'images/vseramki.png',
                    shortDescription: 'Vseramki',
                    descriptionUrl: '',
                    bgColor: 'rgb(242,244,246)'
                },
                {
                    name: 'Kirtis',
                    imageUrl: 'images/kirtis.png',
                    shortDescription: 'Kirtis',
                    descriptionUrl: '',
                    bgColor: 'rgb(64,85,179)'
                }
            ];

        }

    }

})();
