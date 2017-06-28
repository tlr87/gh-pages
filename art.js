var className = "";
var classBG = "";
//var loopBool = false;
var piano = document.getElementById("keys");

function playAudio(Sindex) {
  var Sarray = ["piano-1.mp3", "piano-2.mp3", "piano-3.mp3", "piano-4.mp3",""];
  console.log("Play it a again sam!");
  document.getElementById("keys").setAttribute("src", Sarray[Sindex]);
  piano.play();
  delayTimer(4);
  piano.volume = 0.2;

}

BGcol();

function BGcol(className) {
  setInterval(function() {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
//    var Ivol = Math.random();
    var bg = "background:rgb(" + r + "," + g + "," + b + ");";
    var element = document.getElementsByClassName(className)[0];
    element.style = bg;
  //  console.log(Ivol);
  //  Ivol = vol;
}, 1000);
}


var elements = document.getElementsByClassName("art")[0].children;

function delayTimer(timeValue) {
  var timer = timeValue * 1000;
  setTimeout(function() {
    console.log("the death of us all!");
  }, timer);
}


for (var i = 1; i < elements.length + 1; i++) {
  classBG = "b" + [i];
  BGcol(classBG);
  delayTimer(2);

}
