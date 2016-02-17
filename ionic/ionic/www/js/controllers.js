angular.module('starter.controllers', [])

.controller('DashBroadCtrl', function ($scope) {
    $scope.messagelist = [{ title: "Temp", message: "15.0" }, { title: "Moist", message: "50%" }]

})


.controller('ControllerCtrl', function ($scope, $timeout, $http) {
    $scope.list = new Array();
    $scope.startclock = false;
    $scope.end = "";
    $scope.counter = 0;
    $scope.moved = false;
    $scope.move = function () {
        if ($scope.moved == true) {
            return;
        }
        var date = new Date();
        var mytime = date.toLocaleTimeString();
        $scope.list.push(mytime);
        $http.post('db/add/baby', {
            date: data.toDateString(),
            time: mytime
        }).success();
        $scope.moved = true;
        $scope.counter++;
        $scope.time1 = $timeout(function () {
            $scope.moved = false;},
            1000 * 60)

        if ($scope.startclock == false) {
            $scope.startclock = true;
            $scope.time2 = $timeout(function () {
                $scope.end = "时间结束"; },
                1000 * 60 * 60  );
        }
    };

    $scope.clean = function() {
        $scope.list = null;
        $scope.list = new Array();
        $scope.startclock = false;
        $scope.moved = false;
        $scope.end = "";
        $scope.counter = 0;
        $timeout.cancel($scope.time1);
        $timeout.cancel($scope.time2);
    };

    $scope.history = function () {
        $http.get('db/list/baby').success(
            function (data) {
                $scope.end = data.toString();
            });
    };
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
