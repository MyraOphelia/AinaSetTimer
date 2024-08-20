document.getElementById('startBtn').addEventListener('click', function() {
    const timeInput = document.getElementById('time').value;
    let time = parseInt(timeInput);

    const timerDisplay = document.getElementById('timerDisplay');
    const interval = setInterval(function() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        // Formatting the timer display to always show two digits
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        timerDisplay.textContent = `${minutes}:${seconds}`;
        
        if (time <= 0) {
            clearInterval(interval);
            alert("Time's up!");
        }

        time--;
    }, 1000);
});
