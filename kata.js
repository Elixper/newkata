function zero() {
  return 0 ;
}
function one() {
  return 1 ;
}
function two() {
  return 2 ;
}
function three() {
  return 3 ;
}
function four() {
  return 4 ;
}
function five() {
  return 5 ;
}
function six() {
  return 6 ;
}
function seven() {
  return 7 ;
}
function eight() {
  return 8 ;
}
function nine() {
  return 9 ;
}

function plus(x) {
  return function (y){
    return x+y;
  }
}
function minus(x) {
  return function (y){
    return x-y;
  }
}

function times(x) {
  return function (y){
    return x*y;
  }
}

function dividedBy(x) {
  return function (y){
    return Math.floor(x/y);
  }
}

console.log(zero(plus(two())))