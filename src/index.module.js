(function () {
    'use strict';

    angular
        .module('webPage', [
            'ui.router',
            'ui.router.stateHelper',
            'sistemiumBootstrap',
            'gettext'
        ])
        //.run(($rootScope, $timeout, $window) => {
        //
        //    $rootScope.$on('$stateChangeSuccess', ()=> {
        //        $timeout(() => {
        //            $window.componentHandler.upgradeAllRegistered();
        //        })
        //    });
        //
        //    $rootScope.$on('$viewContentLoading', () => {
        //        $timeout(() => {
        //            $window.componentHandler.upgradeAllRegistered();
        //        })
        //    });
        //
        //    $rootScope.$on('$viewContentLoaded', () => {
        //        $timeout(() => {
        //            $window.componentHandler.upgradeAllRegistered();
        //        })
        //    });
        //
        //})
    ;

})();
