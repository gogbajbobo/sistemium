(function() {
    'use strict';

    angular
        .module('webPage')
        .config(routerConfig);

    function routerConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state({
                name: 'home',
                url: '/',
                templateUrl: 'app/site/views/about.html'
            });

        $urlRouterProvider.otherwise('/');

    }

})();
