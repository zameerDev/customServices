app.factory('factService', ['$http', '$log' , function($http, $log){
		var usersObj = {};
		usersObj.details = function(cb){
			// var s = parseInt(a) + parseInt(b);
			// cb(s);
			$http({
				url:'data.json',
				method: 'get'
			}).then(function(resp){
				$log.log(resp.data);
				cb(resp.data);
			}, function(err){

			})
		};

		return usersObj;
}]);