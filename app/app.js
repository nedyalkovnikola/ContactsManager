var app = angular.module('contactsMgr', ['ngRoute']);

app.config(function($routeProvider){
	
	$routeProvider

	.when('/', {
		controller:'indexCtl',
		templateUrl:'assets/partials/index.html'
	})

	.when('/add-contact', {
		controller: 'addCtl',
		templateUrl: 'assets/partials/add.html'
	})

	.when('/contact', {
		controller: 'contactCtl',
		templateUrl: 'assets/partials/contact.html'
	})

	.when('contact/:id', {
		controller: 'contactCtl',
		templateUrl: 'assets/partials/contact.html'
	})

	.otherwise({
		redirectTo: '/'
	});


});
