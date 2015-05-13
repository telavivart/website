'use strict';

// Configuring the Chat module
angular.module(ApplicationConfiguration.applicationModuleName).run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', {
			title: 'About',
			state: 'home.about',
			activeState: 'about'
		});
		Menus.addMenuItem('topbar', {
			title: 'Services',
			state: 'home.services',
			activeState: 'services'
		});

		// Menus.addMenuItem('topbar', {
		// 	title: 'How It Works',
		// 	state: 'home',
		// 	params: {
		// 		section: 'howitworks'
		// 	}
		// });

		// Menus.addMenuItem('topbar', {
		// 	title: 'Samples',
		// 	state: 'home',
		// 	params: {
		// 		section: 'samples'
		// 	}
		// });

		// Menus.addMenuItem('topbar', {
		// 	title: 'Contact',
		// 	state: 'home',
		// 	params: {
		// 		section: 'contact'
		// 	}
		// });

		Menus.addMenuItem('topbar', {
			title: 'Gallery',
			state: 'gallery',
			class: 'important-link'
		});
	}
]);
