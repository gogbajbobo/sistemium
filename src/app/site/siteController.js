'use strict';

(function () {

    function siteController() {

        var vm = this;

        _.extend(vm, {
            cls: 'siteBody'
        });

    }

    angular.module('webPage')
        .controller('SiteController', siteController);

})();
