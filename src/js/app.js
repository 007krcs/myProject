angular.module('myApp',['ngRoute'])
.config([
  '$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
      $routeProvider.when('/',{
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      }).when('/views', {
                template: '<h1 style="color:red">Thanks for sign in</h1>'
      }).otherwise({
        redirectTo : '/'
      });
  }
]);
