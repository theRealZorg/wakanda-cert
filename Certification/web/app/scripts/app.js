var app = angular.module('starter', ['wakanda','ui.router'])

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/developers");
    
    $stateProvider
        .state('developers', {
            url: '/developers',
            templateUrl: 'views/devs.html',
            controller: 'devCtrl'
        })
        .state('devdetails', {
            url: '/devdetails',
            templateUrl: 'views/details.html',
            controller: 'detailCtrl'
        });
}])

app.service('WakandaManager', function($q, $wakanda) {
    var _this = this;
    var initPromise = $wakanda.init();
    this.$wakanda = $wakanda;

    this.ready = function() {
      var deferred = $q.defer();

      initPromise
        .then(function() {
          deferred.resolve(_this);
        })
        .catch(function(e) {
          deferred.reject(e);
        });

      return deferred.promise;
    };
  })