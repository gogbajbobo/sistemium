'use strict';

(function () {

    angular.module('webPage')
        .config(function (stateHelperProvider) {

            stateHelperProvider

                .state({
                    name: 'about',
                    url: '/about',
                    templateUrl: 'app/site/views/about.html'/*,
                    controller: 'AboutController',
                    controllerAs: 'vm'*/
                })
                .state({
                    name: 'staff',
                    url: '/staff',
                    templateUrl: 'app/site/views/staff.html',
                    controller: 'StaffController',
                    controllerAs: 'vm'
                });

        });

}());
