var _a;
// Function to start the countdown
function startCountdown(totalSeconds) {
    var timerDisplay = document.getElementById("timer");
    var timeRemaining = totalSeconds;
    // Set the timer display initially
    updateTimerDisplay(timerDisplay, timeRemaining);
    var countdownInterval = setInterval(function () {
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = "Timer has expired";
            return;
        }
        timeRemaining--;
        updateTimerDisplay(timerDisplay, timeRemaining);
    }, 1000);
}
// Function to update the timer display
function updateTimerDisplay(display, seconds) {
    var minutes = Math.floor(seconds / 60);
    var secs = seconds % 60;
    display.textContent = "".concat(minutes.toString().padStart(2, "0"), ":").concat(secs.toString().padStart(2, "0"));
}
// Event listener for the Start button
(_a = document.getElementById("startButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var inputMinutes = parseInt(document.getElementById("minutes").value);
    var inputSeconds = parseInt(document.getElementById("seconds").value);
    var totalSeconds = (inputMinutes * 60) + inputSeconds;
    if (!isValidInput(totalSeconds)) {
        alert("Please enter valid time (minutes >= 0 and seconds >= 0 and < 60).");
        return;
    }
    startCountdown(totalSeconds);
});
// Function to validate the input seconds
function isValidInput(input) {
    return input >= 0;
}
