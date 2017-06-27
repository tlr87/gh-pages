BGcol();

function BGcol() {
  setInterval(function() {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    var bg = "background:rgb(" + r + "," + g + "," + b + ");";
    var element = document.getElementsByClassName("box")[0];
    element.style = bg;



  }, 5000);

}

//var temp = document.getElementsByClassName("art");

//for(i=0; i < temp.length; i++){
//console.log("hello"[i]);
//}




var elements = document.getElementsByClassName("art")[0].children;
//console.log(elements.length+"Hello");

for (var i = 0; i < elements.length; i++) {
  //doSomething(elements[i]);
  console.log("hello");


}
