angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ControllerCtrl', function ($scope) {
    $scope.list = new Array();
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
        setTimeout(function () { $scope.moved = false; }, 1000 * 60)
    };

    $scope.clean = function() {
        $scope.list = null;
        $scope.list = new Array();
        $scope.counter = 0;
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
