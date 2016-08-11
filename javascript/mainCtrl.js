angular.module("pomodoro")
    .controller("mainCtrl", function($scope, $timeout) {
        $scope.timeRemaining = 0;
        $scope.timerz = true;
        $scope.stopPomodoroButton = true;
        $scope.startPomodoroButton = false;

        $scope.pomodoro = function() {
            var endTime = new Date();
            endTime.setMinutes(endTime.getMinutes() + 25);
            console.log(endTime);
            $scope.current = {
                endTime: endTime
            };
            $scope.timerz = !$scope.timerz;
            $scope.stopPomodoroButton = false;
            $scope.startPomodoroButton = true;
            $scope.defaultTime = true;
            $timeout($scope.updateTime, 1000);
        };

        $scope.stopPomodoro = function() {
            $scope.stopPomodoroButton = true;
            $scope.startPomodoroButton = false;
            $scope.defaultTime = false;
            $scope.timerz = !$scope.timerz;
        }

        $scope.updateTime = function() {
            $scope.now = Date.now();
            console.log($scope.now);
            $timeout($scope.updateTime, 1000);
        };

})
.filter('countdown', function() {
    return function(currentTime, endTime) {
        if (currentTime >= endTime) {
            alert("Pomodoro Over!")
            return 0;
        }
        return endTime - currentTime;
    };
});
