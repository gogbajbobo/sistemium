(function() {
    'use strict';

    angular
        .module('webPage')
        .config(routerConfig);

    function routerConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/site/views/about.html'/*,
                controller: 'MainController',
                controllerAs: 'vm'*/
            });

        $urlRouterProvider.otherwise('/');

    }

})();
