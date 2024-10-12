// Function to start the countdown
function startCountdown(totalSeconds: number): void {
    const timerDisplay = document.getElementById("timer") as HTMLElement;
    let timeRemaining = totalSeconds;

    // Set the timer display initially
    updateTimerDisplay(timerDisplay, timeRemaining);

    const countdownInterval = setInterval(() => {
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
function updateTimerDisplay(display: HTMLElement, seconds: number): void {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    display.textContent = `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

// Event listener for the Start button
document.getElementById("startButton")?.addEventListener("click", () => {
    const inputMinutes = parseInt((document.getElementById("minutes") as HTMLInputElement).value);
    const inputSeconds = parseInt((document.getElementById("seconds") as HTMLInputElement).value);

    const totalSeconds = (inputMinutes * 60) + inputSeconds;

    if (!isValidInput(totalSeconds)) {
        alert("Please enter valid time (minutes >= 0 and seconds >= 0 and < 60).");
        return;
    }

    startCountdown(totalSeconds);
});

// Function to validate the input seconds
function isValidInput(input: number): boolean {
    return input >= 0;
}
