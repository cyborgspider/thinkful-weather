angular.module('OWMApp',['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
      })

      .state('cities', {
        url: '/cities',
        templateUrl: 'cities.html'
      })

      .state('cities.city', {
        url: '/cities/:city',
        templateUrl: 'city.html',
        controller: 'CityCtrl'
      });

  })

  .controller('HomeCtrl', function($scope){
    $scope.appname = 'UI Router Practice App';
  })

  .controller('CityCtrl', function($scope, $stateParams){
    $scope.city = $stateParams.city;
    console.log('der');
  });
