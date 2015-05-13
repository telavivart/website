'use strict';

angular.module(ApplicationConfiguration.applicationModuleName).controller('HeaderController', ['$scope', '$state', '$stateParams', 'Menus',
    function($scope, $state, $stateParams, Menus) {
        // Expose view variables
        $scope.$state = $state;

        // Get the topbar menu
        $scope.menu = Menus.getMenu('topbar');

        // Toggle the menu items
        $scope.isCollapsed = false;
        $scope.toggleCollapsibleMenu = function() {
            $scope.isCollapsed = !$scope.isCollapsed;
        };

        // Collapsing the menu after navigation
        $scope.$on('$stateChangeSuccess', function() {
            $scope.isCollapsed = false;
        });
    }
]);