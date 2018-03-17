app.controller('CustomServicesController', ['$scope', 'calcService', function($scope, calcService){
	$scope.firstNum = 10;
	$scope.secondNum = 20;

	$scope.addNumbers = function(){
		$scope.sum = calcService.addNumbers($scope.firstNum, $scope.secondNum);
	}
}]);