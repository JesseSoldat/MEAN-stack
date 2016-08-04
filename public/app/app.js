var myApp = angular.module('app', ['ui.router']);


myApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
    .state('dash', {
      url: "/",
      templateUrl: '/partials/main/main',
      controller: "MainCtrl"
    })


});