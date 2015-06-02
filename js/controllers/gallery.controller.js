'use strict';

angular.module(ApplicationConfiguration.applicationModuleName).controller('GalleryController', ['$scope', '$stateParams', '$document', '$timeout', '$firebaseArray',
    function($scope, $stateParams, $document, $timeout, $firebaseArray) {
        // // Get the sample works
        var ref = (new Firebase("https://telavivart.firebaseio.com/works"));
        $scope.works = $firebaseArray(ref);

        $scope.styles = [{
        	title: 'Renaissance'
        }, {
        	title: 'Post Impressionism'
        }];
        $scope.sizes = [{
            title: 'Small',
            minimum: 300,
            maximum: 400
        }, {
            title: 'Medium',
            minimum: 300,
            maximum: 400
        }, {
            title: 'Big',
            minimum: 300,
            maximum: 400
        }];
        $scope.techniques = [{
        	title: 'Oil on Canvas'
        }];
        $scope.prices = [{
            title: 'Below $1000',
            maximum: 1000,
            minimum: 0
        }, {
            title: '$1000-$5000',
            maximum: 1000,
            minimum: 0
        }, {
            title: '$5000-$10000',
            maximum: 1000,
            minimum: 0
        }, {
            title: '$10000-$25000',
            maximum: 1000,
            minimum: 0
        }, {
            title: 'Above $25000',
            maximum: 1000,
            minimum: 0
        }];
    }
]);