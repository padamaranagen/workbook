(function () {
var app = angular.module('Csharp', ['pdf']);

app.controller('CsharpController', ['$scope', '$http', function ($scope, $http) {
    $http.get('json/csharp.json')
    .success(function (response) {
        $scope.data = response.csharp;
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

