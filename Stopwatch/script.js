// Initialize time variables
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variable to store the interval timer ID
let timer = null;

/**
 * Starts the stopwatch timer.
 * If the timer is already running, it prevents starting another.
 */
function startStopwatch() {
    if (timer !== null) return; // Prevent multiple timers running simultaneously

    // Set interval to update the stopwatch every second (1000 ms)
    timer = setInterval(() => {
        seconds++; // Increment seconds

        // If seconds reach 60, reset seconds and increment minutes
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        // If minutes reach 60, reset minutes and increment hours
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        // Update the displayed time with leading zeros for consistency
        document.getElementById("time").innerText =
            String(hours).padStart(2, '0') + ':' +
            String(minutes).padStart(2, '0') + ':' +
            String(seconds).padStart(2, '0');

    }, 1000); // 1-second interval
}

/**
 * Stops the stopwatch timer by clearing the interval.
 */
function stopStopwatch() {
    clearInterval(timer); // Clear the running interval
    timer = null; // Reset timer variable so stopwatch can be started again
}

/**
 * Resets the stopwatch to 00:00:00 and stops it if running.
 */
function resetStopwatch() {
    stopStopwatch(); // Stop timer if running
    seconds = 0;
    minutes = 0;
    hours = 0;

    // Reset displayed time to zero
    document.getElementById("time").innerText = "00:00:00";
}
