(function () {
    'use strict';

    angular
        .module('webPage', [
            'ui.router',
            'ui.router.stateHelper',
            'sistemiumBootstrap'
        ])/*
        .run(($rootScope, $timeout) => {

            $rootScope.$on('$viewContentLoaded', ()=> {
                $timeout(() => {
                    componentHandler.upgradeAllRegistered();
                })
            })

        })*/;

})();
