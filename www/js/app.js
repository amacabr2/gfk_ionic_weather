// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    //$httpProvider.defaults.headers.post['Content-Type'] = ' application/json; charset=utf-8';
    //$httpProvider.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    //$httpProvider.defaults.headers.post['Access-Control-Allow-Credentials'] = true;
    //$httpProvider.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST';

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
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

});