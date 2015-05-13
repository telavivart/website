'use strict';

// Configuring the Chat module
angular.module(ApplicationConfiguration.applicationModuleName).run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', {
			title: 'About',
			state: 'home',
			activeState: 'about',
			params: {
				section: 'about'
			}
		});
		Menus.addMenuItem('topbar', {
			title: 'Services',
			state: 'home',
			activeState: 'services',
			params: {
				section: 'services'
			}
		});

		Menus.addMenuItem('topbar', {
			title: 'Samples',
			state: 'home',
			activeState: 'samples',
			params: {
				section: 'samples'
			}
		});

		Menus.addMenuItem('topbar', {
			title: 'Contact',
			state: 'home',
			activeState: 'contact',
			params: {
				section: 'contact'
			}
		});

		Menus.addMenuItem('topbar', {
			title: 'Gallery',
			state: 'gallery',
			class: 'important-link'
		});
	}
]);
