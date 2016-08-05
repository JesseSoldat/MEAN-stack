angular.module('app').controller('NavBarLoginCtrl', function($scope, $http){

	// if (window.jQuery) {  
 //    // jQuery is loaded  
 //    console.log(jQuery);
	// } 	else {
 //    // jQuery is not loaded
 //    console.log('no jQuery');

	// }

	$scope.signin = function(username, password) {

			$http({
				  method: 'POST',
				  url: '/login',
				  data: { userName: username, password: password }
				}).then(function successCallback(response) {
				  
				    console.log('login');
				    console.log(response);
				  }, function errorCallback(response) {
				  	console.log('error');
				    console.log(response);
				  });
	
	}
});