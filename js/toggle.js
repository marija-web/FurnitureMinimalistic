
$(document).ready(function(){
    $("#textFade").hide();
  $("#buttonFade").click(function(){
    $("#textFade").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#textFade1").hide();
$("#buttonFade1").click(function(){
  $("#textFade1").slideToggle("slow");
});
});

$(document).ready(function(){
  $("#textFade2").hide();
$("#buttonFade2").click(function(){
  $("#textFade2").slideToggle("slow");
});
});

$(document).hover(function(){
  $(".skillPic img").animate({
         width:'330px',
         opacity: '0.9'
  });
})


