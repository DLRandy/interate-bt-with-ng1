angular.module('contactsMgr').controller('addCtrl',[
	'$scope','$contacts','$alert', function ($scope,$contacts, $alert) {
		var alerts ={
			success:  $alert({
				title: 'success!',
				content: 'The contact was added successfully.',
				type: 'success',
				container:'#alertContainer',
				show: false
			}),
			error: $alert({
				title: 'Error!',
          		content: 'There are some validation errors.',
          		type: 'danger',
            	container: '#alertContainer',
            	show: false	
			})
		};
		$scope.submit = function () {
			$scope.formErrors = false;
			if (!$scope.addForm.$valid) {
				$scope.formErrors = true;
				alerts.success.show=false;
				return alerts.error.show();
			};
			$contacts.create($scope.contact);
				$scope.contact = null;
				$scope.added = true;
				alerts.error.show=false;
				alerts.success.show();
			};
	}]);