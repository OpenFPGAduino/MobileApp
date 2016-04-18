angular.module('starter.controllers', [])

.controller('DashBroadCtrl', function ($scope) {
    $scope.messagelist = [{ title: "Temp", message: "15.0" }, { title: "Moist", message: "50%" }]

})


.controller('ControllerCtrl', function ($scope, $timeout, $http) {
   
})

.controller('SettingCtrl', function($scope, $timeout) {

    $scope.volumer = 20;

    var timeoutId = null;

    $scope.$watch('volumer', function () {


        console.log('Has changed');

        if (timeoutId !== null) {
            console.log('Ignoring this movement');
            return;
        }

        console.log('Not going to ignore this one');
        timeoutId = $timeout(function () {

            console.log('It changed recently!');

            $timeout.cancel(timeoutId);
            timeoutId = null;
            $scope.volumeg = $scope.volumer;
            // Now load data from server 
        }, 1000);


    });
});
