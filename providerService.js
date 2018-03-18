app.provider('provService', function(){
	this.$get = ['$http', '$log', function($http, $log){
			$log.log('provider service invoked');
			var provObj = {};
			provObj.getuserDetails = function(cb){
				$http({
					url: 'data.json',
					method: 'get'
				}).then(function(resp){
					cb(resp.data);
				}, function(err){})
			};

			return provObj;
	}]
});

app.config(['provServiceProvider', function(providerServiceProvider){

}])