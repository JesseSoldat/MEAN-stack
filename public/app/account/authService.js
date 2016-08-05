angular.module('app').service('AuthService', function($http){
	return {
		authenticateUser: function(username, password) {
			$http.post('/login', {username:username}).then(function(res){
				
			})
		}
	}
})