(function () {
    var app = angular.module('Home', []);

    app.controller('HomeController', ['$scope', '$http', function ($scope, $http) {
        $http.get('json/home.json')
        .success(function (response) {
            $scope.records = response.home;
        });       
    }]);
})();//end function

