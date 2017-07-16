angular.module('starter.controllers', [])

.controller('DashBroadCtrl', function ($scope, $timeout, hardware) {
    $scope.messagelist = [];
    $scope.messagelist.push({ title: "Temp", message: "15.0" });
    $scope.messagelist.push({ title: "Moist", message: "50%" });
})


.controller('ControllerCtrl', function ($scope, hardware) {
    $scope.volumer = 128;
    $scope.volumeg = 128;
    $scope.volumeb = 128;
    $scope.setRGB = function (volumer,volumeg,volumeb) {
        console.log($scope.volumer);
        console.log($scope.volumeg);
        console.log($scope.volumeb);
        hardware.led($scope.volumer, $scope.volumeg, $scope.volumeb)
    }

    $scope.resetRGB = function () {
        $scope.volumer = 0;
        $scope.volumeg = 0;
        $scope.volumeb = 0;
        hardware.led(0, 0, 0)
    }

})

.controller('SettingCtrl', function ($scope) {
    if (!localStorage.hostname) {
        localStorage.hostname = "localhost:8080";
    }
    if (!localStorage.updatetime) {
        localStorage.updatetime = 60;
    }
    $scope.updateSetting = function () {
        if ($scope.hostname)
            localStorage.hostname = $scope.hostname;
        if ($scope.updatetime)
            localStorage.updatetime = $scope.updatetime * 1000;
    }
 
});
