var app = angular.module('lab14',['ngRoute']);

//ROUTER
app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/dog',{
    controller:'dog',
    templateUrl: 'dog.html'
  })
  .when('/cat',{
    controller:'cat',
    templateUrl: 'cat.html'
  })
.when('/koi',{
  controller:'koi',
  templateUrl: 'koi.html'
})
.when('/parrot',{
  controller:'parrot',
  templateUrl: 'parrot.html'
})
.otherwise({ redirectTo: '/'});
$locationProvider.hashPrefix('');
});
