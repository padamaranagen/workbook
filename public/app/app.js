
(function () {
    var app = angular.module('wowApp', ['ngRoute', 'Home', 'QlikSense', 'Angularjs', 'NodeJS', 'Csharp']);

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
    .when("/angularjs", {
        templateUrl: "app/angularjs/angularjs.html"
    })
    .when("/backbonejs", {
        templateUrl: "app/qlik-sense/qlik-sense.html"
    })
    .when("/bower", {
        templateUrl: "app/qlik-sense/qlik-sense.html"
    })
    .when("/csharp", {
        templateUrl: "app/csharp/csharp.html"
    })
    .when("/dotnet", {
        templateUrl: "app/qlik-sense/qlik-sense.html"
    })
    .when("/git", {
        templateUrl: "app/qlik-sense/qlik-sense.html"
    })
    .when("/grunt", {
        templateUrl: "app/qlik-sense/qlik-sense.html"
    })
    .when("/heroku", {
        templateUrl: "app/qlik-sense/qlik-sense.html"
    })
    .when("/java", {
        templateUrl: "app/qlik-sense/qlik-sense.html"
    })
    .when("/mongodb", {
        templateUrl: "app/qlik-sense/qlik-sense.html"
    })
    .when("/mysql", {
        templateUrl: "app/qlik-sense/qlik-sense.html"
    })
    .when("/nodejs", {
        templateUrl: "app/nodejs/nodejs.html"
    })
    .when("/oracle", {
        templateUrl: "app/qlik-sense/qlik-sense.html"
    })





    //------------------else 404
    .otherwise("/404", {templateUrl: "views/404.html"});
}]);


})();//end function