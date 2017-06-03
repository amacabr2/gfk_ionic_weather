// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('HomeCtrl', function ($scope, $ionicLoading, $state) {

  $scope.search =function (city) {
    $state.go('weather', {city: city})
  }

})

.controller('WeatherCtrl', function ($scope, $stateParams, $ionicLoading, $http) {

    $scope.city = $stateParams.city;
    var appid = "$APPID=a49eec4ea62c856e58e0d5ccc0c30335";
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + $scope.city + appid;

    $ionicLoading.show({
        template: 'Chargement...'
    });

    $http.get(url, {headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'GET, POST',
        'Content-Type': ' application/json; charset=utf-8'
    }}).success(function (response) {
        $ionicLoading.hide();
        $scope.weather = response;
    }).error(function (response) {
        $ionicLoading.hide();
        $scope.weather = "Erreur : pas possible de récupérer les données";
    })




})

.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider.state('home', {
        url: '/home',
        templateUrl:'templates/home.html',
        controller: 'HomeCtrl'
    });

    $stateProvider.state('weather', {
        url: '/weather/:city',
        templateUrl: 'templates/weather.html',
        controller: 'WeatherCtrl'
    });

    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'templates/about.html'
    });

    $urlRouterProvider.otherwise('/home');

    $httpProvider.defaults.headers.post['Content-Type'] = ' application/json; charset=utf-8';
    $httpProvider.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    $httpProvider.defaults.headers.post['Access-Control-Allow-Credentials'] = true;
    $httpProvider.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST';

});