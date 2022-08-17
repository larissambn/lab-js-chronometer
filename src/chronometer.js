class Chronometer {
  constructor(){
      this.currentTime = 0;
      this.intervalId = null; 
    }
}

start(printTimeCallback) {
 this.intervalId = setInterval(()=>{ this.currentTime++; If(printTimeCallback){printTimeCallback()};}, 1000);
}

getMinutes() {
  let currentTimeMinutes = Math.floor(this.currentTime / 60);
  console.log(currentTimeMinutes);
}

getSeconds() {
  let currentTimeSeconds = this.currentTime % 60;
  console.log(currentTimeSeconds);
}

computeTwoDigitNumber(value) { 
    return ("0" + value).slice(-2);
  }


stop() {
  clearInterval(this.intervalId); 
  this.intervalId = null;
}

reset() {
   this.currentTime = 0;
}

split() {
  let minutes = this.twoDigitsNumber(this.currentTimeMinutes());
  let seconds = this.twoDigitsNumber(this.currentTimeSecond());
  return `${minutes} & ${seconds}`;

}





