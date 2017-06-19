angular.module('zxApp', ['ui.materialize','ngRoute'])
    .controller('dashboardCtrl', dashboardFunction)
    .config(['$routeProvider', function($routeProvider){
  // routeProvider config, allows minification
  $routeProvider
    .when('/' || '#/home',{
    templateUrl   : 'html/home.html',
    controller    : 'dashboardCtrl',
    controllerAs  : 'vx'
  })
}]);
function dashboardFunction(){
  var zx = this;
}



