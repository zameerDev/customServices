app.factory('calcService', ['$http', '$log' , function($http, $log){
		$log.log("Service invoked");
		var sumObj = {};
		sumObj.addNumbers = function(a, b){
			return parseInt(a) + parseInt(b) ;
		};

		return sumObj;
}]);