angular.module('OWMApp',['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home',{
        url: '/home',
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
      })
      .state('cities.city',{
        url: '/cities/:city',
        templateUrl: 'city.html',
        controller: function($scope, $stateParams){
          $scope.city = $stateParams.city
        }
      })

  })
  .controller('HomeCtrl', function($scope){
    $scope.appname = 'Per';
  })
  .controller('CityCtrl', function($scope){
    $scope.city = $urlRouterProvider.city;
  });
