// App Controller
app.controller('appCtl', function($scope, $location) {
	$scope.startSearch = function() {
		$location.path('/');
	};
	$scope.pageClass = function(path){
	return (path == $location.path()) ? 'active' : '';
	};
});

// Home Controller
app.controller('homeCtl', function($scope, $alert, contacts) {

	$scope.contacts = contacts.get();
	$scope.delete = function(index) {
			contacts.destroy(index);
			deletionAlert.show();
	};
	var deletionAlert = $alert({
			title: 'Success!',
			content: 'The contact was deleted successfully.',
			type: 'success',
			container: '#alertContainer',
			show: false
	});
});


// Add Controller
app.controller('addCtl', function($scope, $alert, contacts) {
	$scope.submit = function() {
		contacts.create($scope.contact);
		$scope.contact = null;
		alert.show();
		};

	var alert = $alert ({
		title: 'Success!',
		content: 'The contact was added successfully.',
		type: 'success',
		container: '#alertContainer',
		show: false
	});

});

// Contact Controller

app.controller('contactCtl', function($scope, $routeParams, contacts, $timeout){
    $scope.contact = contacts.find($routeParams.id);

    $scope.$on('saved', function(){
        $timeout(function(){
            $scope.contact.$update();
        }, 0);
    });
});

