
(function () {
    var app = angular.module('wowApp', ['ngRoute', 'QlikSense']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    //------------------ Home
    .when("/", {
        templateUrl: "app/qlik-sense/qlik-sense.html"
    })
    .when("/index", {
        templateUrl: "app/qlik-sense/qlik-sense.html"
    })  







    //------------------else 404
    .otherwise("/404", {templateUrl: "views/404.html"});
}]);


})();//end function