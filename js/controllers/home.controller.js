'use strict';

angular.module(ApplicationConfiguration.applicationModuleName).controller('HomeController', ['$scope', '$stateParams', '$document', '$timeout', '$firebaseArray',
    function($scope, $stateParams, $document, $timeout, $firebaseArray) {
        // Get the sample works
        var ref = (new Firebase("https://telavivart.firebaseio.com/works")).limitToLast(6);
        $scope.works = $firebaseArray(ref);

        $scope.$on('$stateChangeSuccess', function() {
            if ($stateParams.section && $stateParams.section !== '') {
                $document.scrollToElementAnimated(angular.element('#' + $stateParams.section));
            } else {
            	$document.scrollTopAnimated();
            }
        });
    }
]);