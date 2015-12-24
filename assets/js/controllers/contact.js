 angular.module('contactsMgr').controller('contactCtrl',[
	'$scope','$routeParams','$contacts',
	function ($scope, $routeParams, $contacts) {
		$scope.contact=$contacts.find($routeParams.id);
}]);