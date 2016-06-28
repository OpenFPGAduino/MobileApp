angular.module('starter.controllers', [])

.controller('DashBroadCtrl', function ($scope, $http) {
    var d;
    $http({
        method: 'GET',
        url: 'https://api-cn.mpsa.com/api/cn/1.0/trip/last/VF73AAHXTFJ807314?to=201610101010&unit=0&contract=620324101&from=201501010101&&client_id=f34fb7c8-edda-4849-950d-eee6871e74c9'
    }).success(function (data) {
        console.log(data)
        $scope.messagelist = []//[{ title: "Temp", message: "15.0" }, { title: "Moist", message: "50%" }]
        //for (i in data.trips) {
        var d = data.trips[data.trips.length - 1]
        $scope.messagelist.push({ title: "engineSpeed", message: d.engineSpeed })
        $scope.messagelist.push({ title: "avgSpeed", message: d.avgSpeed })
    }).error(function () {
        alert("error");
    });


})


.controller('ControllerCtrl', function ($scope, $timeout, $http) {
    var randomScalingFactor = function () {
        return Math.round(Math.random() * 100);
    };
    var randomColorFactor = function () {
        return Math.round(Math.random() * 255);
    };
    var randomColor = function (opacity) {
        return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
    };

    var config = {
        type: 'radar',
        data: {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: "rgba(220,220,220,0.2)",
                pointBackgroundColor: "rgba(220,220,220,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }, {
                label: 'Hidden dataset',
                hidden: true,
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
            }, {
                label: "My Second dataset",
                backgroundColor: "rgba(151,187,205,0.2)",
                pointBackgroundColor: "rgba(151,187,205,1)",
                hoverPointBackgroundColor: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }, ]
        },
        options: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Radar Chart'
            },
            scale: {
                reverse: false,
                gridLines: {
                    color: ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
                },
                ticks: {
                    beginAtZero: true
                }
            }
        }
    };

    var myRadar = new Chart(document.getElementById("myChart"), config);
    //$http({
    //    method: 'GET',
    //    url: 'https://api-cn.mpsa.com/api/cn/1.0/trip/last/VF73AAHXTFJ807314?to=201610101010&unit=0&contract=620324101&from=201501010101&&client_id=f34fb7c8-edda-4849-950d-eee6871e74c9'
    //}).success(function (data) {
    //    console.log(data)
    //    var t = data.trips.filter(function (x) {
    //        return (x.avgSpeed !=0)
    //    })
    //    .map(function (x) {
    //        return x.totMileage;
    //    })
    //    plot("engineSpeed", t.re, "rgba(0,0,192,1)")
    //}).error(function () {
    //    alert("error");
    //});

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
