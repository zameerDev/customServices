app.service('srvcService', ['$http', '$log', function($http, $log){
	this.fetchDetails = function(cb){
		$http({
			url: 'data.json',
			mathod: 'get'
		}).then(function(resp){
			cb(resp.data);
		}, function(err){})
	}
}]);