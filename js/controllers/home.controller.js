'use strict';

angular.module(ApplicationConfiguration.applicationModuleName).controller('HomeController', ['$scope', '$location', '$uiViewScroll', '$firebaseArray',
    function($scope, $location, $uiViewScroll, $firebaseArray) {
        // Get the sample works
        var ref = (new Firebase("https://telavivart.firebaseio.com/works")).limitToLast(6);
        $scope.works = $firebaseArray(ref);
    }
]);