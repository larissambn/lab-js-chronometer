class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  //The start method is declared on the Chronometer class. 
  //It receives one argument, printTimeCallback, which is a function to be executed every 1 second. 
  //Inside the method, setInterval is used to run a function in 1-second intervals.
  //The arrow function increments the currentTime property by 1. It also checks if printTimeCallback is provided (not falsy) before invoking it.

getMinutes() {
  let currentTimeMinutes = Math.floor(this.currentTime / 60);
  return currentTimeMinutes;
}

getSeconds(){
  let currentTimeSeconds = this.currentTime % 60;
  return currentTimeSeconds;
}

computeTwoDigitNumber(value) { 
  return ("0" + value).slice(-2);
}

stop() {
  clearInterval(this.intervalId); 
  this.intervalId = null;
}

reset(){
  this.currentTime = 0;
}

  split() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}






