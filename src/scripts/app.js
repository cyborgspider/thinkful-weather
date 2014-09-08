angular.module('OWMApp',['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home',{
        url: '/home',
        templateUrl: 'home.html'
      })
      .state('about',{
        url: '/city',
        templateUrl: 'city.html'
      })

  })
  .controller('HomeCtrl', function($scope){
    $scope.appname = 'Wed';
  })
  .controller('CityCtrl', function($scope){
    $scope.city = 'Der City';
  });
