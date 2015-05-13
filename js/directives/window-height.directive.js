'use strict';

angular.module(ApplicationConfiguration.applicationModuleName).directive('windowHeight', function() {
    return function(scope, element, attrs) {
        element.height($(window).height());

        angular.element(window).bind('resize', function() {
            element.height($(window).height());
        })
    }
});