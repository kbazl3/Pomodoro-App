angular.module("pomodoro", [])
    .filter('countdown', function() {
        return function(currentTime, endTime) {
            if (currentTime >= endTime) {
                alert("Pomodoro Over!")
                return 0;
            }
            return endTime - currentTime;
        };
    });
