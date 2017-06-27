var className ="";
var classBG ="";
//var loopBool = false;


function addDiv() {
  var div = document.createElement("div");
  div.innerHTML = "Hello";
  document.getElementsByClassName("art")[0].appendChild(div).classList.add("box");
  document.getElementsByClassName("art")[0].appendChild(div).classList.add("b4");
  loopBool = true;
  delayTimer(2);
console.log( BGcol(classBG)); 

//  loopBool = false;
}

BGcol();

function BGcol(className) {
  setInterval(function() {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    var bg = "background:rgb(" + r + "," + g + "," + b + ");";
    var element = document.getElementsByClassName(className)[0];
    element.style = bg;
  }, 2000);
}


var elements = document.getElementsByClassName("art")[0].children;

function delayTimer(timeValue){
var timer = timeValue*1000;
setTimeout(function(){ console.log("the death of us all!"); }, timer);
}


for (var i = 1; i < elements.length+1; i++) {
classBG = "b"+[i];
BGcol(classBG);
delayTimer(1+1);
}



loopBool=false;

//for (var i = 1; i == i; i++) {
//classBG = "b"+[i];
//BGcol(classBG);
//delayTimer(2);
//console.log("Hello");
//}
