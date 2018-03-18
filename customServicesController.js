app.controller('CustomServicesController', ['$scope', 'factService', 'srvcService', 'provService',function($scope, factService, srvcService, provService){

	$scope.getData = function(){
		factService.details(function(res){
			$scope.users = res;
		});
	};

	$scope.getDataFrmServc = function(){
		srvcService.fetchDetails(function(result){
			$scope.usersfrmsrvc = result;
		});
	};

	$scope.getDataFrmProv = function(){
		provService.getuserDetails(function(reslt){
			$scope.usersDetails = reslt;
		});
	}
}]);