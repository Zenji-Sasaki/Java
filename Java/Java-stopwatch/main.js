const time = document.querySelector(".time")
const start = document.querySelector(".btn1")
const stop = document.querySelector(".btn2")
const reset = document.querySelector(".btn3")

let h = 0;
let m = 0;
let s = 0;
let ms = 0;
let timer;

function countStart() {
  timer = setInterval(count, 100);
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
}

function count() {
  time.innerHTML = h + ':' + m + ':' + s + ':' + ms
  ms++;
  if (ms === 10) {
  s++;
  ms = 0;}
  if (s === 60) {
  m++;
  s = 0;}
  if (m === 60) {
  h++;
  m = 0;}
}

function countStop() {
  clearInterval(timer);
  start.disabled = false;
  stop.disabled = true;
}

function countReset() {
  clearInterval(timer)
  time.innerHTML = '0:0:0:0'
  h = 0;
  m = 0;
  s = 0;
  ms = 0;
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
}