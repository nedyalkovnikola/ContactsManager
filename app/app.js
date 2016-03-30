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
			name: 'Anders Holdvad',
			phone: '21223132',
			address: 'Randersvej 91\nHobro \n9500',
			email: 'anders@email.com',
			website: 'andersholdvad.me',
			notes: ''
		},
		{
			name: 'Jeppe Højbjerg',
			phone: '91234859',
			address: 'Gl. Vardevej 14\nEsbjerg \n6700',
			email: 'jeppe@email.com',
			website: 'jeppehojbjerg.me',
			notes: 'Some notes about the contact.'
		},
		{
			name: 'Patrick Banggaard',
			phone: '33444199',
			address: 'Kaj Zartows Vej 3\nHerning \n7400',
			email: 'patrick@email.com',
			website: 'patrickbanggaard.me',
			notes: 'Some notes about the contact.'
		},
		{
			name: 'Søren Reese',
			phone: '29934771',
			address: 'Tingvej 15\nViborg \n8800',
			email: 'soren@email.com',
			website: 'sorenreese.me',
			notes: 'Some notes about the contact.'
		},
		{
			name: 'Lasse Petry',
			phone: '13441780',
			address: 'Bygmarken 10\nFarum \n3520',
			email: 'lasse@email.com',
			website: 'lassepetry.me',
			notes: 'Some notes about the contact.'
		},
		{
			name: 'Casper Olesen',
			phone: '91880063',
			address: 'Norgesvej 17\nHaderslev \n6100',
			email: 'casper@email.com',
			website: 'casperolesen.me',
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
		controller: function($scope, $alert) {
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
