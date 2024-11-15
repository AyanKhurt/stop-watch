let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval;
let isRunning = false;

function updateDisplay() {
let display = document.getElementById("display");
    display.innerText =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
}

function startStopwatch() {
    if (!isRunning) {
        timerInterval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
        isRunning = true;
        document.getElementById("startBtn").disabled = true;
    }
}

function stopStopwatch() {
    clearInterval(timerInterval);
    isRunning = false;
    document.getElementById("startBtn").disabled = false;
}

function resetStopwatch() {
    clearInterval(timerInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    isRunning = false;
    updateDisplay();
    document.getElementById("startBtn").disabled = false;
}
