
(function () {
    var app = angular.module('wowApp', ['ngRoute', 'Home','QlikSense']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    //------------------ Home
    .when("/", {
        templateUrl: "app/home/home.html"
    })
    .when("/index", {
        templateUrl: "app/home/home.html"
    })  
    .when("/qlik-sense", {
        templateUrl: "app/qlik-sense/qlik-sense.html"
    })
    .when("/java", {
        templateUrl: "app/qlik-sense/qlik-sense.html"
    })
    .when("/csharp", {
        templateUrl: "app/qlik-sense/qlik-sense.html"
    })







    //------------------else 404
    .otherwise("/404", {templateUrl: "views/404.html"});
}]);


})();//end function