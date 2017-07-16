angular.module('starter.services', [])

.service('hardware', function ($http) {  
    this.hex = function (x) {    
        return x.toString(16);
    }
    this.bin = function (x) {
        return x.toString(2);
    }
    this.Bytes2Float32 =  function (bytes) {
        var sign = (bytes & 0x80000000) ? -1 : 1;
        var exponent = ((bytes >> 23) & 0xFF) - 127;
        var significand = (bytes & ~(-1 << 23));
        if (exponent == 128)
            return sign * ((significand) ? Number.NaN : Number.POSITIVE_INFINITY);
        if (exponent == -127) {
            if (significand == 0) return sign * 0.0;
            exponent = -126;
            significand /= (1 << 22);
        } else significand = (significand | (1 << 23)) / (1 << 23);
        return sign * significand * Math.pow(2, exponent);
    }
    this.led = function(r,g,b) {
        $http.post(localStorage.hostname + "/fpga/api/call/led",
        JSON.stringify([0, r, g, b]))
       .then(function (response) {
           console.log(response);
       });
    }
    this.temperature = function (callback) {
        $http.post(localStorage.hostname + "/fpga/api/call/am2301_temperature",
        JSON.stringify([0]))
       .then(function (response) {
           callback(response);
       });
    }
    this.moisture = function (callback) {
        $http.post(localStorage.hostname + "/fpga/api/call/am2301_moisture",
        JSON.stringify([0]))
       .then(function (response) {
           callback(response);
       });
    }
})
