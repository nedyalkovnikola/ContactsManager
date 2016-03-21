var app = angular.module('contactsMgr', ['ngRoute', 'ngSanitize', 'mgcrea.ngStrap']);

// Routes
app.config(function($routeProvider){
	
	$routeProvider

	.when('/', {
		controller:'homeCtl',
		templateUrl:'assets/partials/home.html'
	})

	.when('/add-contact', {
		controller: 'addCtl',
		templateUrl: 'assets/partials/add.html'
	})

	.when('/contact/:id', {
		controller: 'contactCtl',
		templateUrl: 'assets/partials/contact.html'
	})

	.otherwise({
		redirectTo: '/'
	});

});


// Contacts Services
app.factory('contacts', function () {
	var contacts = [
		{
			name: 'Stephen Radford',
			phone: '0123456789',
			address: '123, Some Street\nLeicester\nLE1 2AB',
			email: 'stephen@email.com',
			website: 'stephenradford.me',
			notes: ''
		},
		{
			name: 'Declan Proud',
			phone: '91234859',
			address: '234, Some Street\nLeicester\nLE1 2AB',
			email: 'declan@declan.com',
			website: 'declanproud.me',
			notes: 'Some notes about the contact.'
		}

	];

	return {
		get: function() {
			return contacts;
		},
		find: function(index) {
			return contacts[index];
		},
		create: function(contact) {
			contacts.push(contact);
		},
		destroy: function(index) {
			contacts.splice(index, 1);
		}
	};
})


// Paragraph filter for line-endings
app.filter ('paragraph', function() {
	return function(input){
		return (input) ? input.replace(/\n/g, '<br />') : input;
	};
})

// Edit contact directive
app.directive('editable', function(){
	return {
		restrict: 'AE',
		templateUrl: 'assets/partials/editable.html',
		scope: {
			value: '=editable',
			field: '@fieldType'
		},
		controller: function($scope) {
			$scope.field = ($scope.field) ? $scope.field : 'text';

			$scope.editor = {
				showing: false,
				value: $scope.value
			};

			$scope.toggleEditor = function(){
				$scope.editor.showing = !$scope.editor.showing;
				$scope.editor.value = $scope.value;
			};

			$scope.save = function(){
				$scope.value = $scope.editor.value;
				$scope.toggleEditor();
			};
		}
	};
})
