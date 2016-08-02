(function () {
var app = angular.module('NodeJS', ['pdf']);

app.controller('NodeJSController', ['$scope', '$http', function ($scope, $http) {
    $http.get('json/nodejs.json')
    .success(function (response) {
        $scope.data = response.nodejs;
    });
    $scope.openDocument = function (file) {
        //console.log(file);
        //$scope.pdfName = 'Relativity: The Special and General Theory by Albert Einstein';
        $scope.pdfUrl = file;
        $scope.scroll = 0;
        $scope.loading = 'loading';

        $scope.getNavStyle = function (scroll) {
            if (scroll > 100) return 'pdf-controls fixed';
            else return 'pdf-controls';
        }

        $scope.onError = function (error) {
            //console.log(error);
        }

        $scope.onLoad = function () {
            $scope.loading = '';
        }

        $scope.onProgress = function (progress) {
            //console.log(progress);
        }
    }
}]);
})();//end function

