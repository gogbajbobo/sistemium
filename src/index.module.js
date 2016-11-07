(function () {
    'use strict';

    angular
        .module('webPage', [
            'ui.router',
            'ui.router.stateHelper',
            'sistemiumBootstrap',
            'gettext',
            'ngStorage'
        ])
        .run(function (gettextCatalog, $localStorage) {

            gettextCatalog.debug = true;

            var lang = $localStorage.currentLanguage || 'en';
            gettextCatalog.setCurrentLanguage(lang);

        });

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
    //;

})();
