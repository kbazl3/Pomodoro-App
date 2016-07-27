angular.module("pomodoro")
    .controller("mainCtrl", function($scope, $timeout) {
        $scope.timeRemaining = 0;
        $scope.pomodoro = function() {
            var endTime = new Date();
            endTime.setMinutes(endTime.getMinutes() + 25);
            console.log(endTime);
            $scope.current = {
                endTime: endTime
            };
            $timeout($scope.updateTime, 1000);
        };

        $scope.updateTime = function() {
            $scope.now = Date.now();
            $timeout($scope.updateTime, 1000);
        };

});
