'use strict';

(function () {

    angular.module('webPage')
        .config(function (stateHelperProvider) {

            stateHelperProvider

                .state({
                    name: 'about',
                    url: '/about',
                    templateUrl: 'app/site/views/about.html'
                })
                .state({
                    name: 'staff',
                    url: '/staff',
                    templateUrl: 'app/site/views/staff.html',
                    controller: 'StaffController',
                    controllerAs: 'vm'
                })
                .state({
                    name: 'projects',
                    url: '/projects',
                    templateUrl: 'app/site/views/projects.html',
                    controller: 'ProjectsController',
                    controllerAs: 'vm'
                })
                .state({
                    name: 'technologies',
                    url: '/technologies',
                    templateUrl: 'app/site/views/technologies.html'
                });

        });

}());
