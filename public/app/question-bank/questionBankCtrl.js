(function () {
var app = angular.module('QuestionBank', []);

app.controller('QuestionBankCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('json/qb.json')
    .success(function (response) {
        $scope.data = response.questionbank;
    });
}]);
})();//end function