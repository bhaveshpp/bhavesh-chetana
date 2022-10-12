// .........................................
// .................... < Scroll Allert > .....................
// .........................................
window.onscroll=()=>{
  var getBtn = document.getElementById('ScrollDown')
  {
    getBtn.style.display = "none";
  }
}
var styles = [
    // 'background: linear-gradient(#D33106, #571402)'
    , 'border: 2px solid #D33106'
    , 'color: #D33106'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    ,'padding:0 5px'
    , 'font-size: 32px'
    ,'border-radius:30px'
].join(';');
console.log('\n\n%c SAVE THE DATE: 17th November, 2022!', styles);
// .........................................
// .................... < COUNTER > .....................
// .........................................


function updateTimer() {
    future  = Date.parse("Nov 17, 2022 18:00:00");
    now     = new Date();
    diff    = future - now;
  
    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );
  
    d = days;
    h = hours - days  * 24;
    m = mins  - hours * 60;
    s = secs  - mins  * 60;
  
    document.getElementById("timer")
      .innerHTML =
        '<div>' + d + '<span>days</span></div>' +
        '<div>' + h + '<span>hours</span></div>' +
        '<div>' + m + '<span>min</span></div>' +
        '<div>' + s + '<span>sec</span></div>' ;
  }
setInterval('updateTimer()', 1000 );


// .........................................
// .................... < autoPlay > .....................
// .........................................


var track = document.getElementById('track');

var controlBtn = document.getElementById('play-pause');

// window.onload = function(){
//   track.play();
  
// }
function playPause() {
    if (track.paused) {
        track.play();
        controlBtn.className = "pause";
    } else { 
        track.pause();
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);