let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let timer = null;

    const timerDisplay = document.getElementById("timer");
    const startBtn = document.getElementById("start");
    const stopBtn = document.getElementById("stop");
    const resetBtn = document.getElementById("reset");

    function updateDisplay() {
      const h = String(hours).padStart(2, "0");
      const m = String(minutes).padStart(2, "0");
      const s = String(seconds).padStart(2, "0");
      timerDisplay.textContent = `${h}:${m}:${s}`;
    }

    function startTimer() {
      if (timer !== null) return; // already running
      timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
          seconds = 0;
          minutes++;
          if (minutes === 60) {
            minutes = 0;
            hours++;
          }
        }
        updateDisplay();
      }, 1000);
    }

    function stopTimer() {
      clearInterval(timer);
      timer = null;
    }

    function resetTimer() {
      stopTimer();
      seconds = 0;
      minutes = 0;
      hours = 0;
      updateDisplay();
    }

    startBtn.addEventListener("click", startTimer);
    stopBtn.addEventListener("click", stopTimer);
    resetBtn.addEventListener("click", resetTimer);
