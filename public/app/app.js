
(function () {
    var app = angular.module('wowApp', ['ngRoute','QuestionBank']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    //------------------ Home
    .when("/", {
        templateUrl: "app/question-bank/question-bank.html"
    })
    .when("/index", {
        templateUrl: "app/question-bank/question-bank.html"
    })  







    //------------------else 404
    .otherwise("/404", {templateUrl: "views/404.html"});
}]);


})();//end function