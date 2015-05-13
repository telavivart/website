'use strict';

// Setting up route
angular.module(ApplicationConfiguration.applicationModuleName).config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('gallery', {
			url: '/gallery',
			templateUrl: 'views/gallery.view.html'
		}).
		state('home', {
			url: '/:section',
			templateUrl: 'views/home.view.html'
		}).
		state('home.about', {
			url: '/about'
		});
	}
]);