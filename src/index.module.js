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

})();
