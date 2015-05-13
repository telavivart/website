'use strict';

angular.module(ApplicationConfiguration.applicationModuleName).controller('HeaderController', ['$scope', '$state', '$location', '$uiViewScroll', '$stateParams', 'Menus',
    function($scope, $state, $location, $uiViewScroll, $stateParams, Menus) {
        // Expose view variables
        $scope.$state = $state;

        // Get the topbar menu
        $scope.menu = Menus.getMenu('topbar');

        // Toggle the menu items
        $scope.isCollapsed = false;
        $scope.toggleCollapsibleMenu = function() {
            $scope.isCollapsed = !$scope.isCollapsed;
        };

        $scope.scrollTo = function(id) {
            $uiViewScroll(angular.element(id));
        }

        // Collapsing the menu after navigation
        $scope.$on('$stateChangeSuccess', function() {
            $scope.isCollapsed = false;
            $location.hash();
            $uiViewScroll($stateParams.section);
        });
    }
]);