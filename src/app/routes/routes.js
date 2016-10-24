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
                });

        });

}());
