let startTime, intervalId;
let elapsedTime = 0;
let running = false;

let display = document.getElementById('display');

function updateDisplay() {
    let totalMilliseconds = Date.now() - startTime + elapsedTime;
    let totalSeconds = Math.floor(totalMilliseconds / 1000);
    let hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    let minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    let seconds = String(totalSeconds % 60).padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${seconds}`;
}

function startStopwatch() {
    if (!running) {
        startTime = Date.now();
        intervalId = setInterval(updateDisplay, 1000);
        running = true;
    }
}

function stopStopwatch() {
    if (running) {
        clearInterval(intervalId);
        elapsedTime += Date.now() - startTime;
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(intervalId);
    elapsedTime = 0;
    running = false;
    display.textContent = '00:00:00';
}
