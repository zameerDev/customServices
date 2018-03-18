app.controller('CustomServicesController', ['$scope', 'factService', function($scope, factService){
	$scope.firstNum = 10;
	$scope.secondNum = 20;

	$scope.addNumbers = function(){
		factService.addNumbers($scope.firstNum, $scope.secondNum, function(res){
			$scope.users = res;
		});
	}
}]);