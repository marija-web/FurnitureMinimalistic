//ispis teksta na dugme

var i = 0;
var txt = `GREY VELEVET 200 euros`;
var speed = 100;
    
function textF() {
    if (i < txt.length) {
        document.getElementById("fText").innerHTML += txt.charAt(i);
        i++;
        setTimeout(textF, speed);
      }
}

//jQuery galerry

$(function() {
  $('#myGallery a').lightBox();
});

    
    
 
    