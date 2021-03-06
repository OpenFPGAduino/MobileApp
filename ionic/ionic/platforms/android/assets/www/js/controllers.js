angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ControllerCtrl', function ($scope, $timeout) {
    $scope.list = new Array();
    $scope.startclock = false;
    $scope.end = "";
    $scope.counter = 0;
    $scope.moved = false;
    $scope.move = function () {
        if ($scope.moved == true) {
            return;
        }
        var mytime =  new Date().toLocaleTimeString();
        $scope.list.push(mytime);
        $scope.moved = true;
        $scope.counter++;
        $scope.time1 = $timeout(function () {
            $scope.moved = false;},
            1000 * 60)

        if ($scope.startclock == false) {
            $scope.startclock = true;
            $scope.time2 = $timeout(function () {
                $scope.end = "时间结束"; },
                1000 * 60 * 60);
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
        console.log("history");
    };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
